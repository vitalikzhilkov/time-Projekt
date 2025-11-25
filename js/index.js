function updateDateTime() {
    const now = new Date();
    document.getElementById('currentDate').innerText = now.toLocaleDateString();
    document.getElementById('currentTime').innerText = now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();
