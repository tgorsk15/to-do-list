import { projectsContainer, MainBreakoutContainer } from "./index.js";


// in charge of creating a new container each time a project
// is created
export const projectController = function () {
    // all task titles should be added before this button
    // const addTaskButton = document.createElement('button')
    const projectContainer = document.createElement('div');

    let taskBreakoutCounter = 0;
    let taskBreakoutArray = [];

    function createProjectContainer() {
        
        projectFactory.addToProjectBar(projectContainer, 'project-cont', projectsContainer);
        console.log('added project container')

        const projectTitle = document.createElement('h2')
        projectFactory.addToProjectBar(projectTitle, 'project-title', projectContainer);
        
        projectTitle.textContent = 'New Project';
        projectTitle.contentEditable = "true";

        
        appendTaskButton(projectContainer);


    }



    function createTaskBreakout() {
        

        const taskBreakoutInstance = document.createElement('div');
        taskBreakoutArray.push(taskBreakoutInstance);
        console.log(taskBreakoutArray);

        projectFactory.addToProjectBar(taskBreakoutInstance, `task-break-instance${taskBreakoutCounter}`, MainBreakoutContainer);
        console.log('new task break container created');
        console.log(taskBreakoutInstance);

        const correctBreakoutInstance = taskBreakoutArray[taskBreakoutCounter];

        taskBreakoutCounter ++;

        return correctBreakoutInstance
    }



     // adds taskTitle to projectBar
    const appendTaskTitle = function (taskTitle2, taskTitleContent, taskTitleContainer) {
        // const taskTitleContainer = document.createElement('div');


        projectFactory.addToProjectBar(taskTitleContainer, 'task-title-container', projectContainer);
        taskTitleContainer.textContent = taskTitleContent;
        console.log('task title added');


        // ensure that task titles match whenever a change is made
        taskTitle2.addEventListener('blur', () => {
            console.log(taskTitle2);
            console.log(taskTitleContainer);
            const newTaskTitle = taskTitle2.textContent;
            console.log(newTaskTitle);
            taskTitleContainer.textContent = newTaskTitle;
            console.log('has been blurred')
        })


    };



    function appendTaskButton(projectContainer) {
        const addTaskButton = document.createElement('button')
        projectFactory.addToProjectBar(addTaskButton, 'add-task-button', projectContainer);
        addTaskButton.textContent = '+';

        addTaskButton.addEventListener('click', () => {
            modifyTaskForm.toggleTaskForm()
        })

    }


    return {createProjectContainer, appendTaskTitle, createTaskBreakout}

    
    
}



const taskFormContainer = document.querySelector('.task-form-container');

export const modifyTaskForm = (function () {
    console.log('toggle ran');

    function toggleTaskForm() {

        if (taskFormContainer.classList.contains('task-form-container-active')) {
            console.log('removing active');
            taskFormContainer.classList.remove('task-form-container-active');
            taskFormContainer.classList.add('task-form-container');
            return
        } else if (!taskFormContainer.classList.contains('.task-form-container-active')) {
            console.log('does not have, adding now');
            taskFormContainer.classList.remove('task-form-container');
            taskFormContainer.classList.add('task-form-container-active');
        };
    }

    function clearTaskForm() {
        console.log('form cleared');
    }

    return {toggleTaskForm, clearTaskForm}
    
})();



const projectFactory = (function () {

    function addToProjectBar(elementName, className, fatherElement ) {
            elementName.classList.add(className);
            fatherElement.appendChild(elementName);
    
            return elementName;
        };
    return {addToProjectBar};

})();