const toDoform = document.querySelector(".js-toDoForm");
    toDoinput=toDoform.querySelector("input");
    toDoList= document.querySelector(".js-toDoList");

const ToDos_LS = 'toDos';

const toDos=[];
function saveToDos(){
    localStorage.setItem(ToDos_LS,JSON.stringify(toDos));
}
function paintToDo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="X";
    const span = document.createElement("span");
    const newId = toDos.length+1;
    span.innerText=text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoobj={
        text: text,
        id: newId
    }
    toDos.push(toDoobj);
    saveToDos();
}
function handleSubmit(event)
{
    event.preventDefault();
    const currentValue=toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value="";
}
function loadToDos(){
    const loadtodo=localStorage.getItem(ToDos_LS);
    if(loadtodo!==null)
    {
        const parsedToDos = JSON.parse(loadtodo);
        parsedToDos.forEach(function(toDo)
        {
            paintToDo(toDo.text);
        })
    }
 }
function init()
{
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit);
}
init();