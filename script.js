let todoList = document.querySelector(".to_do");
let ipList = document.querySelector(".in_progress");
let doneList = document.querySelector(".done");
let todoWrap = document.querySelector(".todo_wrap");
let ipWrap = document.querySelector(".ip_wrap");
let doneWrap = document.querySelector(".done_wrap");
let lists = document.querySelectorAll(".list");
let addTodoBtn = document.querySelector(".add_todo");
let addIpBtn = document.querySelector(".add_ip");
let addDoneBtn = document.querySelector(".add_done");

console.log(lists);
addTodoBtn.addEventListener("click", () => {
  let newList = document.createElement("div");
  newList.className = "list";
  newList.innerText = "New Todo";
  todoWrap.appendChild(newList);
  

  newList.addEventListener("drag",  (e) =>{
    let selected = e.target;
    e.target.className = "selected";
    ipWrap.addEventListener("dragover",  (e)=> {
      e.preventDefault();
    });
    ipWrap.addEventListener("drop", (e)=> {

      ipWrap.appendChild(selected);
      selected = null;
    });

    doneWrap.addEventListener("dragover", (e)=> {
      e.preventDefault();
    });
    doneWrap.addEventListener("drop", (e)=> {
      doneWrap.appendChild(selected);
      selected = null;
    });
  });
});

addIpBtn.addEventListener("click", () => {
  let newList = document.createElement("div");
  newList.className = "list";
  newList.innerText = "New IP";
  ipWrap.appendChild(newList);
  
  newList.addEventListener("drag",  (e) =>{
    let selected = e.target;
    e.target.className = "selected";
    todoWrap.addEventListener("dragover", (e)=> {
        e.preventDefault();
      });
      todoWrap.addEventListener("drop",  (e)=> {
        todoWrap.appendChild(selected);
        selected = null;
      });
    doneWrap.addEventListener("dragover", (e)=> {
      e.preventDefault();
    });
    doneWrap.addEventListener("drop", (e)=> {
      doneWrap.appendChild(selected);
      selected = null;
    });
  });

});

addDoneBtn.addEventListener("click", () => {
  let newList = document.createElement("div");
  newList.className = "list";
  newList.innerText = "New done list";
  doneWrap.appendChild(newList);
  
  newList.addEventListener("drag",  (e) =>{
    let selected = e.target;
    e.target.className = "selected";
    todoWrap.addEventListener("dragover", (e)=> {
        e.preventDefault();
      });
      todoWrap.addEventListener("drop",  (e)=> {
        todoWrap.appendChild(selected);
        selected = null;
      });
    ipWrap.addEventListener("dragover",  (e)=> {
      e.preventDefault();
    });
    ipWrap.addEventListener("drop", (e)=> {

      ipWrap.appendChild(selected);
      selected = null;
    });
  });

});

lists.forEach((list) => {
  list.addEventListener("drag",  (e) =>{
    let selected = e.target;
    e.target.className = "selected";
    // list.classList.add = "selected";
    todoWrap.addEventListener("dragover", (e)=> {
        e.preventDefault();
      });
      todoWrap.addEventListener("drop",  (e)=> {
        todoWrap.appendChild(selected);
        selected = null;
      });
    ipWrap.addEventListener("dragover",  (e)=> {
      e.preventDefault();
    });
    ipWrap.addEventListener("drop", (e)=> {

      ipWrap.appendChild(selected);
      selected = null;
    });

    doneWrap.addEventListener("dragover", (e)=> {
      e.preventDefault();
    });
    doneWrap.addEventListener("drop", (e)=> {
      doneWrap.appendChild(selected);
      selected = null;
    });
  });
});
