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
    alert(`真是不敢相信，你寧願去購物？Ouch`);
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
