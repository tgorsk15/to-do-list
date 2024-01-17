
import { projectsContainer, MainBreakoutContainer, projects } from "./index.js";



export let addButtonArray = [];
export let assignedTask;

export let activeProjectContainer;

let projectContainers = [];

// in charge of creating a new container each time a project
// is created
export const projectController = function () {


    function createProjectContainer(project) {
        const projectIndex = projects.indexOf(project);

        const projectContainer = document.createElement('div');
        projectContainers.push(projectContainer);
        activeProjectContainer = projectContainer;
        const projectContainerIndex = projectContainers.indexOf(projectContainer);
        console.log(projectContainerIndex);


        projectFactory.addToProjectBar(projectContainer, 'project-cont', projectsContainer);
        console.log('added project container')

        const projectTitle = document.createElement('h2')
        projectFactory.addToProjectBar(projectTitle, 'project-title', projectContainer);
        
        projectTitle.textContent = project.name;
        projectTitle.contentEditable = "true";

        // taking away for now
        // const deleteProjectButton = document.createElement('button');
        // projectFactory.addToProjectBar(deleteProjectButton, 'delete-project-button', projectContainer);
        // deleteProjectButton.textContent = 'X';

        
        appendTaskButton(projectContainer);


        projectContainer.addEventListener('click', () => {
            console.log('yas bitch');
            // find matching index in between appendTask buttons and 
            // project containers and then pass that matching
            // number into changeActiveBreakout ... here the display
            // will be set to active
            addButtonArray.forEach(button => {
                if (addButtonArray.indexOf(button) === projectContainerIndex) {
                    console.log('this is it')
                    const breakoutDisplayRun = breakoutController()
                    breakoutDisplayRun.changeActiveBreakout(addButtonArray.indexOf(button))
                    
                    changeProjectDisplay(correctBreakoutInstance);
                };
            });
            
        });

        deleteProjectButton.addEventListener('click', () => {
            console.log('wow it worked!!!!!');
            console.log(addButtonArray);
            console.log(projectContainers);
            console.log(taskBreakoutArray);
            console.log(correctBreakoutArray);
            // need to delete entry in all 4 of the above arrays^
            removeProject(projectContainer, projectsContainer);

            const deleteBreakoutRun = breakoutController();
            // deleteBreakoutRun.changeActiveBreakout(projectContainerIndex);
            
            console.log('changed by delete!')
            deleteBreakoutRun.deleteActiveBreakout(projectContainerIndex);

            //remove from storage
            projects.splice(projectIndex, 1);
            
            localStorage.setItem('projects', JSON.stringify(projects));
            console.log(projects);
        });
        
    };




    // adds taskTitle to projectBar
    const appendTaskTitle = function (taskTitle2, taskTitleContent, taskTitleContainer, pageLoad, assignedProject) {

        if (pageLoad === true) {
            projectContainers.forEach(sideBar => {
                if (projectContainers.indexOf(sideBar) === assignedProject) {
                    projectFactory.addToProjectBar(taskTitleContainer, 'task-title-container', sideBar);
                    taskTitleContainer.textContent = taskTitleContent;
                };
            });
        } else {

            projectFactory.addToProjectBar(taskTitleContainer, 'task-title-container', activeProjectContainer);
            taskTitleContainer.textContent = taskTitleContent;
            console.log('task title added');

        };

        // ensure that task titles match whenever a change is made
        taskTitle2.addEventListener('blur', () => {

            const newTaskTitle = taskTitle2.textContent;
            
            taskTitleContainer.textContent = newTaskTitle;
            console.log('has been blurred')
        });


    };

    
    function removeProject(projectContainer, projectsContainer) {
        projectsContainer.removeChild(projectContainer);

    }

    const removeTaskTitle = function (taskTitleContainer) {
        console.log('removed');
        taskTitleContainer.remove();

    }



    function appendTaskButton(projectContainer) {

        const addTaskButton = document.createElement('button')
        addButtonArray.push(addTaskButton);
        console.log(addButtonArray);
        projectFactory.addToProjectBar(addTaskButton, 'add-task-button', projectContainer);
        
        addTaskButton.textContent = '+';

        const emptyRun = breakoutController();


        addTaskButton.addEventListener('click', () => {
            modifyTaskForm.toggleTaskForm()

            changeActiveProject(projectContainer);


            emptyRun.changeActiveBreakout(addButtonArray.indexOf(addTaskButton));

            assignedTask = addButtonArray.indexOf(addTaskButton)
            console.log(assignedTask);
        })

    }



    function changeActiveProject(projectContainer) {
        activeProjectContainer = projectContainer;
        console.log(activeProjectContainer);
        return activeProjectContainer;
    }


    return {createProjectContainer, appendTaskTitle, 
        changeActiveProject, removeProject, removeTaskTitle}

    
    
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

            // disabled background
            console.log('has been disabled');
            MainBreakoutContainer.style.pointerEvents = "none"
            projectsContainer.style.pointerEvents = "none"
        };
    }

    function clearTaskForm() {
        console.log('form cleared');
    }

    return {toggleTaskForm, clearTaskForm}
    
})();








let taskBreakoutCounter = 0;
let taskBreakoutArray = [];

export let correctBreakoutArray = [];
export let correctBreakoutInstance;


export const breakoutController = function () {

    function createTaskBreakout(createIsTrue) {

   
        console.log(createIsTrue);

        if (createIsTrue === true ) {

            const taskBreakoutInstance = document.createElement('div');
            taskBreakoutArray.push(taskBreakoutInstance);
            console.log(taskBreakoutArray);

            projectFactory.addToProjectBar(taskBreakoutInstance, `task-break-instance${taskBreakoutCounter}`, MainBreakoutContainer);
            console.log('new task break container created');
            console.log(taskBreakoutInstance);

            correctBreakoutInstance = taskBreakoutArray[taskBreakoutCounter];
            // correctBreakoutInstance = taskBreakoutInstance;
            correctBreakoutArray.push(correctBreakoutInstance);

            taskBreakoutCounter ++;

            return correctBreakoutInstance

        }


        return correctBreakoutInstance

    }



    function changeActiveBreakout(activeTaskButton) {
        console.log(activeTaskButton);
        correctBreakoutInstance = taskBreakoutArray[activeTaskButton];

        console.log(correctBreakoutInstance);
        console.log('breakout has changed');

        return {correctBreakoutInstance}
    };



    function deleteActiveBreakout(projectContainerIndex) {
        console.log(correctBreakoutInstance);
        // MainBreakoutContainer.removeChild(correctBreakoutInstance);

        // delete memory of breakoutContainer
        correctBreakoutArray.forEach(breakout => {
            console.log(projectContainerIndex);
            if (correctBreakoutArray.indexOf(breakout) === projectContainerIndex) {
                correctBreakoutArray.splice(breakout, 1);
                console.log(correctBreakoutArray);
            };
        });

        // delete memory of addButton
        addButtonArray.forEach(button => {
            console.log(projectContainerIndex);
            if (addButtonArray.indexOf(button) === projectContainerIndex) {
                addButtonArray.splice(button, 1);
                console.log(addButtonArray);
            };
        });

        // delete memory of projectContainer
        projectContainers.forEach(container => {
            console.log(projectContainerIndex);
            if (projectContainers.indexOf(container) === projectContainerIndex) {
                projectContainers.splice(container, 1);
                console.log(projectContainers);
            };
        });

        // delete memory of task breakout
        taskBreakoutArray.forEach(breakout2 => {
            console.log(projectContainerIndex);
            if (taskBreakoutArray.indexOf(breakout2) === projectContainerIndex) {
                console.log(breakout2);
                MainBreakoutContainer.removeChild(breakout2);
                taskBreakoutArray.splice(breakout2, 1);
                console.log(taskBreakoutArray);
            };
        });

    };


    return {createTaskBreakout, changeActiveBreakout, deleteActiveBreakout}

}

const changeProjectDisplay = function (chosenBreakout) {
    taskBreakoutArray.forEach(container => {
        container.style.display = "none"
    })

    chosenBreakout.style.display = "block"
}




const projectFactory = (function () {

    function addToProjectBar(elementName, className, fatherElement ) {
            elementName.classList.add(className);
            fatherElement.appendChild(elementName);
    
            return elementName;
        };
    return {addToProjectBar};

})();

