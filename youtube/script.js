const bar = document.querySelector(".progress-bar");
window.addEventListener("scroll", function () {
  // 전체 스크롤 할 수 잇는 범위 = 바디 전체 높이 - 윈도우 높이(현재 창)
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;
  console.log(parseInt((window.scrollY / maxScrollValue) * 100)) + "%";
});
