// 1. Content 설정
console.log($("#content1").html()); // <a>네이버</a>
console.log($("#content3").text()); // 네이버

// content1의 내용 (태그 + 텍스트)을 content2에 추가
$("#content2").html($("#content1").html());

// content3의 내용(텍스트)을 content4에 추가
$("#content4").text($("#content3").text());

// 2. 요소 추가
// 자바스크립트
const p = document.createElement("p");
p.innerHTML = "자바스크립트로 추가";
document.querySelector("#area1").appendChild(p);

// 제이쿼리
const p2 = $("<p>").html("제이쿼리로 추가");
// $(A).append(B) : A 요소의 '자식 요소'로 B 요소를 '뒷부분'에 추가
$("#area1").append(p2);

// $(A).prepend(B) : A 요소의 '자식 요소'로 B 요소를 '앞부분'에 추가
$("#area1").prepend("<span>prepend</span>");

// $(A).after(B) : A 요소의 '형제 요소'로 B 요소를 '뒷부분'에 추가
$("#area1").after("<span>after</span>");

// $(A).before(B) : A 요소의 '형제 요소'로 B 요소를 '앞부분'에 추가
$("#area1").before("<span>before</span>");

// $(B).appendTo(A) : B 요소를 A 요소의 '자식 요소'로 '뒷부분'에 추가
$("<span>appendTo</span>").appendTo("#area2");

// $(B).prependTo(A) : B 요소를 A 요소의 '자식 요소'로 '앞부분'에 추가
$("<span>prependTo</span>").prependTo("#area2");

// $(B).insertAfter(A) : B 요소를 A 요소의 '형제 요소'로 '뒷부분'에 추가
$("<span>insertAfter</span>").insertAfter("#area2");

// $(B).insertBefore(A) : B 요소를 A 요소의 '형제 요소'로 '앞부분'에 추가
$("<span>insertBefore</span>").insertBefore("#area2");

// 3. 복제
$(".item").hover(
  // $(".item").hover(
  //   (event) => {
  //     console.log("event1: " + event.type); // mouseenter
  //     console.log(event.target);
  //     $(event.target).addClass("bg-hotpink");
  //   },
  //   (event) => {
  //     console.log("event2: " + event.type); // mouseleave
  //     $(event.target).removeClass("bg-hotpink");
  //   }
  // );
  (event) => {
    console.log("event3: " + event.type);
    $(event.target).toggleClass("bg-hotpink");
  }
);
$("#btn1").click(() => {
  // 이벤트까지 복제하려면 매개값 true 를 전달 (기본값 : false)
  let item = $("#item1").clone(true);
  $("#clone-result").html(item);
});

// 4. 요소 제거
// remove -> 이벤트까지 삭제
$("#remove").click(() => {
  let item = $("#item2").remove();
  $("#remove-result").append(item);
});

// detach // 이벤트까지 복사
$("#detach").click(() => {
  let item = $("#item2").detach();
  $("#remove-result").append(item);
});

// empty --> 전체 지우기
$("#empty").click(() => {
  $("#remove-test").empty();
});

// 5. 배열 관리
let array = [
  { name: "구글", link: "http://google.com" },
  { name: "네이버", link: "http://naver.com" },
  { name: "다음", link: "http://daum.net" },
];

// 자바스크립트
array.forEach((element, index, origin) => {
  console.log(element);
  console.log(index);
  console.log(origin);
  console.log("javascript ----------");
});

// 제이쿼리
$(array).each((element, index) => {
  console.log(index);
  console.log(index.name);
  console.log(index.link);
  console.log(element);
  console.log(element.name);
  console.log(element.link);
  console.log("jquery ----------");
});

let output = "";
$(array).each((index, element) => {
  const a = `<a href="${element.link}">${element.name}</a><br/>`;

  // append 방식
  //   $("#each-test").append(a);

  // html 방식
  output += a;
});
$("#each-test").html(output);
