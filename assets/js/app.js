// ==========================================
// 高圧ガス past-quiz アプリケーションコア (app.js)
// ==========================================

let allQuizData = [];
let filteredQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let currentSubjectKey = 'hoan';

let detailedHistory = JSON.parse(localStorage.getItem('gas_quiz_detailed_history')) || {};
let bookmarks = JSON.parse(localStorage.getItem('gas_quiz_bookmarks')) || [];

// --- 音声・ドライブモード管理用変数 ---
let isDriveMode = false;
let recognition = null;
let isListening = false;

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadQuizData();
    updateStatsSummary();
    checkUrlParamsAndInit();
    initSpeechRecognition();
    updateDriveButtonUI();
});

function initTheme() {
    if (localStorage.getItem('gas_theme') === 'dark') {
        document.documentElement.classList.add('dark');
        const darkIcon = document.getElementById('dark-icon');
        if (darkIcon) darkIcon.textContent = '☀️';
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('gas_theme', isDark ? 'dark' : 'light');
    const darkIcon = document.getElementById('dark-icon');
    if (darkIcon) darkIcon.textContent = isDark ? '☀️' : '🌙';
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function prioritizeQuestions(array) {
    const unhandled = [];
    const wrong = [];
    const lowAccuracy = [];
    const perfect = [];

    array.forEach(item => {
        const key = getQuestionKey(item);
        const stats = detailedHistory[key];

        if (!stats || !stats.solved || stats.solved === 0) {
            unhandled.push(item);
        } else {
            const accuracy = stats.correct / stats.solved;
            if (accuracy < 0.5) {
                wrong.push(item);
            } else if (accuracy < 1.0) {
                lowAccuracy.push(item);
            } else {
                perfect.push(item);
            }
        }
    });

    return [
        ...shuffleArray(unhandled),
        ...shuffleArray(wrong),
        ...shuffleArray(lowAccuracy),
        ...shuffleArray(perfect)
    ];
}

function extractQuestions(sourceData, defaultSubject) {
    const results = [];
    if (!sourceData) return results;

    if (Array.isArray(sourceData)) {
        sourceData.forEach(item => {
            if (item) results.push({ ...item, subject: item.subject || defaultSubject });
        });
    } else if (typeof sourceData === 'object') {
        Object.keys(sourceData).forEach(key => {
            const val = sourceData[key];
            if (Array.isArray(val)) {
                val.forEach(item => {
                    if (item) results.push({ ...item, subject: item.subject || defaultSubject, yearKey: key });
                });
            } else if (typeof val === 'object' && val !== null) {
                results.push({ ...val, subject: val.subject || defaultSubject, yearKey: key });
            }
        });
    }
    return results;
}

function loadQuizData() {
    allQuizData = [];
    if (typeof gakushikiQuestions !== 'undefined') allQuizData.push(...extractQuestions(gakushikiQuestions, 'gakushiki'));
    if (typeof hoanQuestions !== 'undefined') allQuizData.push(...extractQuestions(hoanQuestions, 'hoan'));
    if (typeof hohreiQuestions !== 'undefined') allQuizData.push(...extractQuestions(hohreiQuestions, 'hohrei'));
}

function checkUrlParamsAndInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramSubject = urlParams.get('subject') || urlParams.get('sub');
    const paramYear = urlParams.get('year') || urlParams.get('y');
    const paramQ = urlParams.get('q') || urlParams.get('qNum');
    const paramB = urlParams.get('b') || urlParams.get('branch');

    if (paramSubject) {
        setTimeout(() => {
            filterDataByParams(paramSubject, paramYear, paramQ, paramB);
        }, 50);
    }
}

// ドライブモードのON/OFF切り替え（左上ボタン押下時）
function toggleDriveMode() {
    if (!isDriveMode && !checkSpeechSupport()) return;

    isDriveMode = !isDriveMode;
    updateDriveButtonUI();

    const quizContainer = document.getElementById('quiz-container');
    const isQuizActive = quizContainer && !quizContainer.classList.contains('hidden');

    if (isDriveMode) {
        if (isQuizActive) {
            speakQuestion();
        }
    } else {
        stopSpeech();
        stopListening();
        if (isQuizActive) {
            renderCurrentQuestion();
        }
    }
}

function updateDriveButtonUI() {
    const driveBtn = document.getElementById('drive-toggle-btn');
    if (!driveBtn) return;

    if (isDriveMode) {
        driveBtn.className = "p-2 rounded-full bg-purple-600 text-white shadow-lg animate-pulse transition flex items-center justify-center border border-purple-400";
        driveBtn.title = "音声ドライブモード: ON（クリックで解除）";
    } else {
        driveBtn.className = "p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition flex items-center justify-center border border-transparent";
        driveBtn.title = "音声ドライブモード: OFF（クリックで開始）";
    }
}

function checkSpeechSupport() {
    if (!('speechSynthesis' in window) || !('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert('お使いのブラウザは音声読み上げ・音声認識に対応していません。（Google Chrome または Safari をご使用ください）');
        return false;
    }
    return true;
}

function startQuiz(subject) {
    stopSpeech();
    stopListening();
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');
    filterQuizData(subject);
}

function startBookmarkQuiz() {
    stopSpeech();
    stopListening();
    if (bookmarks.length === 0) {
        alert('ブックマークされた問題はありません。');
        return;
    }
    const matchedData = allQuizData.filter(item => bookmarks.includes(getQuestionKey(item)));
    if (matchedData.length === 0) {
        alert('ブックマークされた問題が見つかりませんでした。');
        return;
    }

    filteredQuizData = prioritizeQuestions(matchedData);
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    renderCurrentQuestion();
}

function startWrongQuiz() {
    stopSpeech();
    stopListening();
    const matchedData = allQuizData.filter(item => {
        const stats = detailedHistory[getQuestionKey(item)];
        return stats && stats.solved > stats.correct;
    });

    if (matchedData.length === 0) {
        alert('間違えた履歴のある問題はありません。');
        return;
    }

    filteredQuizData = prioritizeQuestions(matchedData);
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    renderCurrentQuestion();
}

function filterQuizData(subject) {
    currentSubjectKey = subject;
    const matchedData = allQuizData.filter(item => (item.subject || getSubjectFromCategory(item)) === subject);
    filteredQuizData = prioritizeQuestions(matchedData);
    currentQuestionIndex = 0;
    score = 0;
    renderCurrentQuestion();
}

function filterDataByParams(subject, year, qNum, branch) {
    currentSubjectKey = subject;
    const targetYearWest = year ? parseYearToWest(year) : null;
    const targetQNum = qNum ? parseInt(qNum, 10) : null;
    let targetBranch = (branch && subject !== 'gakushiki') ? parseBranch(decodeURIComponent(branch)) : null;

    filteredQuizData = allQuizData.filter(item => {
        if ((item.subject || getSubjectFromCategory(item)) !== subject) return false;
        if (targetYearWest && parseYearToWest(item) !== targetYearWest) return false;
        if (targetQNum !== null && parseQuestionNum(item) !== targetQNum) return false;
        if (targetBranch && parseBranch(item) !== targetBranch) return false;
        return true;
    });

    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');

    if (filteredQuizData.length === 0) {
        quizContainer.innerHTML = `
            <div class="text-center py-12 px-4">
                <h2 class="text-lg font-bold text-slate-800 dark:text-white mb-2">指定された問題が見つかりません</h2>
                <button onclick="backToStart()" class="mt-4 px-5 py-2.5 bg-slate-700 text-white rounded-xl text-sm font-bold">トップへ戻る</button>
            </div>
        `;
    } else {
        currentQuestionIndex = 0;
        score = 0;
        renderCurrentQuestion();
    }
}

function getQuestionKey(item) {
    const sub = item.subject || getSubjectFromCategory(item) || currentSubjectKey;
    const year = parseYearToWest(item);
    const qNum = parseQuestionNum(item);
    const branch = sub === 'gakushiki' ? 'ALL' : parseBranch(item);
    return `${sub}_${year}_Q${qNum}_${branch}`;
}

function getAllValuesAsString(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    if (typeof obj === "number") return String(obj);
    if (typeof obj === "object") return Object.values(obj).map(v => getAllValuesAsString(v)).join(" ");
    return "";
}

function getSubjectFromCategory(item) {
    const text = getAllValuesAsString(item);
    if (text.includes("保安")) return "hoan";
    if (text.includes("法令")) return "hohrei";
    if (text.includes("学識")) return "gakushiki";
    return "hoan";
}

function parseYearToWest(item) {
    if (item === null || item === undefined) return "2022";
    const str = getAllValuesAsString(item).toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
    if (str.includes('2025') || str.includes('r7') || str.includes('令和7')) return '2025';
    if (str.includes('2024') || str.includes('r6') || str.includes('令和6')) return '2024';
    if (str.includes('2023') || str.includes('r5') || str.includes('令和5')) return '2023';
    if (str.includes('2022') || str.includes('r4') || str.includes('令和4')) return '2022';
    if (str.includes('2021') || str.includes('r3') || str.includes('令和3')) return '2021';
    return "2022";
}

function parseYearJapanese(item) {
    const map = { '2021':'令和3', '2022':'令和4', '2023':'令和5', '2024':'令和6', '2025':'令和7' };
    return map[parseYearToWest(item)] || '令和4';
}

function parseQuestionNum(item) {
    const text = getAllValuesAsString(item);
    const qMatch = text.match(/(?:問|Q|q)\s*[-‐–—]?\s*(\d+)/i);
    if (qMatch) return parseInt(qMatch[1], 10);
    const cleanedText = text.replace(/(?:202[1-5]|r[3-7]|R[3-7]|令和[3-7３-７]年?度?)/gi, '');
    const numMatch = cleanedText.match(/\b([1-9]|1[0-5])\b/);
    return numMatch ? parseInt(numMatch[1], 10) : 1;
}

function parseBranch(item) {
    if (!item) return "イ";
    const text = String(getAllValuesAsString(item)).replace(/一/g, 'イ').replace(/二/g, 'ニ').replace(/三/g, 'ハ').replace(/四/g, 'ニ');
    const match = text.match(/([イロハニ])/);
    return match ? match[1] : "イ";
}

// ----------------------------------------------------------------------
// 画面描画
// ----------------------------------------------------------------------
function renderCurrentQuestion() {
    stopSpeech();
    stopListening();

    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (filteredQuizData.length === 0 || currentQuestionIndex >= filteredQuizData.length) {
        renderResultSummary();
        return;
    }

    const qData = filteredQuizData[currentQuestionIndex];
    const totalCount = filteredQuizData.length;
    const currentNum = currentQuestionIndex + 1;

    const displayYear = parseYearJapanese(qData);
    const displayQNum = parseQuestionNum(qData);
    const displayBranch = currentSubjectKey === 'gakushiki' ? '' : parseBranch(qData);

    let subjectLabel = "保安管理技術";
    if (currentSubjectKey === 'hohrei') subjectLabel = "法令";
    if (currentSubjectKey === 'gakushiki') subjectLabel = "学識";

    const key = getQuestionKey(qData);
    const isBookmarked = bookmarks.includes(key);

    let optionsHtml = "";
    if (qData.options && Array.isArray(qData.options) && qData.options.length > 0) {
        optionsHtml = `<div class="grid grid-cols-1 gap-2 mt-4">`;
        qData.options.forEach((opt, idx) => {
            optionsHtml += `
                <button onclick="checkAnswer(${idx})" class="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 transition text-sm font-medium text-slate-800 dark:text-slate-200">
                    ${idx + 1}. ${escapeHTML(opt)}
                </button>
            `;
        });
        optionsHtml += `</div>`;
    } else {
        optionsHtml = `
            <div class="grid grid-cols-2 gap-3 mt-6">
                <button onclick="checkAnswer(true)" class="py-4 px-6 rounded-xl bg-blue-50 dark:bg-slate-700 hover:bg-blue-100 border-2 border-blue-200 dark:border-slate-600 text-blue-600 dark:text-blue-400 font-bold text-lg shadow-sm transition flex flex-col items-center justify-center">
                    <span class="text-2xl">◯</span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">正しい${isDriveMode ? '（「マル」）' : ''}</span>
                </button>
                <button onclick="checkAnswer(false)" class="py-4 px-6 rounded-xl bg-rose-50 dark:bg-slate-700 hover:bg-rose-100 border-2 border-rose-200 dark:border-slate-600 text-rose-600 dark:text-rose-400 font-bold text-lg shadow-sm transition flex flex-col items-center justify-center">
                    <span class="text-2xl">✕</span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">誤り${isDriveMode ? '（「バツ」）' : ''}</span>
                </button>
            </div>
        `;
    }

    const questionText = qData.question || qData.text || qData.content || getAllValuesAsString(qData);

    const voiceStatusHeader = isDriveMode ? `
        <div class="mb-3 p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 flex justify-between items-center text-xs text-purple-700 dark:text-purple-300">
            <div class="flex items-center space-x-1 font-bold">
                <span id="voice-indicator" class="animate-pulse">🎙️</span>
                <span id="voice-status">問題を読み上げています...</span>
            </div>
            <button onclick="speakQuestion()" class="px-2 py-1 bg-purple-600 text-white rounded font-bold hover:bg-purple-700">🔊 再読込</button>
        </div>
    ` : '';

    container.innerHTML = `
        ${voiceStatusHeader}

        <div class="flex justify-between items-center mb-4">
            <span class="text-sm font-semibold text-slate-500 dark:text-slate-400">問題 ${currentNum} / ${totalCount}</span>
            <div class="flex items-center space-x-2">
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold px-2.5 py-1 rounded">
                    ${subjectLabel} (${displayYear}年 問${displayQNum} ${displayBranch})
                </span>
                <button onclick="toggleBookmarkCurrent()" class="text-xl px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600">${isBookmarked ? '★' : '☆'}</button>
            </div>
        </div>

        <div class="text-base md:text-lg font-medium leading-relaxed mb-6 text-slate-800 dark:text-slate-200 whitespace-pre-wrap">${escapeHTML(questionText)}</div>

        <div id="facility-container" class="mb-6 hidden"></div>

        <div id="answer-options-container">
            ${optionsHtml}
        </div>

        <div id="explanation-container" class="hidden mt-6 p-4 bg-slate-50 dark:bg-slate-700 border-l-4 border-blue-500 rounded-r-lg">
            <div id="result-badge" class="font-bold text-base mb-2"></div>
            <h3 class="font-bold text-slate-800 dark:text-white mb-1">【解説】</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">${escapeHTML(qData.explanation || qData.commentary || "解説はありません。")}</p>
            <button onclick="nextQuestion()" class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition shadow text-sm">
                次の問題へ進む →
            </button>
        </div>

        <div class="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button onclick="backToStart()" class="w-full bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-bold py-3 px-4 rounded-lg text-sm">
                学習を終了してトップに戻る
            </button>
        </div>
    `;

    renderFacility(qData);

    if (isDriveMode) {
        speakQuestion();
    }
}

function renderFacility(question) {
    const facilityContainer = document.getElementById('facility-container');
    if (!facilityContainer) return;
    const fId = question ? (question.facilityId || question.facilityld) : null;

    if (question && question.hasFacility && fId && typeof facilityDataList !== 'undefined') {
        const facility = facilityDataList[fId];
        if (facility) {
            facilityContainer.innerHTML = createFacilityHTML(facility);
            facilityContainer.classList.remove('hidden');
            return;
        }
    }
    facilityContainer.classList.add('hidden');
}

function createFacilityHTML(facility) {
    if (!facility) return '';
    return `
        <div class="bg-amber-50/60 dark:bg-slate-800/80 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4 text-xs text-slate-700 dark:text-slate-300">
            <div class="font-bold text-amber-800 dark:text-amber-400 mb-2">🏢 【事業所の例】${escapeHTML(facility.title || facility.name || '')}</div>
            ${facility.overview ? `<p class="mb-2">${escapeHTML(facility.overview)}</p>` : ''}
        </div>
    `;
}

function checkAnswer(userAnswer) {
    stopSpeech();
    stopListening();

    const qData = filteredQuizData[currentQuestionIndex];
    let isCorrect = false;
    const answerValue = (qData.isTrue !== undefined) ? qData.isTrue : qData.answer;

    if (typeof answerValue === 'boolean') {
        isCorrect = (userAnswer === answerValue);
    } else if (typeof answerValue === 'number') {
        isCorrect = (userAnswer === answerValue);
    } else if (typeof answerValue === 'string') {
        const cleanAns = answerValue.trim().toLowerCase();
        if (cleanAns === '〇' || cleanAns === 'o' || cleanAns === 'true') isCorrect = (userAnswer === true);
        else if (cleanAns === '×' || cleanAns === 'x' || cleanAns === 'false') isCorrect = (userAnswer === false);
        else isCorrect = (String(userAnswer) === cleanAns);
    }

    if (isCorrect) score++;

    recordDetailedHistory(qData, isCorrect);
    updateStatsSummary();

    const optionsContainer = document.getElementById('answer-options-container');
    const expContainer = document.getElementById('explanation-container');
    const badge = document.getElementById('result-badge');

    if (optionsContainer) optionsContainer.classList.add('pointer-events-none', 'opacity-50');

    if (expContainer && badge) {
        if (isCorrect) {
            badge.className = "font-bold text-base md:text-lg mb-2 text-emerald-600 dark:text-emerald-400";
            badge.innerHTML = "⭕ 正解！";
        } else {
            badge.className = "font-bold text-base md:text-lg mb-2 text-rose-600 dark:text-rose-400";
            badge.innerHTML = "❌ 不正解...";
        }
        expContainer.classList.remove('hidden');
    }

    if (isDriveMode) {
        const feedbackText = (isCorrect ? "正解です。" : "不正解です。") + " 解説。" + (qData.explanation || "解説はありません。");
        speakText(feedbackText, () => {
            setTimeout(() => {
                nextQuestion();
            }, 1500);
        });
    }
}

function recordDetailedHistory(currentData, isCorrect) {
    const key = getQuestionKey(currentData);
    if (!detailedHistory[key]) detailedHistory[key] = { solved: 0, correct: 0 };
    detailedHistory[key].solved++;
    if (isCorrect) detailedHistory[key].correct++;
    localStorage.setItem('gas_quiz_detailed_history', JSON.stringify(detailedHistory));
}

function toggleBookmarkCurrent() {
    const qData = filteredQuizData[currentQuestionIndex];
    if (!qData) return;
    const key = getQuestionKey(qData);
    const idx = bookmarks.indexOf(key);
    if (idx >= 0) bookmarks.splice(idx, 1);
    else bookmarks.push(key);
    localStorage.setItem('gas_quiz_bookmarks', JSON.stringify(bookmarks));
    renderCurrentQuestion();
}

function updateStatsSummary() {
    let totalSolved = 0, totalCorrect = 0;
    Object.values(detailedHistory).forEach(item => {
        totalSolved += item.solved || 0;
        totalCorrect += item.correct || 0;
    });
    const rate = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
    const totalSolvedEl = document.getElementById('total-solved');
    const accuracyRateEl = document.getElementById('accuracy-rate');
    if (totalSolvedEl) totalSolvedEl.textContent = totalSolved;
    if (accuracyRateEl) accuracyRateEl.textContent = rate;
}

function nextQuestion() {
    currentQuestionIndex++;
    renderCurrentQuestion();
}

function backToStart() {
    stopSpeech();
    stopListening();
    if (window.location.search) window.history.pushState({}, '', window.location.pathname);
    const quizContainer = document.getElementById('quiz-container');
    const startScreen = document.getElementById('start-screen');
    if (quizContainer) quizContainer.classList.add('hidden');
    if (startScreen) startScreen.classList.remove('hidden');
    updateStatsSummary();
}

function renderResultSummary() {
    stopSpeech();
    stopListening();
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const total = filteredQuizData.length;
    const rate = total > 0 ? Math.round((score / total) * 100) : 0;

    if (isDriveMode) {
        const endText = `演習が完了しました。正解数は ${total} 問中 ${score} 問。正解率は ${rate} パーセントです。`;
        speakText(endText);
    }

    container.innerHTML = `
        <div class="text-center py-6">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">🎉 演習完了！</h2>
            <p class="text-4xl font-extrabold ${rate >= 60 ? 'text-blue-600' : 'text-rose-500'} mb-8">${score} / ${total}</p>
            <button onclick="backToStart()" class="w-full bg-slate-800 text-white font-bold py-3 px-6 rounded-xl">トップに戻る</button>
        </div>
    `;
}

function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

// ==========================================
// 音声合成 (Text-to-Speech) API 制御
// ==========================================
function speakText(text, onEndCallback) {
    stopSpeech();
    if (!('speechSynthesis' in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 1.0;

    utterance.onend = () => {
        if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
        if (onEndCallback) onEndCallback();
    };

    window.speechSynthesis.speak(utterance);
}

function speakQuestion() {
    if (!isDriveMode) return;

    const qData = filteredQuizData[currentQuestionIndex];
    if (!qData) return;

    const questionText = qData.question || qData.text || qData.content || getAllValuesAsString(qData);
    let fullText = `問題。 ${questionText}。 `;

    if (qData.options && Array.isArray(qData.options) && qData.options.length > 0) {
        fullText += "選択肢。";
        qData.options.forEach((opt, idx) => {
            fullText += ` ${idx + 1}番、${opt}。`;
        });
        fullText += " 何番ですか？";
    } else {
        fullText += " 正しいですか、誤りですか？";
    }

    const statusEl = document.getElementById('voice-status');
    if (statusEl) statusEl.textContent = "問題を読み上げています...";

    speakText(fullText, () => {
        if (statusEl) statusEl.textContent = "音声解答を受付中... (「マル」「バツ」「1番」など)";
        startListening();
    });
}

function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// ==========================================
// 音声認識 (Speech Recognition) API 制御
// ==========================================
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim().toLowerCase();
        console.log("音声認識結果:", transcript);

        const statusEl = document.getElementById('voice-status');
        if (statusEl) statusEl.textContent = `認識: 「${transcript}」`;

        handleVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
        console.warn("音声認識エラー:", event.error);
        if (isListening && isDriveMode) {
            setTimeout(() => { startListening(); }, 1000);
        }
    };

    recognition.onend = () => {
        isListening = false;
        const indicator = document.getElementById('voice-indicator');
        if (indicator) indicator.classList.remove('animate-pulse');
    };
}

function startListening() {
    if (!isDriveMode || !recognition || isListening) return;
    try {
        isListening = true;
        const indicator = document.getElementById('voice-indicator');
        if (indicator) indicator.classList.add('animate-pulse');
        recognition.start();
    } catch (e) {
        console.error(e);
    }
}

function stopListening() {
    if (recognition && isListening) {
        isListening = false;
        recognition.stop();
    }
}

function handleVoiceCommand(text) {
    if (!isDriveMode) return;

    const qData = filteredQuizData[currentQuestionIndex];
    if (!qData) return;

    if (text.includes("まる") || text.includes("丸") || text.includes("正しい") || text.includes("はい") || text.includes("オウ")) {
        checkAnswer(true);
        return;
    }
    if (text.includes("ばつ") || text.includes("罰") || text.includes("誤り") || text.includes("ちがう") || text.includes("いいえ")) {
        checkAnswer(false);
        return;
    }

    if (qData.options && Array.isArray(qData.options) && qData.options.length > 0) {
        if (text.includes("1") || text.includes("一") || text.includes("いち")) { checkAnswer(0); return; }
        if (text.includes("2") || text.includes("二") || text.includes("に")) { checkAnswer(1); return; }
        if (text.includes("3") || text.includes("三") || text.includes("さん")) { checkAnswer(2); return; }
        if (text.includes("4") || text.includes("四") || text.includes("よん") || text.includes("し")) { checkAnswer(3); return; }
    }

    if (text.includes("次") || text.includes("つぎ") || text.includes("スキップ")) {
        nextQuestion();
        return;
    }
    if (text.includes("もう一度") || text.includes("リピート") || text.includes("もういっかい")) {
        speakQuestion();
        return;
    }

    speakText("もう一度お願いします", () => {
        startListening();
    });
}

// ----------------------------------------------------------------------
// 履歴データ出力・復元
// ----------------------------------------------------------------------
function exportData() {
    const exportObject = { detailedHistory, bookmarks, exportDate: new Date().toISOString() };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `gas_quiz_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (importedData.detailedHistory) {
                Object.keys(importedData.detailedHistory).forEach(key => {
                    if (!detailedHistory[key]) detailedHistory[key] = importedData.detailedHistory[key];
                    else {
                        detailedHistory[key].solved = Math.max(detailedHistory[key].solved, importedData.detailedHistory[key].solved || 0);
                        detailedHistory[key].correct = Math.max(detailedHistory[key].correct, importedData.detailedHistory[key].correct || 0);
                    }
                });
                localStorage.setItem('gas_quiz_detailed_history', JSON.stringify(detailedHistory));
            }
            if (importedData.bookmarks) {
                bookmarks = Array.from(new Set([...bookmarks, ...importedData.bookmarks]));
                localStorage.setItem('gas_quiz_bookmarks', JSON.stringify(bookmarks));
            }
            updateStatsSummary();
            alert("履歴を正常にインポートしました！");
            location.reload();
        } catch (err) {
            alert("ファイルの読み込みに失敗しました。");
        }
    };
    reader.readAsText(file);
}
