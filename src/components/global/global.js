function removeLoginError() {
  for (let elem of document.getElementsByClassName("login-form")) {
    if (!elem.classList.contains("btn")) {
      elem.classList.remove("error");
    }
  }
}

function makeFormRed() {
  for (let elem of document.getElementsByClassName("login-form")) {
    if (!elem.classList.contains("btn")) {
      elem.classList.add("error");
    }
  }

  setTimeout(removeLoginError, 5000);
}

export default makeFormRed;