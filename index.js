function updateclock() {
  const now = new Date();
  let hours = now.getHours();
  const meri = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const min = now.getMinutes().toString().padStart(2, 0);
  const sec = now.getSeconds().toString().padStart(2, 0);
  const timesj = `${hours}:${min}:${sec} ${meri}`;
  document.getElementById("clock").textContent = timesj;
}
updateclock();
setInterval(updateclock, 1000);
