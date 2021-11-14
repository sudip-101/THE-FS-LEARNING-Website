const partBook = document.getElementById("part-book");
const partAskExpert = document.getElementById("part-ask-expert");

const bookCall = document.getElementById("book-call");
const askExpert = document.getElementById("ask-expert");

bookCall.onclick = () => {
  bookCall.classList.add("active");
  askExpert.classList.remove("active");
  partAskExpert.classList.add("active");
  partBook.classList.remove("active");
  partBook.classList.remove("active-state");
};
askExpert.onclick = () => {
  askExpert.classList.add("active");
  bookCall.classList.remove("active");
  partBook.classList.add("active");
  partAskExpert.classList.remove("active");
};
