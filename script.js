let btn = document.querySelector("#btn");
let any = document.querySelector("#heading");
let display = 0;
btn.addEventListener("click", () => {
  if (display == 0) {
    any.innerHTML =
      "Hello Everyone. My name is Research Dhamala (clay). This is my portfolio which I've created after 6 months of experience.";

    any.style.padding = "20px 30px";
    any.style.marginTop = "20px";
    any.style.width = "50rem";
    any.style.borderRadius = "20px";
    any.style.color = "#e914de";
    any.style.backgroundImage = "url(jeremy-bishop-G9i_plbfDgk-unsplash.jpg)";
    any.style.backgroundSize = "cover";
    display = 1;
  } else {
    any.innerHTML = "";
    any.style.padding = "0";
    display = 0;
    any.style.width = "120px";
  }
});

let b = document.querySelector("#secondBtn");
let w = document.querySelector("#myWork");
let d = 0;

b.addEventListener("click", () => {
  if (d == 0) {
    w.innerHTML =
      "I've done many projects during 6 months. Like calculator, digital clock, guess the number game, and rock, paper, and scissor. If you wanna see then, the project links are below.";
    w.style.padding = "20px 30px";
    w.style.marginTop = "20px";
    w.style.width = "60rem";
    w.style.borderRadius = "20px";
    w.style.color = "#e914de";
    w.style.backgroundImage = "url(jeremy-bishop-G9i_plbfDgk-unsplash.jpg)";
    w.style.backgroundSize = "cover";

    d = 1;
  } else {
    w.innerHTML = "";
    w.style.backgroundColor = "";
    w.style.padding = "0";
    d = 0;
  }
});
let modeBtn = document.querySelector("#btnTop");
let i = document.querySelector("body");
let currBtn = 0;
modeBtn.addEventListener("click", () => {
  if (currBtn == 0) {
    i.style.backgroundImage = "url(matt-gross-9aCkSl6YcXg-unsplash.jpg)";
    currBtn = 1;
  } else {
    i.style.backgroundImage = "";
    currBtn = 0;
  }
  console.log(currBtn);
});
let ocean = document.querySelector("#ocean");
let body = document.querySelector("body");
let m = 0;
ocean.addEventListener("click", () => {
  if (m == 0) {
    body.style.backgroundImage = "url(kyle-johnson-8Gl7Ew-q6D8-unsplash.jpg)";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
    m = 1;
  } else {
    body.style.backgroundImage = "";
    m = 0;
  }
});
let color = document.querySelector("#color");
let a = document.querySelector("body");
let n = 0;
color.addEventListener("click", () => {
  if (n == 0) {
    a.style.backgroundImage = "url(pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg)";
    a.style.backgroundPosition = "center";
    a.style.backgroundSize = "cover";
    n = 1;
  } else {
    a.style.backgroundImage = "";
    n = 0;
  }
});
let earth = document.querySelector("#earth");
let c = document.querySelector("body");
let v = 0;
earth.addEventListener("click", () => {
  if (v == 0) {
    c.style.backgroundImage = "url(nasa-vhSz50AaFAs-unsplash.jpg)";
    c.style.backgroundPosition = "center";
    c.style.backgroundSize = "cover";
    v = 1;
  } else {
    c.style.backgroundImage = "";
    v = 0;
  }
});
let nature = document.querySelector("#nature");
let q = document.querySelector("body");
let f = 0;
nature.addEventListener("click", () => {
  if (f == 0) {
    q.style.backgroundImage = "url(qingbao-meng-01_igFr7hd4-unsplash.jpg)";
    q.style.backgroundPosition = "center";
    q.style.backgroundSize = "cover";
    f = 1;
  } else {
    q.style.backgroundImage = "";
    f = 0;
  }
});
