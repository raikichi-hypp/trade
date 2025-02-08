document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
});

function runSimulation() {
    let baseRate = 20;  // 基本のリピート率（%）
    let fluctuation = Math.random() * 10 - 5; // ±5%の変動
    let resultRate = baseRate + fluctuation;
    document.getElementById("result").innerText = `予測されるリピート率: ${resultRate.toFixed(2)}%`;
}

