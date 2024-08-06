// 1. 이벤트 연결
// one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

/*
    // on
    // 마우스가 올라갈 때(mouseenter)
    // 배경색 : hotpink, 텍스트 : 마우스가 올라감
    $("#area2").on("mouseenter", () => {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
    });
    // 마우스가 내려갈 때(mouseleave)
    // 배경색 : beige, 텍스트 : 마우스가 내려감
    $("#area2").on("mouseleave", () => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
    });
    $("#area2").on("mouseenter mouseleave", (event) => {
    if (event.type === "mouseenter") {
        $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
    } else if (event.type === "mouseleave") {
        $(event.target).css("background-color", "beige").text("마우스가 내려감");
    }
    });
    $("#area2").on("click", (event) => {
    $(event.target)
        .css("background-color", "white")
        .text("")
        .off("mouseenter mouseleave"); // mouseenter mouseleave 이벤트 제거
    });
*/
$("#area2").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    // 키보드가 눌려질 때
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    // 글자가 입력될 때
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    // 키보드가 떼어질 때
    console.log(`keyup - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

// 글자 수 세기
// val().length = 글자 수
// substr(시작 인덱스, 길이)
$("#textarea2").on({
  keyup: (e) => {
    console.log();
    // if (`${e.key}!=="backspace"`) {
    //   $("#counter").text(val().length + 1);
    // } else if (`${e.key} === "backspace"`) {
    //   $("#counter").text(val().length - 1);
    // }
  },
});

// console.log($("#textarea2").val().length);

// 글자 수 세기
$("#textarea2").keyup((e) => {
  let target = $(e.target);
  //   console.log(target);
  let length = target.val().length;
  //   console.log(length);
  let maxLength = parseInt($("#maxLength").text());
  if (length > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(length);
  }
});

$("#userId").keyup((e) => {
  let target = $(e.target);
  let id = target.val();
  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  if (regExp.test(id)) {
    $("#idCheck").text("사용가능한 아이디입니다.").css("color", "green");
  } else if ($("#userId").val() === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "red");
  }
});

/*
    $("#userId").keyup((e) => {
        let id = $(e.target).val();
        id = e.target.value
        
        const regExp = /^[a-z][a-zA-Z0-9]{3,11}$/;
        if(regExp.test(id)) {
            $("#idCheck").text("사용가능한 아이디입니다.").css("color", "green");
        } else if (id === ""){
            $("#idCheck").text("")
        } else {
            $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "red");
        }
    });
*/

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let currentCount = parseInt(counter.text());
  counter.text(currentCount + 1);
});
$("#btn").click(() => {
  $("#area3").trigger("click");
});
