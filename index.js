// 1.Upon Clicking, it will log on console - 'Button is clicked'

const clickButton = document.querySelector("#clickButton");

clickButton.addEventListener("click", () => {
  console.log(`Button is clicked.`);
});

// 2.Hovering on this button will change the body background color to 'red' and hovering out will again change the background back to 'white'.

const mouseOverAndOut = document.querySelector("#onMouseOverAndOut");

mouseOverAndOut.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "red";
});
mouseOverAndOut.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "white";
});

// 3. onchange()

const colorSelect = document.querySelector("#color");

colorSelect.addEventListener("change", () => {
  let selectedColor = colorSelect.value;
  document.body.style.backgroundColor = selectedColor;
});

const studentName = document.querySelector("#studentName");
studentName.addEventListener("change", () => {
  document.querySelector("#forChange").textContent = studentName.value;
});

// 4.onkeyup and onkeydown

const onKeyUpBtn = document.querySelector("#onKeyUp");
onKeyUpBtn.addEventListener("keyup", (e) => {
  document.querySelector("#forKeyUp").textContent = e.key;
});

const onKeyDownBtn = document.querySelector("#onKeyDown");
onKeyDownBtn.addEventListener("keydown", (e) => {
  document.querySelector("#forKeyDown").textContent = e.key;
});

function myEvent() {
  alert(`webpage finished loading`);
}
