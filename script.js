let changeThemeBtn = document.getElementById("darkLightTheme");

changeThemeBtn.addEventListener("click", darkLightTheme);

function darkLightTheme() {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    changeThemeBtn.textContent = "Night";
  } else {
    document.body.style.backgroundColor = "black";
    changeThemeBtn.textContent = "Day";
    changeThemeBtn.style.border = "1px solid white";
  }
}
