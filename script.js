// 1. 讓按鈕跑給人追
function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - btn.clientWidth);
    const y = Math.random() * (window.innerHeight - btn.clientHeight);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// 2. 隨機彈出沒意義的警告
setInterval(() => {
    const messages = [
        "警告：你的脖子正在變長！",
        "魏斯曼正在看著你的尾巴。",
        "你被天擇淘汰了嗎？",
        "噴效！噴效！噴效！",
        "幾何級數成長中..."
    ];
    if (Math.random() > 0.95) {
        alert(messages[Math.floor(Math.random() * messages.length)]);
    }
}, 5000);

// 3. 滑鼠追蹤效果 (無意義的垃圾)
document.addEventListener('mousemove', (e) => {
    const trailer = document.createElement('div');
    trailer.innerHTML = "🧬";
    trailer.style.position = 'fixed';
    trailer.style.left = e.clientX + 'px';
    trailer.style.top = e.clientY + 'px';
    trailer.style.fontSize = '20px';
    trailer.style.pointerEvents = 'none';
    document.body.appendChild(trailer);
    
    setTimeout(() => {
        trailer.remove();
    }, 500);
});

// 4. 強制播放難聽的音效 (若瀏覽器允許)
window.onload = () => {
    const audio = document.getElementById('badMusic');
    audio.volume = 0.2;
    // 注意：現代瀏覽器通常會擋掉自動播放，除非使用者有互動
    document.body.onclick = () => audio.play();
};

document.getElementById('useless-btn').onclick = () => {
    for(let i=0; i<10; i++) {
        window.open("https://www.google.com/search?q=Darwin+Finches");
    }
};