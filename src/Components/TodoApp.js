"use strict";
exports.__esModule = true;
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
        addTaskBtn.addEventListener('click', addTodo);
        function addTodo() {
            var task = newTask.value;
            if (task) {
                localStorage.setItem(task, task);
            }
        }
        //     function createNewTask(task:string){
        //         const listItem = document.createElement("li") as HTMLLIElement;
        //         const checkBox = document.createElement("input")  as HTMLInputElement;
        //         const label = document.createElement("label") as HTMLLabelElement;
        //         label.innerText = <string>localStorage.getItem(task);
        //         listItem.id = task;
        //         checkBox.type = "checkbox";
        //         listItem.appendChild(checkBox);
        //         listItem.appendChild(label);
        //         return listItem;
        //
        //     }
        //
        //     function addTask(){
        //         if (newTask.value) {
        //             localStorage.setItem(newTask.value, newTask.value);
        //             const listItem = createNewTask(newTask.value);
        //             toDoUl.appendChild(listItem);
        //             newTask.value="";
        //             bindIncompleteItems(listItem, completeTask as () => {});
        //         }
        //
        //     }
        //
        //     function completeTask(this: HTMLLIElement){
        //         let listItem = this.parentNode as HTMLLIElement;
        //
        //         const deleteBtn = document.createElement("button");
        //         deleteBtn.innerText ="Delete";
        //         deleteBtn.className = "delete";
        //         listItem!.appendChild(deleteBtn);
        //
        //         const checkBox = listItem!.querySelector("input[type=checkbox]");
        //         checkBox!.remove();
        //
        //         completeUl.appendChild(listItem as HTMLLIElement);
        //
        //
        //         bindCompleteItems(listItem, deleteTask as () => {});
        //
        //     }
        //
        //     function deleteTask(this:HTMLLIElement){
        //
        //         const listItem = this.parentNode as HTMLLIElement;
        //         console.log(listItem)
        //         const ul = listItem!.parentNode;
        //
        //         ul!.removeChild(listItem as HTMLLIElement);
        //
        //     }
        //
        //     function bindIncompleteItems(taskItem: Element, checkBoxClick: (this: GlobalEventHandlers) => void){
        //         const checkBox = taskItem.querySelector("input[type=checkbox]") as HTMLInputElement;
        //
        //         checkBox.onchange = checkBoxClick;
        //     }
        //
        //     const bindCompleteItems = function (taskItem: Element, deleteButtonPress: (this: GlobalEventHandlers) => void){
        //         const deleteButton = taskItem.querySelector(".delete") as HTMLButtonElement;
        //         deleteButton.onclick = deleteButtonPress;
        //
        //     };
        //
        //
        //     for(let i=0; i < toDoUl.children.length; i++) {
        //         bindIncompleteItems(toDoUl.children[i], completeTask as () => {});
        //     }
        //
        //     for(let i=0; i < completeUl.children.length; i++) {
        //         bindCompleteItems(completeUl.children[i], deleteTask as () =>{});
        //     }
        //
        //
        //     addTaskBtn.addEventListener("click", addTask);
        //
        // }
    };
    return TodoApp;
}());
exports["default"] = TodoApp;
