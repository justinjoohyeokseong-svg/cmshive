const dateEl = document.getElementById("date");

const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric"
});

dateEl.textContent = today;
