"use strict";
exports.__esModule = true;
require("../styles/todo.css");
var TodoApp = /** @class */ (function () {
    function TodoApp() {
    }
    TodoApp.prototype.render = function () {
        var root = document.querySelector('#root');
        root.innerHTML = "\n<div class=\"dark\" id=\"dark\"></div>\n    <div class=\"burger-icon\" id=\"burger\">\n      <div class=\"burger-line\"></div>\n    </div>\n    <header id=\"header\">\n      <div class=\"navbar\" id=\"navbar\">\n        <div class=\"all-items\">\n          <div class=\"item homePage\">HOME PAGE</div>\n          <div class=\"item TodoApp active\">PLAN YOUR VISIT</div>\n          <div class=\"item eventPage\">Events</div>\n          <div class=\"item\">SUPPORT US</div>\n          <div class=\"item aboutPage\">ABOUT US</div>\n          <div class=\"item adminPage\">ADMIN PAGE</div>\n        </div>\n      </div>\n    </header>\n        <section class=\"container-todo\">\n              <h1>Plan Your Visit</h1>\n              \n              <div class=\"new-task-container box\">\n              \n              <label for=\"new-task\">Add New Task</label>\n              <input type=\"text\" id=\"new-task\">\n                <button id=\"addTask\">Add Task</button>\n              \n              </div>\n              \n              <div class=\"todo-list box\">\n              \n                <h2>Incomplete Tasks</h2>\n                <ul>\n                </ul>\n              \n              </div><!--/todo-list-->\n              \n              <div class=\"complete-list box\">\n                \n                <h2>Completed Tasks</h2>\n                <ul>\n                </ul>\n                \n                \n              </div>\n             \n        </section>\n        ";
        var newTask = document.querySelector('#new-task');
        var addTaskBtn = document.querySelector('#addTask');
        var toDoUl = document.querySelector(".todo-list ul");
        var completeUl = document.querySelector(".complete-list ul");
        function createNewTask(task) {
            var listItem = document.createElement("li");
            var checkBox = document.createElement("input");
            var label = document.createElement("label");
            label.innerText = localStorage.getItem(task);
            listItem.id = task;
            checkBox.type = "checkbox";
            listItem.appendChild(checkBox);
            listItem.appendChild(label);
            return listItem;
        }
        function addTask() {
            if (newTask.value) {
                localStorage.setItem(newTask.value, newTask.value);
                var listItem = createNewTask(newTask.value);
                toDoUl.appendChild(listItem);
                newTask.value = "";
                bindIncompleteItems(listItem, completeTask);
            }
        }
        function completeTask() {
            var listItem = this.parentNode;
            var deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.className = "delete";
            listItem.appendChild(deleteBtn);
            var checkBox = listItem.querySelector("input[type=checkbox]");
            checkBox.remove();
            completeUl.appendChild(listItem);
            bindCompleteItems(listItem, deleteTask);
        }
        function deleteTask() {
            var listItem = this.parentNode;
            console.log(listItem);
            var ul = listItem.parentNode;
            ul.removeChild(listItem);
        }
        function bindIncompleteItems(taskItem, checkBoxClick) {
            var checkBox = taskItem.querySelector("input[type=checkbox]");
            checkBox.onchange = checkBoxClick;
        }
        var bindCompleteItems = function (taskItem, deleteButtonPress) {
            var deleteButton = taskItem.querySelector(".delete");
            deleteButton.onclick = deleteButtonPress;
        };
        for (var i = 0; i < toDoUl.children.length; i++) {
            bindIncompleteItems(toDoUl.children[i], completeTask);
        }
        for (var i = 0; i < completeUl.children.length; i++) {
            bindCompleteItems(completeUl.children[i], deleteTask);
        }
        addTaskBtn.addEventListener("click", addTask);
    };
    return TodoApp;
}());
exports["default"] = TodoApp;
