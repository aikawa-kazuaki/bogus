let activeQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

let userStats = JSON.parse(localStorage.getItem('gas_quiz_stats')) || { totalSolved: 0, totalCorrect: 0 };
let bookmarks = JSON.parse(localStorage.getItem('gas_quiz_bookmarks')) || [];
let wrongList = JSON.parse(localStorage.getItem('gas_quiz_wrongs')) || [];

const startScreenEl = document.getElementById("start-screen");
const quizContainerEl = document.getElementById("quiz-container");
const resultContainerEl = document.getElementById("result-container");

const questionCountEl = document.getElementById("question-count");
const categoryBadgeEl = document.getElementById("category-badge");
const questionTextEl = document.getElementById("question-text");
const diagramContainerEl = document.getElementById("diagram-container");
const diagramContentEl = document.getElementById("diagram-content");
const explanationContainerEl = document.getElementById("explanation-container");
const explanationTextEl = document.getElementById("explanation-text");
const scoreDisplayEl = document.getElementById("score-display");
const bookmarkBtnEl = document.getElementById("bookmark-btn");
const btnTrue = document.getElementById("btn-true");
const btnFalse = document.getElementById("btn-false");

updateStatsDisplay();

function toggleDarkMode() {
    const htmlEl = document.documentElement;
    const darkIcon = document.getElementById("dark-icon");
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        darkIcon.textContent = "🌙";
        localStorage.setItem('gas_theme', 'light');
    } else {
        htmlEl.classList.add('dark');
        darkIcon.textContent = "☀️";
        localStorage.setItem('gas_theme', 'dark');
    }
}

if (localStorage.getItem('gas_theme') === 'dark') {
    document.documentElement.classList.add('dark');
    document.getElementById("dark-icon").textContent = "☀️";
}

function updateStatsDisplay() {
    document.getElementById("total-solved").textContent = userStats.totalSolved;
    const rate = userStats.totalSolved > 0 ? Math.round((userStats.totalCorrect / userStats.totalSolved) * 100) : 0;
    document.getElementById("accuracy-rate").textContent = rate;
}

function shuffleArray(array) {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
}

function startQuiz(subject) {
    let rawData = [];
    if (subject === 'gakushiki') {
        rawData = typeof gakushikiQuestions !== 'undefined' ? gakushikiQuestions : [];
    } else if (subject === 'hoan') {
        rawData = typeof hoanQuestions !== 'undefined' ? hoanQuestions : [];
    } else if (subject === 'hohrei') {
        rawData = typeof hohreiQuestions !== 'undefined' ? hohreiQuestions : [];
    }

    if (rawData.length === 0) {
        alert("この科目の問題データはまだ登録されていません！");
        return;
    }

    const shuffled = shuffleArray(rawData);
    activeQuizData = shuffled.slice(0, Math.min(5, shuffled.length)); 
    initQuizSession();
}

function startBookmarkQuiz() {
    if (bookmarks.length === 0) {
        alert("ブックマークされた問題がまだありません！");
        return;
    }
    const allData = [
        ...(typeof gakushikiQuestions !== 'undefined' ? gakushikiQuestions : []),
        ...(typeof hoanQuestions !== 'undefined' ? hoanQuestions : []),
        ...(typeof hohreiQuestions !== 'undefined' ? hohreiQuestions : [])
    ];
    activeQuizData = allData.filter(q => bookmarks.includes(q.question));
    initQuizSession();
}

function startWrongQuiz() {
    if (wrongList.length === 0) {
        alert("現在、克服すべき間違えた問題はありません！すばらしいです！");
        return;
    }
    const allData = [
        ...(typeof gakushikiQuestions !== 'undefined' ? gakushikiQuestions : []),
        ...(typeof hoanQuestions !== 'undefined' ? hoanQuestions : []),
        ...(typeof hohreiQuestions !== 'undefined' ? hoanQuestions : [])
    ];
    activeQuizData = allData.filter(q => wrongList.includes(q.question));
    initQuizSession();
}

function initQuizSession() {
    currentQuestionIndex = 0;
    score = 0;
    startScreenEl.classList.add("hidden");
    resultContainerEl.classList.add("hidden");
    quizContainerEl.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    explanationContainerEl.classList.add("hidden");
    btnTrue.disabled = false;
    btnFalse.disabled = false;
    
    // 正誤判定や無効化で付与された可能性のあるクラスをすべてクリアする
    btnTrue.className = "w-full py-4 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold transition flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800";
    btnFalse.className = "w-full py-4 px-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold transition flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800";
    
    const currentData = activeQuizData[currentQuestionIndex];
    questionCountEl.textContent = `問題 ${currentQuestionIndex + 1} / ${activeQuizData.length}`;
    categoryBadgeEl.textContent = currentData.category;
    questionTextEl.innerHTML = currentData.question.replace(/\n/g, '<br>');

    if (bookmarks.includes(currentData.question)) {
        bookmarkBtnEl.textContent = "★";
        bookmarkBtnEl.classList.add("text-amber-500");
    } else {
        bookmarkBtnEl.textContent = "☆";
        bookmarkBtnEl.classList.remove("text-amber-500");
    }

    if (currentData.hasDiagram) {
        diagramContainerEl.classList.remove("hidden");
        diagramContentEl.innerHTML = currentData.diagramImage ? 
            `<img src="${currentData.diagramImage}" alt="参考図表" class="mx-auto max-h-36 object-contain">` : `[図表エリア]`;
    } else {
        diagramContainerEl.classList.add("hidden");
    }
}

function toggleBookmarkCurrent() {
    const currentData = activeQuizData[currentQuestionIndex];
    const qText = currentData.question;
    const index = bookmarks.indexOf(qText);
    
    if (index > -1) {
        bookmarks.splice(index, 1);
        bookmarkBtnEl.textContent = "☆";
        bookmarkBtnEl.classList.remove("text-amber-500");
    } else {
        bookmarks.push(qText);
        bookmarkBtnEl.textContent = "★";
        bookmarkBtnEl.classList.add("text-amber-500");
    }
    localStorage.setItem('gas_quiz_bookmarks', JSON.stringify(bookmarks));
}

// ○か✕が押されたときの判定処理
// userChoice: trueなら「〇」、falseなら「✕」
function answerQuestion(userChoice) {
    if (isAnswered) return;
    isAnswered = true;

    btnTrue.disabled = true;
    btnFalse.disabled = true;

    const currentData = activeQuizData[currentQuestionIndex];
    
    // データ側にある正解が「true（〇）」か「false（✕）」かを判定
    // （もしデータ側が従来通りの数値や配列の場合は、先頭が正解かどうかなどで判定します）
    let isCorrectAnswer = false;
    if (typeof currentData.isTrue !== 'undefined') {
        isCorrectAnswer = currentData.isTrue;
    } else {
        // もしデータに isTrue が設定されていない場合の安全策として、correct が 0 や真実寄りなら true とみなす等のフォールバック
        isCorrectAnswer = (currentData.correct === 0 || currentData.correct === true);
    }

    const isCorrect = (userChoice === isCorrectAnswer);

    userStats.totalSolved++;
    if (isCorrect) {
        score++;
        userStats.totalCorrect++;
        const wIdx = wrongList.indexOf(currentData.question);
        if (wIdx > -1) wrongList.splice(wIdx, 1);
    } else {
        if (!wrongList.includes(currentData.question)) {
            wrongList.push(currentData.question);
        }
    }

    localStorage.setItem('gas_quiz_stats', JSON.stringify(userStats));
    localStorage.setItem('gas_quiz_wrongs', JSON.stringify(wrongList));
    updateStatsDisplay();

    // ボタンの色を変更して正解を表示
    if (userChoice) {
        if (isCorrect) {
            btnTrue.classList.add("bg-green-100", "border-green-500", "text-green-700");
        } else {
            btnTrue.classList.add("bg-rose-100", "border-rose-500", "text-rose-700");
            if (isCorrectAnswer) btnFalse.classList.add("bg-green-100", "border-green-500", "text-green-700");
        }
    } else {
        if (isCorrect) {
            btnFalse.classList.add("bg-green-100", "border-green-500", "text-green-700");
        } else {
            btnFalse.classList.add("bg-rose-100", "border-rose-500", "text-rose-700");
            if (isCorrectAnswer) btnTrue.classList.add("bg-green-100", "border-green-500", "text-green-700");
        }
    }

    explanationTextEl.textContent = currentData.explanation;
    explanationContainerEl.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainerEl.classList.add("hidden");
    resultContainerEl.classList.remove("hidden");
    scoreDisplayEl.textContent = `${score} / ${activeQuizData.length}`;
}

function backToStart() {
    resultContainerEl.classList.add("hidden");
    quizContainerEl.classList.add("hidden");
    startScreenEl.classList.remove("hidden");
}
