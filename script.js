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
// 讓圖片隨機分布的函式
function randomizeImages() {
    const images = document.querySelectorAll('.chaos-img');
    const container = document.querySelector('.main-layout');
    
    // 獲取容器的寬度與高度，確保圖片不會跑出範圍
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    images.forEach(img => {
        // 隨機計算位置（百分比或像素）
        const randomTop = Math.floor(Math.random() * (containerHeight - 200));
        const randomLeft = Math.floor(Math.random() * (containerWidth - 200));

        img.style.top = randomTop + "px";
        img.style.left = randomLeft + "px";
        img.style.visibility = "visible"; // 定位好了，現身吧！
    });
}

// 網頁載入後執行
window.onload = () => {
    randomizeImages();
    // 也可以順便檢查你有沒有召喚過蟑螂
    console.log("環境已改變，圖片已隨機演化[cite: 1]");
};

// 1. 會逃跑的按鈕 (保留)
function flee(btn) {
    btn.style.position = 'fixed';
    btn.style.left = Math.random() * 80 + 'vw';
    btn.style.top = Math.random() * 80 + 'vh';
}

// 2. 召喚抗藥蟑螂 (保留，這符合天擇說[cite: 1])
function spawnRoach() {
    const roach = document.createElement('div');
    roach.innerHTML = "🪳";
    roach.className = "font-black";
    roach.style.position = 'fixed';
    roach.style.left = Math.random() * 90 + 'vw';
    roach.style.top = Math.random() * 90 + 'vh';
    roach.style.fontSize = '50px';
    roach.style.zIndex = '10000';
    document.body.appendChild(roach);
}

// 3. 背景變換
function changeBg() {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 40%, 90%)`;
}