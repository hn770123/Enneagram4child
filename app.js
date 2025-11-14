// エニアグラム診断アプリ

// 質問データ（各タイプに3問ずつ、合計27問）
const questions = [
    // タイプ1: 完璧を求める人
    { type: 1, question: "給食でパンを落とした！どうする？", choiceA: "「3秒ルール！セーフ！」", choiceB: "「先生、パンが落ちました。新しいのください！」" },
    { type: 1, question: "ノートに字を間違えた！どうする？", choiceA: "消しゴムでピカピカに直す", choiceB: "間違いも味だ！そのまま残す" },
    { type: 1, question: "掃除当番でホウキを持ったら？", choiceA: "床の隅まで完璧に！", choiceB: "まあまあキレイならいいでしょ" },
    
    // タイプ2: 人を助けたい人
    { type: 2, question: "友達がランドセルを忘れた！どうする？", choiceA: "先生に報告して一緒に考える", choiceB: "自分のノートを半分貸してあげる" },
    { type: 2, question: "給食で牛乳が余った！", choiceA: "牛乳苦手な子に『飲まなくていいよ』って言う", choiceB: "自分が全部飲んでヒーローになる" },
    { type: 2, question: "体育で友達が転んだ！", choiceA: "すぐに駆け寄って『大丈夫？』", choiceB: "『痛そう！でもちょっと笑っちゃう』" },
    
    // タイプ3: がんばり屋・目立ちたい人
    { type: 3, question: "運動会のリレーでバトンを受け取った！", choiceA: "全力疾走でスターになる", choiceB: "転んでも笑顔でゴール！" },
    { type: 3, question: "テストで100点を取った！", choiceA: "みんなに見せびらかす", choiceB: "心の中でガッツポーズ" },
    { type: 3, question: "クラスで発表するときは？", choiceA: "声を大きくして堂々と！", choiceB: "ちょっとカッコつけてポーズ" },
    
    // タイプ4: 個性的で感受性豊かな人
    { type: 4, question: "絵を描いたら？", choiceA: "みんなが描かない色を使う", choiceB: "自分の気持ちを絵にぶつける" },
    { type: 4, question: "音楽の時間に歌うときは？", choiceA: "ちょっと切ない顔で歌う", choiceB: "自分だけアレンジして歌う" },
    { type: 4, question: "給食でカレーが出た！", choiceA: "ご飯に絵を描くようにルーをかける", choiceB: "『今日はカレー日記』って心の中で詩を書く" },
    
    // タイプ5: 知りたい！研究好きな人
    { type: 5, question: "虫を見つけた！", choiceA: "じーっと観察して図鑑で調べる", choiceB: "友達に『この虫の名前知ってる？』ってクイズ" },
    { type: 5, question: "宿題でわからない問題が出た！", choiceA: "自分で調べて解決", choiceB: "『これは未来の自分に任せよう』と放置" },
    { type: 5, question: "給食のメニュー表を見たら？", choiceA: "栄養バランスを分析", choiceB: "『カレーは何回出るか』統計を取る" },
    
    // タイプ6: 安心したい人
    { type: 6, question: "遊具で遊ぶときは？", choiceA: "安全確認してから登る", choiceB: "友達に『先にやってみて！』ってお願い" },
    { type: 6, question: "テスト前にすることは？", choiceA: "先生に『出るところ』を確認", choiceB: "友達に『一緒に勉強しよう』って誘う" },
    { type: 6, question: "怖い話を聞いたら？", choiceA: "布団にくるまって安心", choiceB: "『でも本当に出るかな？』ってちょっと疑う" },
    
    // タイプ7: 楽しいこと大好きな人
    { type: 7, question: "授業中に先生が真面目な話をしてる！", choiceA: "頭の中でギャグを考える", choiceB: "『早く休み時間になれ！』とワクワク" },
    { type: 7, question: "給食でデザートが出た！", choiceA: "一番最初に食べちゃう", choiceB: "最後まで楽しみにとっておく" },
    { type: 7, question: "遊び時間に何する？", choiceA: "新しい遊びを発明", choiceB: "みんなを集めて大騒ぎ" },
    
    // タイプ8: 強くて頼れる人
    { type: 8, question: "クラスで意見が割れた！", choiceA: "『じゃあ俺が決める！』", choiceB: "『ケンカするよりジャンケンだ！』" },
    { type: 8, question: "体育でボールが飛んできた！", choiceA: "全力でキャッチ！", choiceB: "『危ない！』ってみんなを守る" },
    { type: 8, question: "給食で最後のプリンが残った！", choiceA: "『俺が食べる！』", choiceB: "『ジャンケンで勝負だ！』" },
    
    // タイプ9: 平和を愛する人
    { type: 9, question: "クラスでケンカが始まった！", choiceA: "『まあまあ、落ち着こう』って仲裁", choiceB: "静かにその場を離れる" },
    { type: 9, question: "給食で嫌いな野菜が出た！", choiceA: "『まあ食べてもいいか』って食べる", choiceB: "友達にそっとあげる" },
    { type: 9, question: "授業中に先生が質問！", choiceA: "答えたいけど、ちょっと様子を見る", choiceB: "『誰か答えてくれるよね』と安心" }
];

// タイプ情報
const typeInfo = {
    1: {
        name: "タイプ1：完璧主義者",
        icon: "✨",
        description: "あなたはきちんとしていて、正しいことが大好き。ルールを守って、いつもベストをつくそうとがんばる子だよ！",
        traits: [
            "まじめで責任感が強い",
            "ものごとをきちんとやりたい",
            "正しいことを大切にする",
            "約束を守る"
        ]
    },
    2: {
        name: "タイプ2：助ける人",
        icon: "💖",
        description: "あなたはやさしくて、みんなを助けるのが好き。友だちのことを考えて、いつも手伝ってくれる子だよ！",
        traits: [
            "やさしくて親切",
            "人を助けるのが好き",
            "友だち思い",
            "みんなの気持ちがわかる"
        ]
    },
    3: {
        name: "タイプ3：がんばり屋",
        icon: "🏆",
        description: "あなたはがんばり屋さんで、目標をもって努力できる子。いいことをしたらほめられるとうれしいよね！",
        traits: [
            "目標に向かってがんばる",
            "成功したい気持ちが強い",
            "活発で元気",
            "ほめられるとうれしい"
        ]
    },
    4: {
        name: "タイプ4：個性的な人",
        icon: "🎨",
        description: "あなたは自分らしさを大切にする子。人とちがう特別な自分でいたい。感性が豊かで、気持ちをよく考えるよ！",
        traits: [
            "自分らしくいたい",
            "感性が豊か",
            "気持ちをよく考える",
            "創造的で個性的"
        ]
    },
    5: {
        name: "タイプ5：研究者",
        icon: "📚",
        description: "あなたは知りたがり屋さんで、いろんなことを調べるのが好き。本を読んだり、静かに考えたりするのが得意だよ！",
        traits: [
            "知識が好き",
            "観察力がある",
            "じっくり考える",
            "落ち着いている"
        ]
    },
    6: {
        name: "タイプ6：安全を求める人",
        icon: "🛡️",
        description: "あなたは慎重で、安心できることを大切にする子。ルールを守って、信頼できる友だちを大事にするよ！",
        traits: [
            "慎重で心配性",
            "ルールを守る",
            "責任感がある",
            "信頼できる"
        ]
    },
    7: {
        name: "タイプ7：楽しいこと大好き",
        icon: "🎉",
        description: "あなたは明るくて、楽しいことが大好き！新しいことに挑戦したり、ワクワクすることをいつも探している子だよ！",
        traits: [
            "明るくて楽観的",
            "好奇心旺盛",
            "いろんなことをやりたい",
            "楽しいことが好き"
        ]
    },
    8: {
        name: "タイプ8：リーダー",
        icon: "👑",
        description: "あなたは強くて、リーダーシップがある子。自分の意見をはっきり言って、みんなをまとめるのが得意だよ！",
        traits: [
            "強くて自信がある",
            "リーダーになりたい",
            "はっきり意見を言う",
            "守りたいものがある"
        ]
    },
    9: {
        name: "タイプ9：平和主義者",
        icon: "🕊️",
        description: "あなたはおだやかで、みんなが仲良くしてほしいと思う子。平和が好きで、争いごとが苦手だよ！",
        traits: [
            "おだやかで平和的",
            "争いが苦手",
            "人に合わせられる",
            "のんびり屋さん"
        ]
    }
};

// ゲーム状態
let gameState = {
    shuffledQuestions: [],
    currentQuestionIndex: 0,
    scores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
    answeredQuestions: 0
};

// 画面要素
const titleScreen = document.getElementById('title-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-button');
const questionText = document.getElementById('question-text');
const choiceAButton = document.getElementById('choice-a');
const choiceBButton = document.getElementById('choice-b');
const choiceAText = document.getElementById('choice-a-text');
const choiceBText = document.getElementById('choice-b-text');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const restartButton = document.getElementById('restart-button');

// 質問をシャッフルする関数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ゲーム開始
function startGame() {
    // 初期化
    gameState.shuffledQuestions = shuffleArray(questions);
    gameState.currentQuestionIndex = 0;
    gameState.scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    gameState.answeredQuestions = 0;
    
    // 画面遷移
    titleScreen.classList.remove('active');
    questionScreen.classList.add('active');
    
    // 最初の質問を表示
    showQuestion();
}

// 質問を表示
function showQuestion() {
    const question = gameState.shuffledQuestions[gameState.currentQuestionIndex];
    
    questionText.textContent = question.question;
    choiceAText.textContent = question.choiceA;
    choiceBText.textContent = question.choiceB;
    
    // ボタンのフォーカスを解除（選択状態をクリア）
    // すべてのフォーカスを解除
    if (document.activeElement) {
        document.activeElement.blur();
    }
    
    // プログレスバー更新
    const progress = ((gameState.currentQuestionIndex + 1) / gameState.shuffledQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionSpan.textContent = gameState.currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = gameState.shuffledQuestions.length;
}

// スキップ可能かチェックする関数
function canSkipRemainingQuestions() {
    // 2点以上のタイプがあるかチェック
    const typesWithTwoOrMore = Object.entries(gameState.scores)
        .filter(([type, score]) => score >= 2)
        .map(([type, score]) => parseInt(type));
    
    if (typesWithTwoOrMore.length === 0) {
        return false;
    }
    
    // 残りの質問をチェック
    for (let i = gameState.currentQuestionIndex; i < gameState.shuffledQuestions.length; i++) {
        const question = gameState.shuffledQuestions[i];
        const currentScore = gameState.scores[question.type];
        
        // このタイプが0-1点で、かつ2点以上のタイプが存在する場合、スキップ可能
        if (currentScore <= 1 && typesWithTwoOrMore.length > 0 && !typesWithTwoOrMore.includes(question.type)) {
            // このタイプが勝つ可能性がないか確認
            const maxPossibleScore = currentScore + (gameState.shuffledQuestions.length - i);
            const minWinningScore = Math.min(...typesWithTwoOrMore.map(t => gameState.scores[t]));
            
            if (maxPossibleScore < minWinningScore) {
                return true;
            }
        }
    }
    
    // 3点のタイプがある場合もチェック
    const typesWithThree = Object.entries(gameState.scores)
        .filter(([type, score]) => score === 3)
        .map(([type, score]) => parseInt(type));
    
    if (typesWithThree.length > 0) {
        return true;
    }
    
    return false;
}

// 次の有効な質問にスキップ
function skipToNextValidQuestion() {
    const typesWithTwoOrMore = Object.entries(gameState.scores)
        .filter(([type, score]) => score >= 2)
        .map(([type, score]) => parseInt(type));
    
    const typesWithThree = Object.entries(gameState.scores)
        .filter(([type, score]) => score === 3)
        .map(([type, score]) => parseInt(type));
    
    while (gameState.currentQuestionIndex < gameState.shuffledQuestions.length) {
        const question = gameState.shuffledQuestions[gameState.currentQuestionIndex];
        const currentScore = gameState.scores[question.type];
        
        // 3点のタイプがある場合、すべてスキップ
        if (typesWithThree.length > 0) {
            gameState.currentQuestionIndex++;
            continue;
        }
        
        // このタイプが勝つ可能性があるかチェック
        let shouldSkip = false;
        if (currentScore <= 1 && typesWithTwoOrMore.length > 0 && !typesWithTwoOrMore.includes(question.type)) {
            const remainingQuestions = gameState.shuffledQuestions.length - gameState.currentQuestionIndex;
            const maxPossibleScore = currentScore + remainingQuestions;
            const minWinningScore = Math.min(...typesWithTwoOrMore.map(t => gameState.scores[t]));
            
            if (maxPossibleScore < minWinningScore) {
                shouldSkip = true;
            }
        }
        
        if (shouldSkip) {
            gameState.currentQuestionIndex++;
        } else {
            break;
        }
    }
}

// 回答を処理
function handleAnswer(isChoiceA) {
    const question = gameState.shuffledQuestions[gameState.currentQuestionIndex];
    
    // Aを選んだ場合、そのタイプのスコアを加算
    if (isChoiceA) {
        gameState.scores[question.type]++;
    }
    
    gameState.answeredQuestions++;
    gameState.currentQuestionIndex++;
    
    // スキップロジックを適用
    skipToNextValidQuestion();
    
    // 次の質問へ、または結果表示
    if (gameState.currentQuestionIndex < gameState.shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 結果を表示
function showResult() {
    // 最高得点のタイプを見つける
    let maxScore = 0;
    let resultTypes = [];
    
    for (const [type, score] of Object.entries(gameState.scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultTypes = [parseInt(type)];
        } else if (score === maxScore && score > 0) {
            resultTypes.push(parseInt(type));
        }
    }
    
    // 複数のタイプが同点の場合
    let resultType;
    if (resultTypes.length > 1) {
        // ランダムに1つ選択（または最初のタイプを使用）
        resultType = resultTypes[0];
    } else {
        resultType = resultTypes[0];
    }
    
    const info = typeInfo[resultType];
    
    // 結果画面を更新
    document.getElementById('result-icon').textContent = info.icon;
    document.getElementById('result-type').textContent = info.name;
    document.getElementById('result-description').textContent = info.description;
    
    // 特徴リストを作成
    const traitsHTML = `
        <h3>あなたの特徴</h3>
        <ul>
            ${info.traits.map(trait => `<li>${trait}</li>`).join('')}
        </ul>
    `;
    document.getElementById('result-traits').innerHTML = traitsHTML;
    
    // 複数タイプの場合はメッセージを追加
    if (resultTypes.length > 1) {
        const additionalTypes = resultTypes.slice(1).map(t => typeInfo[t].name).join('、');
        document.getElementById('result-description').textContent += 
            `\n\nあなたには${additionalTypes}の特徴も混ざっているよ！`;
    }
    
    // 画面遷移
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

// 再スタート
function restart() {
    resultScreen.classList.remove('active');
    titleScreen.classList.add('active');
}

// イベントリスナー
startButton.addEventListener('click', startGame);
choiceAButton.addEventListener('click', () => handleAnswer(true));
choiceBButton.addEventListener('click', () => handleAnswer(false));
restartButton.addEventListener('click', restart);

// Service Workerの登録
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
