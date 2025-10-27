const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JS', 'Python', 'Git'],
    datasets: [{
      label: 'Nível de Habilidade (%)',
      data: [90, 85, 75, 60, 80],
      borderWidth: 1
    }]
  },
  options: {
    scales: { y: { beginAtZero: true } }
  }
});

