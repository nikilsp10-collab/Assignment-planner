const form = document.getElementById("assignment-form");
const list = document.getElementById("assignment-list");

form.onsubmit = function (event) {
  event.preventDefault();

  const item = document.createElement("li");
  item.textContent =
    document.getElementById("assignment-name").value +
    " — Due: " +
    document.getElementById("due-date").value;

  list.appendChild(item);
  form.reset();
};