const ui = document.getElementById("ui");

const text = "I love you";

const totalWords = 100;
const layers = 5;

// ایجاد متن‌های تکراری
for (let i = 0; i < totalWords; i++) {
    const word = document.createElement("div");

    word.className = "love-word love-horizontal";
    word.textContent = text;

    word.style.setProperty("--i", i);

    ui.appendChild(word);
}

// رسم قلب با فرمول پارامتری
const words = document.querySelectorAll(".love-word");

const points = [];

for (let t = 0; t < Math.PI * 2; t += 0.04) {
    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    points.push({ x, y });
}

// قرار دادن متن‌ها روی مسیر قلب
words.forEach((word, i) => {
    const point = points[i % points.length];

    const layer = Math.floor(i / points.length);

    const scale = 10;

    const x = point.x * scale;
    const y = -point.y * scale;

    word.style.left = calc(50% + ${x}px);
    word.style.top = calc(50% + ${y}px);

    word.style.transform = 
        translate(-50%, -50%)
        rotate(${Math.atan2(point.y, point.x)}rad)
    ;

    word.style.animationDelay = ${-i * 0.1}s;
});