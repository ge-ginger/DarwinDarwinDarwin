// 1. 跑給人追的按鈕 (保留，因為這很亂)
function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - btn.clientWidth);
    const y = Math.random() * (window.innerHeight - btn.clientHeight);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// 2. 換背景顏色的功能
function changeBg() {
    const colors = ['#ffccc7', '#d9f7be', '#b5f5ec', '#efdbff', '#fffb8f'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// 3. 召喚蟑螂 (這功能很亂七八糟)
function addRoach() {
    const roach = document.createElement('div');
    roach.innerHTML = "🪳";
    roach.style.position = 'fixed';
    roach.style.left = Math.random() * 100 + 'vw';
    roach.style.top = Math.random() * 100 + 'vh';
    roach.style.fontSize = '40px';
    roach.style.zIndex = '9999';
    document.body.appendChild(roach);
}

// 4. 滑鼠跟隨效果 (改成輕柔的小草，象徵演化中的植物)
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // 減少產生的頻率
        const leaf = document.createElement('div');
        leaf.innerHTML = "🌿";
        leaf.style.position = 'fixed';
        leaf.style.left = e.clientX + 'px';
        leaf.style.top = e.clientY + 'px';
        leaf.style.pointerEvents = 'none';
        document.body.appendChild(leaf);
        
        setTimeout(() => { leaf.remove(); }, 1000);
    }
});

// 移除原本的強制捲動邏輯 (Relaxing...)