 // script.js
function runSimulation() {
    const investment = document.getElementById('investment').value;
    const ctx = document.getElementById('resultChart').getContext('2d');
    
    // モンテカルロシミュレーションの簡易実装
    const simulations = Array.from({length: 100}, () => {
        return Array.from({length: 10}, (_, i) => {
            return investment * (1 + (Math.random() * 0.2 - 0.1)) ** (i+1);
        });
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 10}, (_, i) => `${i+1}年後`),
            datasets: simulations.map((data, i) => ({
                label: `シナリオ ${i+1}`,
                data: data,
                borderColor: `rgba(75, 192, 192, 0.2)`,
                tension: 0.1
            }))
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
