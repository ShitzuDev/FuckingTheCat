function generateParticles() {
    const particleContainer = document.getElementById("particles");

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        const size = Math.random() * 5 + 3; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`; 
        particle.style.animationTimingFunction = 'linear';
        particleContainer.appendChild(particle);
    }
}

generateParticles();

const ctx = document.getElementById('cryptoChart').getContext('2d');
const cryptoChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
        datasets: [{
            label: 'Prix de FTC ($)',
            data: [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.2],
            borderColor: '#FFD700', 
            backgroundColor: 'rgba(255, 215, 0, 0.2)', 
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return '$' + tooltipItem.raw.toFixed(2); 
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updatePrice() {
    const priceElement = document.getElementById('cryptoPrice');
    let currentPrice = parseFloat(priceElement.textContent);
    const randomChange = (Math.random() * 0.1 - 0.05).toFixed(2); 
    currentPrice = Math.max(0.1, (currentPrice + parseFloat(randomChange)).toFixed(2));
    priceElement.textContent = `${currentPrice} $`;
}

setInterval(updatePrice, 3000);

