// 1. 會逃跑的按鈕
function flee(btn) {
    const newX = Math.random() * (window.innerWidth - btn.clientWidth);
    const newY = Math.random() * (window.innerHeight - btn.clientHeight);
    btn.style.position = 'fixed';
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

// 2. 隨機背景色 (放鬆模式)
function changeBg() {
    const hue = Math.random() * 360;
    document.body.style.backgroundColor = `hsl(${hue}, 60%, 90%)`;
}

// 3. 召喚抗藥性蟑螂 (對應殺蟲劑主題)
function summonRoach() {
    const roach = document.createElement('div');
    roach.innerHTML = "🪳";
    roach.style.position = 'fixed';
    roach.style.left = Math.random() * 100 + 'vw';
    roach.style.top = Math.random() * 100 + 'vh';
    roach.style.fontSize = '45px';
    roach.style.zIndex = '1000';
    roach.style.transition = 'all 2s';
    
    document.body.appendChild(roach);

    // 讓蟑螂會隨機爬行
    setInterval(() => {
        roach.style.left = Math.random() * 100 + 'vw';
        roach.style.top = Math.random() * 100 + 'vh';
    }, 2000);
}

// 4. 滑鼠跟隨裝飾 (小葉子象徵演化與環境)
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.92) {
        const leaf = document.createElement('div');
        leaf.innerHTML = "🌿";
        leaf.style.position = 'fixed';
        leaf.style.left = e.clientX + 'px';
        leaf.style.top = e.clientY + 'px';
        leaf.style.pointerEvents = 'none';
        leaf.style.zIndex = '500';
        document.body.appendChild(leaf);
        
        setTimeout(() => leaf.remove(), 1200);
    }
});