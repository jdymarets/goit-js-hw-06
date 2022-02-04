const controlFont = document.querySelector("#font-size-control");

const text = document.querySelector("#text");
text.style.fontSize = controlFont.value + "px";

controlFont.oninput = function () {
  text.style.fontSize = controlFont.value + "px";
};
