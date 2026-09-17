window.onload = () => {
  loadToDo();
};

document.getElementById("newBtn").onclick = () => {
  const todoText = prompt("Enter your TO DO:");
  if (todoText && todoText.trim() !== "") {
    addToDo(todoText);
    saveToDo();
  }
};

function addToDo(text) {
  const toDoDiv = document.createElement("div");
  toDoDiv.textContent = text;
  toDoDiv.onclick = () => deleteToDo(toDoDiv);
  const list = document.getElementById("ft_list");
  list.insertBefore(toDoDiv, list.firstChild);
  saveToDo();
}

function deleteToDo(toDoDiv) {
  if (confirm("Do you really want to delete this TO DO?")) {
    toDoDiv.remove();
    saveToDo();
  }
}

function loadToDo() {
  // load todo
  const toDoArray = loadFromCookie("todo") || loadFromLocalStorage("todo");
  if (toDoArray) {
    toDoArray.reverse().forEach((item) => addToDo(item));
  }
}

function saveToDo() {
  const list = document.querySelectorAll("#ft_list div");
  const toDoArray = [];
  list.forEach((item) => toDoArray.push(item.textContent));
  saveToCookie("todo", toDoArray);
}

function saveToCookie(key, value) {
  const json = JSON.stringify(value);
  document.cookie = key + "=" + encodeURIComponent(json) + ";path=/";

  // is cookie really works on file:// protocol?
  // mai mee http local server kna ???
  if (!loadFromCookie(key)) {
    // save to localStorage as backup
    localStorage.setItem(key, json);
  }
}

function loadFromCookie(key) {
  try {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith(key + "="))
      .split("=")[1];
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
}

function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
