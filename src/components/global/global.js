function makeFormRed() {
  for (let elem of document.getElementsByClassName("login-form")) {
    if (!elem.classList.contains("btn")) {
      elem.classList.add("error");
    }
  }
}

export default makeFormRed;