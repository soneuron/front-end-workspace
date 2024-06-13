const last = new Date("2025-01-01 00:00:00");
function count() {
  const now = new Date();
  const second = Math.floor(((last - now) / 1000) % 60);
  const minute = Math.floor(((last - now) / 1000 / 60) % 60);
  const hour = Math.floor(((last - now) / 1000 / 60 / 60) % 24);
  const day = Math.floor((last - now) / 1000 / 60 / 60 / 24);
  console.log(second);
  clock.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;
}

count();

setInterval(count, 1000);

/*
const last = new Date("2025-01-01 00:00:00");
// 1초 = 밀리세컨드 / 1000
// 60초 = 1분, 60분 = 1시간, 24시간 = 1일
const now = new Date();
const second = Math.floor(((last - now) / 1000) % 60);
const minute = Math.floor(((last - now) / 1000 / 60) % 60);
const hour = Math.floor(((last - now) / 1000 / 60 / 60) % 24);
const day = Math.floor((last - now) / 1000 / 60 / 60 / 24);
console.log(second);
clock.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;
setInterval(() => {
  // 지금 현재 날짜 와 비교해야 할 날짜
  const now = new Date();
  const last = new Date("2025-01-01 00:00:00");
  // 1초 = 밀리세컨드 / 1000
  // 60초 = 1분, 60분 = 1시간, 24시간 = 1일
  const second = Math.floor(((last - now) / 1000) % 60);
  const minute = Math.floor(((last - now) / 1000 / 60) % 60);
  const hour = Math.floor(((last - now) / 1000 / 60 / 60) % 24);
  const day = Math.floor((last - now) / 1000 / 60 / 60 / 24);
  console.log(second);
  clock.innerHTML = `${day}d ${hour}h ${minute}m ${String(second).padStart(
    2,
    "0"
  )}s`;
}, 1000); */

/*
  const last = new Date("2025-01-01 00:00:00");
setInterval(() => {
  const now = new Date();
  const second = Math.floor((last - now) / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  console.log(second);
  clock.innerHTML = `${day}d ${hour % 24}h ${minute % 60}m ${second % 60}s`;
}, 1000);
*/
