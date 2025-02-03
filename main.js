// Theme Toggle Button 
const themeBtn = document.querySelector('.nav-theme-btn'); // Ensure this selector matches your button class or ID
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.innerHTML = '<i class="uil uil-sun"></i>'
        //save theme to local storage

        localStorage.setItem('currentTheme', 'dark-theme')
    } else {
        themeBtn.innerHTML = '<i class="uil uil-moon"></i>'

         //save theme to local storage
        localStorage.setItem('currentTheme', '')
    }
});

document.body.className = localStorage.getItem('currentTheme')

// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const closeSidebarBtn = document.querySelector('.sidebar_close-btn');
const openSidebarBtn = document.querySelector('.nav_menu-btn');

openSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex';  // Show sidebar
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';  // Hide sidebar
});

// Chart Setup
const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
    type: "line",
    data: {
        labels: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November"
        ],
        datasets: [
            {
                label: "BTC",
                data: [24876, 45679, 29859, 86857, 67546, 46879, 76903, 87609, 68940, 87954, 34786],
                borderColor: "red",
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: "ETH",
                data: [44597, 96876, 77899, 12345, 60666, 15467, 99900, 26099, 55558, 33467, 23456],
                borderColor: "blue",
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: "LTC",
                data: [69999, 49976, 89006, 56787, 99876, 55466, 78965, 67897, 99808, 45688, 78955],
                borderColor: "green",
                borderWidth: 2,
                tension: 0.4
            },
        ]
    },
});