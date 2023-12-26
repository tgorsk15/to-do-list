import { Task  } from "./object.js";
// import { linkForm } from "./userform.js";
// import { contentContainer, projectContainer, taskBreakContainer, toDoStructure } from "./structure";
import { contentContainer, projectContainer, taskBreakContainer, deleteTaskButton } from './structure.js';


export function createTask(title, descript, due, importance, checklist) {
    // this should take the user inputs from the <form> and fill them 
    // into the newly created "task article" on the page. 

    // should create a NEW instance of Task to create a new object
    // maybe outsource this to a new factory function
    
    // The entire article should be appended to the page

    const task = new Task(title, descript, due, importance, checklist);

    console.log(task);

    console.log(title)
    createTaskArticle(task)

    
    console.log(Task);
    console.log(taskBreakContainer);

    return {task}

}


function createTaskArticle(task) {
// each article will have a title and a description on the left hand
// side. The rught side will contain importance, due date, a delete
// button, and an arrow (bottom right) to extend task article to show
// a checklist or more description
    console.log(task.name)

    const taskArticle = document.createElement('div');
    articleFactory.addToArticle(taskArticle, 'task-article', taskBreakContainer);

    // create two inner div containers:
    const taskSpace1 = document.createElement('div');
    articleFactory.addToArticle(taskSpace1, 'task-space1', taskArticle);

    const taskSpace2 = document.createElement('div');
    articleFactory.addToArticle(taskSpace2, 'task-space2', taskArticle);


    // fill taskSpace1:
    const taskTitle2 = document.createElement('h1');
    articleFactory.addToArticle(taskTitle2, 'task-title2', taskSpace1);
    taskTitle2.textContent = task.name;

    const taskDescription2 = document.createElement('div')
    articleFactory.addToArticle(taskDescription2, 'description2', taskSpace1);
    taskDescription2.textContent = task.description;


    // fill taskSpace2:
    const deleteTaskButton = document.createElement('button');
    articleFactory.addToArticle(deleteTaskButton, 'delete-task', taskSpace2);
    deleteTaskButton.textContent = 'X';

    const priority = document.createElement('div');
    articleFactory.addToArticle(priority,'importance2', taskSpace2);
    priority.textContent = task.importance;

    const dueDate2 = document.createElement('div');
    articleFactory.addToArticle(dueDate2,'due-date2', taskSpace2);
    dueDate2.textContent = `Due: ${task.dueDate}`;

    // drop down function
    const dropDownTask = document.createElement('button');
    articleFactory.addToArticle(dropDownTask, 'drop-down-task', taskSpace2)
    dropDownTask.textContent = '^'
    taskDropLogic(dropDownTask)
}



const articleFactory = (function () {

    function addToArticle(elementName, className, fatherElement ) {
            elementName.classList.add(className);
            fatherElement.appendChild(elementName);
    
            return elementName;
        };
    return {addToArticle};

})();


function taskDropLogic(dropButton) {
    dropButton.addEventListener('click', () => {
        console.log('drop down work');
    })

}