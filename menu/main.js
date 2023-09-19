const imglist = [
  "steakhouse.png",
  "smokehouse.png",
  "whooper.png",
  "triple-whopper.png",
];
const information = [
  "Steakhouse Menü bügüne özel sadece 120 TL",
  "Smokehouse menü alana istedeğin tatlı bedava",
  "Whooper menüden bir alana bir bedava",
  "Triple-whooper menüde bu aya özel içecekler bizden",
];
let sayi = 1;
function promotionsShow() {
  let img_holder = document.querySelector(".imgforjs");
  let information_holder = document.querySelector(".img-information-2");
  let img_code = `<ul class="img-ul">
    <li>
      <img
          class="active promotions-img"
          src="./img/${imglist[sayi]}"
          alt=""
      />
    </li>
  </ul>`;
  let information_code = `<h2>${information[sayi]}</h2>`;
  img_holder.innerHTML = img_code;
  information_holder.innerHTML = information_code;
  if (sayi >= 3) {
    sayi = 0;
  } else {
    sayi++;
  }
}

document.querySelector(".btn1").addEventListener("click", () => {
  promotionsShow();
});
