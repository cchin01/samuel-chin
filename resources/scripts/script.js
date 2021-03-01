// 複製function，創造textarea複製後刪除，須注意select只能針對textarea

function copyLink(text) {
  let textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert(`已成功複製此頁面縮網址`);
}

document.querySelectorAll(".alert_ouch").forEach((item) => {
  item.addEventListener("click", (event) => {
    alert(`不會吧，你寧願去購物？\n或許再考慮一下？`);
  });
});

const img = document.querySelector(".ImageHover");
const btn_n = document.querySelector(".btn1");
const btn_bw = document.querySelector(".btn2");

const img_n = "resources/img/avatar.jpg";
const img_bw = "resources/img/avatar bw.jpg";

btn_n.addEventListener("click", function (e) {
  img.src = img_n;
});

btn_bw.addEventListener("click", function (e) {
  img.src = img_bw;
});

const cart = document.querySelector(".cart");

cart.addEventListener("click", function (e) {
  alert(`裡面空空如也~`);
});
