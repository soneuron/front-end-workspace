function btn1() {
  console.log("최소값 : ", Math.min(5, 7, -1, -6)); // 최소값 : -6
  console.log("최대값 : ", Math.max(5, 7, -1, -6)); // 최대값 : 7
  console.log("절대값 : ", Math.abs(-8.878787)); // 절대값 : 8.878787
}
function btn2() {
  const number = 2.896;
  console.log("반올림 : ", Math.round(number)); // 반올림 : 3
  console.log("버림 : ", Math.floor(number)); // 버림 : 2
  console.log("올림 : ", Math.ceil(number)); // 올림 : 3
}
function btn3() {
  // console.log(Math.random()); // 0 ~ 1 사이의 무작위 숫자

  // 1 ~ 10 까지의 랜텀값
  const result = Math.floor(Math.random() * 10 + 1);
  console.log(result);
}
function btn4() {
  const now = new Date();
  console.log(now);

  console.log("년 : ", now.getFullYear()); // 2024
  console.log("월 : ", now.getMonth() + 1); // 5 -> 6 ('월'만 0 ~ 11 사이로 출력)
  console.log("일 : ", now.getDate()); // 12
  console.log("시 : ", now.getHours()); // 12
  console.log("분 : ", now.getMinutes()); // 14
  console.log("초 : ", now.getSeconds()); //
}
function btn5() {
  // 년, 월, 일, 시, 분, 초
  const a = new Date(2024, 10, 13, 12, 50, 0);
  console.log(a);

  // 년, 월, 일
  const b = new Date(2024, 10, 13);
  console.log(b);
}
function btn6() {
  setTimeout(() => {
    console.log("3초 후 실행!");
  }, 3000);
}
function btn7() {
  let second = 0;
  setInterval(() => {
    console.log(`${++second}초`);
  }, 1000);
}
function btn8() {
  console.log(location);
  console.log(location.href); // 전체 URL
  console.log(location.pathname); // 경로

  location.reload(); // 새로고침
  location.href = "https://www.naver.com"; // 해당 페이지로 이동
}
