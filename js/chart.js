const trafficChart = document.getElementById("traffic-chart");
const alertBanner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

alertBanner.innerHTML = `<div class="alert-banner"><p>
<strong>Alert:</strong> You have <strong>6</strong> overdue tasks to
      complete
    </p>
    <p class="alert-banner-close">x</p>
  </div>`;

alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

send.addEventListener("click", () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});

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
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: ["rgba(116, 119, 191, 0.3)"],
        fill: true,
      },
    ],
  },
  options: {
    aspectRatio: 2.5,
    animation: {
      duration: 0,
    },
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
        label: "# of Hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: ["#7477BF"],
        borderWidth: 0,
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
        borderWidth: 0,
        backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
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
