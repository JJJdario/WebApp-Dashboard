const trafficChart = document.getElementById("traffic-chart");
let myChart = new Chart(trafficChart, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],

    datasets: [
      {
        data: [650, 1350, 1000, 2000, 1600, 1850, 1350, 1750, 2250, 1500, 2550],
        backgroundColor: ["rgba(102, 109, 172, 0.3)"],
        fill: true,
      },
    ],
  },
  options: {
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// ============================ Daily Traffic chart =====================

const dailyTraffic = document.getElementById("daily-traffic");
const pie = new Chart(dailyTraffic, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],

    datasets: [
      {
        data: ["60", "120", "185", "130", "225", "200", "100"],
        backgroundColor: ["rgb(102, 109, 172)"],
        fill: true,
      },
    ],
  },
  options: {
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

//========================== Movile User Chart ======================

const movileUser = document.getElementById("movile-user");
let bar = new Chart(movileUser, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablet", "Phones"],

    datasets: [
      {
        data: ["70", "15", "15"],
        backgroundColor: [
          "rgb(102, 109, 172)",
          "rgb(50, 157, 121)",
          "rgb(31, 133, 151)",
        ],
        fill: true,
      },
    ],
  },
  options: {
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
});
