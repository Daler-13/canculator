let okno = document.querySelector("input"),
  tab = document.querySelectorAll("td");
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function (e) {
    let tabVal = e.target.innerText;
    if (tabVal == "AC") {
      okno.value = "";
    } else if (tabVal == "=") {
      okno.value = eval(okno.value);
    } else if (tabVal == "zed") {
      okno.value = Math.sqrt(okno.value);
    } else if (tabVal == "+") {
      if (okno.value == "") {
        okno.value = "";
      } else {
        okno.value = okno.value + "+";
      }
    } else if (tabVal == "*") {
      if (okno.value == "") {
        okno.value = "";
      } else {
        okno.value = okno.value + "*";
      }
    } else if (tabVal == "/") {
      if (okno.value == "") {
        okno.value = "";
      } else {
        okno.value = okno.value + "/";
      }
    } else {
      okno.value = okno.value + tabVal;
    }
  });
}

let openx = document.querySelector(".openx");
let closee = document.querySelector(".close");
let inn = document.querySelector(".modal_window");

openx.addEventListener("click", () => {
  inn.style.opacity = "0";
  setTimeout(() => {
    inn.style.display = "flex";
    openx.style.display = "none";
    setTimeout(function () {
      inn.style.opacity = "1";
    }, 50);
  }, 50);
});

closee.addEventListener("click", () => {
  openx.style.display = "block";
  inn.style.opacity = "0";
  setTimeout(() => {
    okno.value = ""
    inn.style.opacity = "0";
    setTimeout(function () {
      inn.style.display = "none";
    }, 10);
  }, 1000);
});
