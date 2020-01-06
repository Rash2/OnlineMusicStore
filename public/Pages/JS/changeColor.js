const colors = ["black", "maroon", "crimson"];
let index = 0;
let footer = document.getElementsByTagName("footer")[0];

let preview = document.createElement("div");
preview.style.width = "16px";
preview.style.height = "16px";
preview.style.border = "1px solid white";
preview.style.backgroundColor = "black";
preview.classList.add("hide");
footer.appendChild(preview);

let changeFooterColorBtn = document.createElement("button");
changeFooterColorBtn.innerHTML = "Select color";
changeFooterColorBtn.style.fontSize = "0.8em";
changeFooterColorBtn.style.border = "1px solid #8ee4af";
changeFooterColorBtn.style.color = "#8ee4af";
changeFooterColorBtn.style.background = "black";
changeFooterColorBtn.style.padding = "4px 8px";
changeFooterColorBtn.style.cursor = "pointer";
changeFooterColorBtn.style.margin = "0 16px";
changeFooterColorBtn.classList.add("hide");
footer.appendChild(changeFooterColorBtn);

let changePreviewColor = () => {
  preview.style.backgroundColor = colors[index];
  index++;
  if (index > 3) index = 0;
};

//add Esc event
let escCount = 0;
document.addEventListener("keydown", e => {
  if (e.key == "Escape" || e.key == "Esc") {
    escCount++;
  }
  if (escCount % 2 != 0) {
    preview.classList.remove("hide");
    changeFooterColorBtn.classList.remove("hide");
    var colorTimer = setInterval(changePreviewColor, 5000);
  } else {
    preview.classList.add("hide");
    changeFooterColorBtn.classList.add("hide");
    clearInterval(colorTimer);
  }
});

changeFooterColorBtn.addEventListener("click", () => {
  footer.style.backgroundColor = preview.style.backgroundColor;
});
