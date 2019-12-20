import '../styles/todo.css'

export default class TodoApp {
    render() {
        const root = document.querySelector('#root');
        root!.innerHTML = `
<div class="dark" id="dark"></div>
    <div class="burger-icon" id="burger">
      <div class="burger-line"></div>
    </div>
    <header id="header">
      <div class="navbar" id="navbar">
        <div class="all-items">
          <div class="item homePage">HOME PAGE</div>
          <div class="item TodoApp active">PLAN YOUR VISIT</div>
          <div class="item eventPage">Events</div>
          <div class="item support">SUPPORT US</div>
          <div class="item aboutPage">ABOUT US</div>
          <div class="item adminPage">ADMIN PAGE</div>
        </div>
      </div>
    </header>
        <section class="container-todo">
              <h1>Plan Your Visit</h1>
              
              <div class="new-task-container box">
              
              <label for="new-task">Add New Task:</label>
              <input type="text" id="new-task">
                <button id="addTask">Add Task</button>
              
              </div>
              
              <div class="todo-list box">
              
                <h2>Incomplete Tasks</h2>
                <ul>
                </ul>
              
              </div><!--/todo-list-->
              
              <div class="complete-list box">
                
                <h2>Completed Tasks</h2>
                <ul>
                </ul>
                
                
              </div>
             
        </section>
        `;

        const newTask = document.querySelector('#new-task') as HTMLInputElement;
        const addTaskBtn = document.querySelector('#addTask') as HTMLButtonElement;

        const toDoUl = document.querySelector(".todo-list ul") as HTMLLIElement;
        const completeUl =  document.querySelector(".complete-list ul") as HTMLLIElement;


        function createNewTask(task:string){
            const listItem = document.createElement("li") as HTMLLIElement;
            const checkBox = document.createElement("input")  as HTMLInputElement;
            const label = document.createElement("label") as HTMLLabelElement;
            label.innerText = <string>localStorage.getItem(task);
            listItem.id = task;
            checkBox.type = "checkbox";
            listItem.appendChild(checkBox);
            listItem.appendChild(label);
            return listItem;
        }

        function addTask(){
            if (newTask.value) {
                localStorage.setItem(newTask.value, newTask.value);
                const listItem = createNewTask(newTask.value);
                toDoUl.appendChild(listItem);
                newTask.value="";
                bindIncompleteItems(listItem, completeTask as () => {});
            }

        }

        function completeTask(this: HTMLLIElement){
            let listItem = this.parentNode as HTMLLIElement;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText ="Delete";
            deleteBtn.className = "delete";
            listItem!.appendChild(deleteBtn);

            const checkBox = listItem!.querySelector("input[type=checkbox]");
            checkBox!.remove();

            completeUl.appendChild(listItem as HTMLLIElement);


            bindCompleteItems(listItem, deleteTask as () => {});

        }

        function deleteTask(this:HTMLLIElement){

            const listItem = this.parentNode as HTMLLIElement;
            console.log(listItem)
            const ul = listItem!.parentNode;

            ul!.removeChild(listItem as HTMLLIElement);

        }

        function bindIncompleteItems(taskItem: Element, checkBoxClick: (this: GlobalEventHandlers) => void){
            const checkBox = taskItem.querySelector("input[type=checkbox]") as HTMLInputElement;

            checkBox.onchange = checkBoxClick;
        }

        const bindCompleteItems = function (taskItem: Element, deleteButtonPress: (this: GlobalEventHandlers) => void){
            const deleteButton = taskItem.querySelector(".delete") as HTMLButtonElement;
            deleteButton.onclick = deleteButtonPress;

        };


        for(let i=0; i < toDoUl.children.length; i++) {
            bindIncompleteItems(toDoUl.children[i], completeTask as () => {});
        }

        for(let i=0; i < completeUl.children.length; i++) {
            bindCompleteItems(completeUl.children[i], deleteTask as () =>{});
        }


        addTaskBtn.addEventListener("click", addTask);

    }



}