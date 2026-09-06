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

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadQuizData();
    updateStatsSummary();
    checkUrlParamsAndInit();
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

function extractQuestions(sourceData, defaultSubject) {
    const results = [];
    if (!sourceData) return results;

    if (Array.isArray(sourceData)) {
        sourceData.forEach(item => {
            if (item) {
                results.push({ ...item, subject: item.subject || defaultSubject });
            }
        });
    } else if (typeof sourceData === 'object') {
        Object.keys(sourceData).forEach(key => {
            const val = sourceData[key];
            if (Array.isArray(val)) {
                val.forEach(item => {
                    if (item) {
                        results.push({ ...item, subject: item.subject || defaultSubject, yearKey: key });
                    }
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

    if (typeof gakushikiQuestions !== 'undefined') {
        allQuizData.push(...extractQuestions(gakushikiQuestions, 'gakushiki'));
    }
    if (typeof hoanQuestions !== 'undefined') {
        allQuizData.push(...extractQuestions(hoanQuestions, 'hoan'));
    }
    if (typeof hohreiQuestions !== 'undefined') {
        allQuizData.push(...extractQuestions(hohreiQuestions, 'hohrei'));
    }
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

function startQuiz(subject) {
    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');
    filterQuizData(subject);
}

function startBookmarkQuiz() {
    if (bookmarks.length === 0) {
        alert('ブックマークされた問題はありません。');
        return;
    }
    const matchedData = allQuizData.filter(item => {
        const key = getQuestionKey(item);
        return bookmarks.includes(key);
    });

    if (matchedData.length === 0) {
        alert('ブックマークされた問題が見つかりませんでした。');
        return;
    }

    filteredQuizData = shuffleArray(matchedData);

    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    renderCurrentQuestion();
}

function startWrongQuiz() {
    const matchedData = allQuizData.filter(item => {
        const key = getQuestionKey(item);
        const stats = detailedHistory[key];
        return stats && stats.solved > stats.correct;
    });

    if (matchedData.length === 0) {
        alert('間違えた履歴のある問題はありません。');
        return;
    }

    filteredQuizData = shuffleArray(matchedData);

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
    const matchedData = allQuizData.filter(item => {
        const itemSubject = item.subject || getSubjectFromCategory(item);
        return itemSubject === subject;
    });

    filteredQuizData = shuffleArray(matchedData);

    currentQuestionIndex = 0;
    score = 0;
    renderCurrentQuestion();
}

// ----------------------------------------------------------------------
// 精密絞り込み処理（問題が存在しない場合の不完全データ制御対応）
// ----------------------------------------------------------------------
function filterDataByParams(subject, year, qNum, branch) {
    currentSubjectKey = subject;

    const targetYearWest = year ? parseYearToWest(year) : null;
    const targetQNum = qNum ? parseInt(qNum, 10) : null;
    let targetBranch = null;
    
    if (branch && subject !== 'gakushiki') {
        targetBranch = parseBranch(decodeURIComponent(branch));
    }

    console.log("【検索条件】", { subject, targetYearWest, targetQNum, targetBranch });

    filteredQuizData = allQuizData.filter(item => {
        // 1. 科目
        const itemSub = item.subject || getSubjectFromCategory(item);
        if (itemSub !== subject) return false;

        // 2. 年度
        if (targetYearWest) {
            const itemYearWest = parseYearToWest(item);
            if (itemYearWest !== targetYearWest) return false;
        }

        // 3. 問番号
        if (targetQNum !== null) {
            const itemQNum = parseQuestionNum(item);
            if (itemQNum !== targetQNum) return false;
        }

        // 4. 枝 (イ・ロ・ハ・ニ)
        if (targetBranch) {
            const itemBranch = parseBranch(item);
            if (itemBranch !== targetBranch) return false;
        }

        return true;
    });

    console.log("【ヒット件数】", filteredQuizData.length);

    const startScreen = document.getElementById('start-screen');
    const quizContainer = document.getElementById('quiz-container');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizContainer) quizContainer.classList.remove('hidden');

    if (filteredQuizData.length === 0) {
        // 該当問題が存在しない場合の案内画面
        const displayYear = targetYearWest ? parseYearJapanese(targetYearWest) : '';
        const displayQ = targetQNum ? `問${targetQNum}` : '';
        
        quizContainer.innerHTML = `
            <div class="text-center py-12 px-4">
                <div class="text-4xl mb-4">⚠️</div>
                <h2 class="text-lg font-bold text-slate-800 dark:text-white mb-2">
                    指定された問題が見つかりません
                </h2>
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    ${displayYear} ${displayQ} は問題の不適切等の理由により<br>問題集から削除されているか、登録されていません。
                </p>
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="map.html" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow">
                        マップに戻る
                    </a>
                    <button onclick="backToStart()" class="px-5 py-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-bold transition">
                        トップ画面へ
                    </button>
                </div>
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
    if (typeof obj === "object") {
        return Object.values(obj).map(v => getAllValuesAsString(v)).join(" ");
    }
    return "";
}

function getSubjectFromCategory(item) {
    const text = getAllValuesAsString(item);
    if (text.includes("保安")) return "hoan";
    if (text.includes("法令")) return "hohrei";
    if (text.includes("学識")) return "gakushiki";
    return "hoan";
}

// ----------------------------------------------------------------------
// 年度判定
// ----------------------------------------------------------------------
function parseYearToWest(item) {
    if (item === null || item === undefined) return "2022";

    // 文字列・数値が直接渡された場合
    if (typeof item === 'string' || typeof item === 'number') {
        const strVal = String(item).toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
        if (strVal.includes('2025') || strVal.includes('r7') || strVal.includes('令和7') || strVal === '7') return '2025';
        if (strVal.includes('2024') || strVal.includes('r6') || strVal.includes('令和6') || strVal === '6') return '2024';
        if (strVal.includes('2023') || strVal.includes('r5') || strVal.includes('令和5') || strVal === '5') return '2023';
        if (strVal.includes('2022') || strVal.includes('r4') || strVal.includes('令和4') || strVal === '4') return '2022';
        if (strVal.includes('2021') || strVal.includes('r3') || strVal.includes('令和3') || strVal === '3') return '2021';
    }

    // オブジェクトプロパティの事前チェック
    if (typeof item === 'object') {
        if (item.year) {
            const res = parseYearToWest(item.year);
            if (res !== "2022" || String(item.year).includes("2022") || String(item.year).includes("4")) return res;
        }
        if (item.yearKey) {
            const res = parseYearToWest(item.yearKey);
            if (res !== "2022" || String(item.yearKey).includes("2022") || String(item.yearKey).includes("4")) return res;
        }
    }

    // 全文検索
    const str = getAllValuesAsString(item).toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));

    if (str.includes('2025') || str.includes('r7') || str.includes('令和7')) return '2025';
    if (str.includes('2024') || str.includes('r6') || str.includes('令和6')) return '2024';
    if (str.includes('2023') || str.includes('r5') || str.includes('令和5')) return '2023';
    if (str.includes('2022') || str.includes('r4') || str.includes('令和4')) return '2022';
    if (str.includes('2021') || str.includes('r3') || str.includes('令和3')) return '2021';

    return "2022";
}

function parseYearJapanese(item) {
    const west = parseYearToWest(item);
    const map = { '2021':'令和3', '2022':'令和4', '2023':'令和5', '2024':'令和6', '2025':'令和7' };
    return map[west] || '令和4';
}

// 問番号判定
function parseQuestionNum(item) {
    if (typeof item === 'object' && item !== null) {
        if (item.questionNum !== undefined) return parseInt(item.questionNum, 10);
        if (item.qNum !== undefined) return parseInt(item.qNum, 10);
        if (item.q !== undefined) return parseInt(item.q, 10);
        if (item.number !== undefined) return parseInt(item.number, 10);
    }
    
    const text = getAllValuesAsString(item);

    // 「問1」「問 10」「Q1」「q-5」などを優先マッチ
    const qMatch = text.match(/(?:問|Q|q)\s*[-‐–—]?\s*(\d+)/i);
    if (qMatch) {
        return parseInt(qMatch[1], 10);
    }

    // 「令和7年度」などの年度テキストを取り除いてから検索
    const cleanedText = text.replace(/(?:202[1-5]|r[3-7]|R[3-7]|令和[3-7３-７]年?度?)/gi, '');
    const numMatch = cleanedText.match(/\b([1-9]|1[0-5])\b/);
    if (numMatch) {
        return parseInt(numMatch[1], 10);
    }

    return 1;
}

// 枝判定 (イ・ロ・ハ・ニ)
function parseBranch(item) {
    if (!item) return "イ";

    const normalizeKanji = (str) => {
        return String(str)
            .replace(/一/g, 'イ')
            .replace(/二/g, 'ニ')
            .replace(/三/g, 'ハ')
            .replace(/四/g, 'ニ');
    };

    if (typeof item === 'string') {
        const normalizedItem = normalizeKanji(item);
        const match = normalizedItem.match(/([イロハニ])/);
        if (match) return match[1];
        
        if (item === '1' || item.toLowerCase() === 'a') return 'イ';
        if (item === '2' || item.toLowerCase() === 'b') return 'ロ';
        if (item === '3' || item.toLowerCase() === 'c') return 'ハ';
        if (item === '4' || item.toLowerCase() === 'd') return 'ニ';
    }

    if (typeof item === 'object') {
        if (item.branch) return parseBranch(String(item.branch));
    }

    const text = normalizeKanji(getAllValuesAsString(item));
    
    const hyphenMatch = text.match(/[-‐–—]\s*([イロハニ])/);
    if (hyphenMatch) return hyphenMatch[1];

    const match = text.match(/([イロハニ])/);
    return match ? match[1] : "イ";
}

function renderCurrentQuestion() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (filteredQuizData.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-500 dark:text-slate-400">
                <p class="text-lg font-bold mb-2">対象の問題が見つかりませんでした。</p>
                <button onclick="backToStart()" class="mt-4 px-4 py-2 bg-slate-700 text-white rounded-lg text-sm">トップに戻る</button>
            </div>
        `;
        return;
    }

    if (currentQuestionIndex >= filteredQuizData.length) {
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
    const isFromMap = new URLSearchParams(window.location.search).has('subject');

    let optionsHtml = "";
    if (qData.options && Array.isArray(qData.options) && qData.options.length > 0) {
        optionsHtml = `<div class="grid grid-cols-1 gap-2 mt-4">`;
        qData.options.forEach((opt, idx) => {
            optionsHtml += `
                <button onclick="checkAnswer(${idx})" class="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition text-sm font-medium text-slate-800 dark:text-slate-200">${escapeHTML(opt)}</button>
            `;
        });
        optionsHtml += `</div>`;
    } else {
        optionsHtml = `
            <div class="grid grid-cols-2 gap-3 mt-6">
                <button onclick="checkAnswer(true)" class="py-4 px-6 rounded-xl bg-blue-50 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-slate-600 border-2 border-blue-200 dark:border-slate-600 text-blue-600 dark:text-blue-400 font-bold text-lg shadow-sm transition flex flex-col items-center justify-center">
                    <span class="text-2xl">◯</span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">正しい</span>
                </button>
                <button onclick="checkAnswer(false)" class="py-4 px-6 rounded-xl bg-rose-50 dark:bg-slate-700 hover:bg-rose-100 dark:hover:bg-rose-600 border-2 border-rose-200 dark:border-slate-600 text-rose-600 dark:text-rose-400 font-bold text-lg shadow-sm transition flex flex-col items-center justify-center">
                    <span class="text-2xl">✕</span>
                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">誤り</span>
                </button>
            </div>
        `;
    }

    const questionText = qData.question || qData.text || qData.content || getAllValuesAsString(qData);

    container.innerHTML = `
        ${isFromMap ? `
            <div class="mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <span class="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md">
                    マップから指定問題を開いています
                </span>
                <a href="map.html" class="text-xs font-bold text-slate-600 dark:text-slate-300 hover:underline">
                    ← マップに戻る
                </a>
            </div>
        ` : ''}

        <div class="flex justify-between items-center mb-4">
            <span class="text-sm font-semibold text-slate-500 dark:text-slate-400">
                問題 ${currentNum} / ${totalCount}
            </span>
            <div class="flex items-center space-x-2">
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold px-2.5 py-1 rounded">
                    ${subjectLabel} (${displayYear}年 問${displayQNum} ${displayBranch})
                </span>
                <button onclick="toggleBookmarkCurrent()" class="text-xl px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition" title="ブックマーク">
                    ${isBookmarked ? '★' : '☆'}
                </button>
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
            <button onclick="backToStart()" class="w-full bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 font-bold py-3 px-4 rounded-lg transition text-sm">
                学習を終了してトップに戻る
            </button>
        </div>
    `;

    renderFacility(qData);
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
    facilityContainer.innerHTML = '';
}

function createFacilityHTML(facility) {
    if (!facility) return '';

    let html = `
        <div class="bg-amber-50/60 dark:bg-slate-800/80 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4 text-xs text-slate-700 dark:text-slate-300">
            <div class="font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-1.5 text-sm">
                <span>🏢</span>
                <span>【事業所の例】${escapeHTML(facility.title || facility.name || '')}</span>
            </div>
    `;

    if (facility.overview) {
        html += `<p class="text-slate-700 dark:text-slate-300 mb-2">${escapeHTML(facility.overview)}</p>`;
    }

    if (facility.image) {
        html += `
            <div class="mb-3 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-center p-2">
                <img src="${escapeHTML(facility.image)}" alt="${escapeHTML(facility.title || facility.name || '事業所画像')}" class="max-h-60 object-contain rounded">
            </div>
        `;
    }

    if (facility.details && Array.isArray(facility.details) && facility.details.length > 0) {
        html += `<ul class="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">`;
        facility.details.forEach(item => {
            if (typeof item === 'object' && item !== null) {
                const labelStr = item.label ? `<strong>${escapeHTML(item.label)}:</strong> ` : '';
                const valStr = escapeHTML(item.value || '');
                html += `<li>${labelStr}${valStr}</li>`;
            } else {
                html += `<li>${escapeHTML(item)}</li>`;
            }
        });
        html += `</ul>`;
    }

    if (facility.note) {
        html += `<p class="mt-2 text-xs text-rose-600 dark:text-rose-400 font-semibold">${escapeHTML(facility.note)}</p>`;
    }

    html += `</div>`;
    return html;
}

function checkAnswer(userAnswer) {
    const qData = filteredQuizData[currentQuestionIndex];
    let isCorrect = false;

    const answerValue = (qData.isTrue !== undefined) ? qData.isTrue : qData.answer;

    if (typeof answerValue === 'boolean') {
        isCorrect = (userAnswer === answerValue);
    } else if (typeof answerValue === 'number') {
        isCorrect = (userAnswer === answerValue);
    } else if (typeof answerValue === 'string') {
        const cleanAns = answerValue.trim().toLowerCase();
        if (cleanAns === '〇' || cleanAns === 'o' || cleanAns === 'true' || cleanAns === 'correct') {
            isCorrect = (userAnswer === true);
        } else if (cleanAns === '×' || cleanAns === 'x' || cleanAns === 'false' || cleanAns === 'incorrect') {
            isCorrect = (userAnswer === false);
        } else {
            isCorrect = (String(userAnswer) === cleanAns);
        }
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
            badge.className = "font-bold text-base md:text-lg mb-2 text-emerald-600 dark:text-emerald-400 flex items-center gap-1";
            badge.innerHTML = "<span>⭕ 正解！</span>";
        } else {
            badge.className = "font-bold text-base md:text-lg mb-2 text-rose-600 dark:text-rose-400 flex items-center gap-1";
            badge.innerHTML = "<span>❌ 不正解...</span>";
        }
        expContainer.classList.remove('hidden');
    }
}

function recordDetailedHistory(currentData, isCorrect) {
    const key = getQuestionKey(currentData);
    if (!detailedHistory[key]) {
        detailedHistory[key] = { solved: 0, correct: 0 };
    }
    detailedHistory[key].solved++;
    if (isCorrect) detailedHistory[key].correct++;

    localStorage.setItem('gas_quiz_detailed_history', JSON.stringify(detailedHistory));
}

function toggleBookmarkCurrent() {
    const qData = filteredQuizData[currentQuestionIndex];
    if (!qData) return;
    const key = getQuestionKey(qData);

    const idx = bookmarks.indexOf(key);
    if (idx >= 0) {
        bookmarks.splice(idx, 1);
    } else {
        bookmarks.push(key);
    }
    localStorage.setItem('gas_quiz_bookmarks', JSON.stringify(bookmarks));
    renderCurrentQuestion();
}

function updateStatsSummary() {
    let totalSolved = 0;
    let totalCorrect = 0;

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
    if (window.location.search) {
        window.history.pushState({}, '', window.location.pathname);
    }
    const quizContainer = document.getElementById('quiz-container');
    const startScreen = document.getElementById('start-screen');
    if (quizContainer) quizContainer.classList.add('hidden');
    if (startScreen) startScreen.classList.remove('hidden');
    updateStatsSummary();
}

function renderResultSummary() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const total = filteredQuizData.length;
    const rate = total > 0 ? Math.round((score / total) * 100) : 0;

    let evalText = "引き続き練習を重ねましょう！";
    if (rate >= 80) evalText = "素晴らしい成果です！合格ラインを十分クリアしています！";
    else if (rate >= 60) evalText = "合格ライン到達！さらに正解率を高めて確実性を上げましょう。";

    container.innerHTML = `
        <div class="text-center py-6">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">🎉 演習完了！</h2>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">${evalText}</p>

            <p class="text-slate-600 dark:text-slate-300 mb-2">今回の正解数</p>
            <p class="text-4xl font-extrabold ${rate >= 60 ? 'text-blue-600 dark:text-blue-400' : 'text-rose-500'} mb-8">
                ${score} / ${total}
            </p>

            <div class="flex flex-col gap-3">
                <button onclick="filterQuizData('${currentSubjectKey}')" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition shadow text-sm">
                    もう一度挑戦する
                </button>
                <button onclick="backToStart()" class="w-full bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition shadow text-sm">
                    科目選択に戻る
                </button>
                <a href="map.html" class="w-full bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold py-3 px-6 rounded-xl transition text-sm">
                    📊 実績マップを見る
                </a>
            </div>
        </div>
    `;
}

function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}