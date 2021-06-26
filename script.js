const headerOne = document.getElementById("title");
console.log(headerOne);
console.log(headerOne.textContent);

headerOne.innerText = "Musk Story";

const story = document.querySelectorAll("#story");
console.log(story);

const auteur = document.getElementById("author");
console.log(story.length);
for (var i = 0; i < story.length; i++) {
  story[i].style.backgroundColor = "royalblue";
}
story[2].style.cssText = "background-color:brown; text-decoration:underline;";
story[1].className = "changes";
setInterval(auteur.classList.add("story"), 1000);
setInterval(auteur.classList.remove("story"), 2000);
console.log(auteur.classList);

btn = document.querySelector(".btn");
btn.onmouseover = function () {
  btn.style.cssText = "background: black; color: white; border-radius:15px;";
};
btn.onmouseout = function () {
  btn.style.cssText = "background: white; color: black;";
};
btn.onclick = function () {
  window.alert("Hello ! Thank you please to give a thumbs up!");
};
console.log(auteur.getAttribute('class'))
console.log(auteur.childNodes)