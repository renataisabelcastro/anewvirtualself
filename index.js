const btnPrev = document.querySelector(".control-btn.prev");
const btnNext = document.querySelector(".control-btn.next");

const book = document.querySelector(".book");
const leafs = book.querySelectorAll(".book-leaf");

console.log(btnPrev);
console.log(btnNext);
console.log(leafs);

var initLeaf = -1;

var currLeaf = initLeaf;

function setTurnedLeafs() {
  // set button status
  if (currLeaf === initLeaf) btnPrev.classList.add("hidden");
  else btnPrev.classList.remove("hidden");

  if (currLeaf === leafs.length - 1) btnNext.classList.add("hidden");
  else btnNext.classList.remove("hidden");

  // set turned leafs
  leafs.forEach((leaf, index) => {
    if (index <= currLeaf) leaf.classList.add("turn");
    else leaf.classList.remove("turn");
  });

  // set book status
  if (currLeaf === initLeaf) book.dataset["leaf"] = "first";
  else if (currLeaf === leafs.length - 1) book.dataset["leaf"] = "last";
  else book.dataset["leaf"] = "inner";

  // set leafs vertical order
  leafs.forEach((leaf, index) => {
    if (index <= currLeaf) leaf.style.zIndex = index;
    else leaf.style.zIndex = leafs.length - index;
  });
}

btnPrev.addEventListener("click", () => {
  currLeaf = Math.max(currLeaf - 1, initLeaf);

  console.log(currLeaf);
  setTurnedLeafs();
});

btnNext.addEventListener("click", () => {
  currLeaf = Math.min(currLeaf + 1, leafs.length - 1);

  console.log(currLeaf);
  setTurnedLeafs();
});

// on init

setTurnedLeafs();
