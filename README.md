# JS Common Events

1. onclick( )

```js
// 1.Upon Clicking, it will log on console - 'Button is clicked'

const clickButton = document.querySelector("#clickButton");

clickButton.addEventListener("click", () => {
  console.log(`Button is clicked.`);
});
```

2. onmouseover( ) and onmouseout( )

```js
// 2.Hovering on this button will change the body background color to 'red' and hovering out will again change the background back to 'white'.

const mouseOverAndOut = document.querySelector("#onMouseOverAndOut");

mouseOverAndOut.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "red";
});

mouseOverAndOut.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "white";
});
```

3. onchange( )

In JavaScript, the `onchange` event is used to detect changes in the value of an input element. It is commonly used with form elements like `<input>`, `<select>`, and `<textarea>`. The event is triggered when the user makes a change to the input, such as typing in a new value or selecting a different option.

```html
<form>
  <select name="color" id="color">
    <option value="">Chose Color</option>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
  </select>
</form>
```

```js
const colorSelect = document.querySelector("#color");

colorSelect.addEventListener("change", () => {
  let selectedColor = colorSelect.value;
  document.body.style.backgroundColor = selectedColor;
});
```

Another example,

Whenever you will finish filling up the input and then focus out of the input, it will show whatever you have written in a paragraph tag.

```html
<input type="text" id="studentName" />

<p id="forChange"></p>
```

```js
const studentName = document.querySelector("#studentName");

studentName.addEventListener("change", () => {
  document.querySelector("#forChange").textContent = studentName.value;
});
```

4. onkeyup( ) and onkeydown( )

```html
<input type="text" id="onKeyUp" placeholder="OnKeyUp" />
<p id="forKeyUp"></p>

<br />

<input type="text" id="onKeyDown" placeholder="OnKeyDown" />
<p id="forKeyDown"></p>
```

```js
const onKeyUpBtn = document.querySelector("#onKeyUp");

onKeyUpBtn.addEventListener("keyup", (e) => {
  document.querySelector("#forKeyUp").textContent = e.key;
});

const onKeyDownBtn = document.querySelector("#onKeyDown");

onKeyDownBtn.addEventListener("keydown", (e) => {
  document.querySelector("#forKeyDown").textContent = e.key;
});
```

5. onload( )

Whenever an element is finished loading what do you want it to do? Many cases body element is targeted and loaders are used till the body element is finished loading.

```html
<body onload="myEvent()"></body>
```

```js
function myEvent() {
  alert(`webpage finished loading`);
}
```
