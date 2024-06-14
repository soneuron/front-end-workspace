const id = document.querySelector("#id");
const idSpan = document.querySelector("#id+span");
id.addEventListener("input", function () {
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(id.value);
  if (check) {
    idSpan.style.color = "green";
    idSpan.innerHTML = "OK!";
  } else {
    idSpan.style.color = "red";
    idSpan.innerHTML =
      "첫 글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12글자로 입력하시오.";
  }
});

const pwd = document.querySelector("#pwd");

pwd.addEventListener("input", function () {});
