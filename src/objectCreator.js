import { Task  } from "./object.js";
import { linkForm } from "./userform.js";
// import { contentContainer, projectContainer, taskBreakContainer, toDoStructure } from "./structure";
import { contentContainer, projectContainer, taskBreakContainer } from './structure.js';


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


    // const testTitle = title;
    // console.log(testTitle);
    
    console.log(Task);
    console.log(taskBreakContainer);

}


function createTaskArticle(task) {
// each article will have a title and a description on the left hand
// side. The rught side will contain importance, due date, and a 
// delete button

    const taskArticle = document.createElement('div');
    articleFactory.addToArticle(taskArticle, 'task-article', taskBreakContainer);

    // create two inner div containers:
    const taskSpace1 = document.createElement('div');
    taskSpace1.classList.add('task-space1');
    taskArticle.appendChild(taskSpace1);

    const taskSpace2 = document.createElement('div');
    taskSpace2.classList.add('task-space2');
    taskArticle.appendChild(taskSpace2);
}

const articleFactory = (function () {

    function addToArticle(elementName, className, fatherElement ) {
            elementName.classList.add(className);
            fatherElement.appendChild(elementName);
    
            return elementName;
        };
    return {addToArticle};

})();