$(document).ready(() => {
  loadToDo();

  $("#newBtn").click(() => {
    const todoText = prompt("Enter your TO DO:");
    if (todoText && todoText.trim() !== "") {
      addToDo(todoText);
      saveToDo();
    }
  });

  function addToDo(text) {
    const $toDoDiv = $("<div>")
      .text(text)
      .click(() => deleteToDo($toDoDiv));
    $("#ft_list").prepend($toDoDiv);
    saveToDo();
  }

  function deleteToDo($toDoDiv) {
    if (confirm("Do you really want to delete this TO DO?")) {
      $toDoDiv.remove();
      saveToDo();
    }
  }

  function loadToDo() {
    const toDoArray = loadFromCookie("todo") || loadFromLocalStorage("todo");
    if (toDoArray) {
      toDoArray.reverse().forEach((item) => addToDo(item));
    }
  }

  function saveToDo() {
    const toDoArray = $("#ft_list div")
      .map((_, item) => $(item).text())
      .get();
    saveToCookie("todo", toDoArray);
  }

  function saveToCookie(key, value) {
    const json = JSON.stringify(value);
    document.cookie = key + "=" + encodeURIComponent(json) + ";path=/";

    if (!loadFromCookie(key)) {
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
});
