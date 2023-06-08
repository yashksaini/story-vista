const themeCards = document.querySelectorAll(".themeCard");
const defaultTheme = localStorage.getItem("pageTheme") || 0;
themeCards.forEach((themeCard, i) => {
  themeCard.addEventListener("click", () => {
    localStorage.setItem("pageTheme", i);
    setTheme();
    activeCard(i);
  });
});

const activeCard = (i) => {
  const themeValue = localStorage.getItem("pageTheme") || i;
  themeCards.forEach((themeCard, i) => {
    themeCard.className = "themeCard";
  });
  themeCards[themeValue].className = "themeCard activeCard";
};

activeCard(defaultTheme);
