/*
사용자가 입력을 했을 때 해당 조건이 틀릴 경우 '빨간색으로 표시'
해당조건이 맞을경우 'OK!' 표시와 함께 '초록색으로 표시'
*/
const userId = document.querySelector("#userId");
const userIdSpan = document.querySelector("#userId+Span");
const userPwd = document.querySelector("#userPwd");
const userPwdSpan = document.querySelector("#userPwdSpan");
const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckSpan = document.querySelector("#userPwdCheckSpan");
const userName = document.querySelector("#userName");
const userNameSpan = document.querySelector("#userNameSpan");
const email = document.querySelector("#email");
const emailSpan = document.querySelector("#emailSpan");

userId.addEventListener("input", function () {
  //첫 글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12글자로 입력하시오.
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(userId.value);
  if (check) {
    userIdSpan.style.color = "green";
    userIdSpan.innerHTML = "OK!";
  } else {
    userIdSpan.style.color = "red";
    userIdSpan.innerHTML =
      "첫 글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12글자로 입력하시오.";
  }
});

userPwd.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(userPwd.value);
  if (check) {
    userPwdSpan.style.color = "green";
    userPwdSpan.innerHTML = "OK!";
  } else {
    userPwdSpan.style.color = "red";
    userPwdSpan.innerHTML =
      "영문자, 숫자, 특수문자를 조합하여 8~15글자로 입력하시오.";
  }
});

userPwdCheck.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(userPwdCheck.value);
  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckSpan.style.color = "green";
    userPwdCheckSpan.innerHTML = "OK!";
  } else {
    userPwdCheckSpan.style.color = "red";
    userPwdCheckSpan.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});

userName.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(userName.value);
  if (check) {
    userNameSpan.style.color = "green";
    userNameSpan.innerHTML = "OK!";
  } else {
    userNameSpan.style.color = "red";
    userNameSpan.innerHTML =
      "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});

email.addEventListener("input", function () {
  const regExp = /[!-~]+@[!-~]+$/;
  const check = regExp.test(email.value);
  if (check) {
    emailSpan.style.color = "green";
    emailSpan.innerHTML = "OK!";
  } else {
    emailSpan.style.color = "red";
    emailSpan.innerHTML = "이메일 형식에 맞춰서 입력하시오.";
  }
});
// 영문자, 숫자, 특수문자를 조합하여 8~15글자로 입력하시오.
// [!-~]{8-15}

// 위의 비밀번호와 일치하게 입력하시오.
// 정규표현식 필요 X, 위에 입력한 비밀번호 값이랑 비교

// 한글로만 이루어져야되며 2글자 이상으로 입력하시오.
// [가-힣]{2,}

// 이메일 형식에 맞춰서 입력하시오.
// aasd123!@gmail.com
// -> (영어, 숫자, 여러 문자 상관없이 길이도 상관없이 : +)@(앞이랑 동일)\.(앞이랑동일)
