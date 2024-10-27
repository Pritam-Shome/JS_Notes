
1. tagName

```js
<div id="myElement">Hello World</div>
<script>
  const element = document.getElementById("myElement");
  console.log(element.tagName); // Output: "DIV"
</script>
 ```
 In this example, tagName returns "DIV" because the element is a <div> tag.

 
2. innerText

```js
<div id="myElement">Hello <span style="display:none">Hidden</span> World</div>
<script>
  const element = document.getElementById("myElement");
  console.log(element.innerText); // Output: "Hello World"
</script>

 ```
 Here, innerText returns "Hello World" because the span containing "Hidden" is set to display:none, making it invisible.

 

 3. innerHTML


```js
<div id="myElement">Hello <b>World</b></div>
<script>
  const element = document.getElementById("myElement");
  console.log(element.innerHTML); // Output: "Hello <b>World</b>"
  element.innerHTML = "New <i>Content</i>";
  console.log(element.innerHTML); // Output: "New <i>Content</i>"
</script>
 ```

 The first log shows "Hello <b>World</b>" since it includes the HTML tags.
After setting a new value for innerHTML, the content changes to "New <i>Content</i>".



4. textContent

```js
<div id="myElement">Hello <span style="display:none">Hidden</span> World</div>
<script>
  const element = document.getElementById("myElement");
  console.log(element.textContent); // Output: "Hello Hidden World"
</script>
```
In this example, textContent returns "Hello Hidden World" because it includes the hidden text.
