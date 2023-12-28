import { projectsContainer } from "./index.js";


// in charge of creating a new container each time a project
// is created
export function createProjectContainer() {
    modifyTaskForm.toggleTaskForm();
    const projectContainer = document.createElement('div');
    projectFactory.addToProjectBar(projectContainer, 'project-cont', projectsContainer);
    console.log('added project container')

    const projectTitle = document.createElement('h2')
    projectFactory.addToProjectBar(projectTitle, 'project-title', projectContainer);
    
    projectTitle.textContent = 'New Project';
    projectTitle.contentEditable = "true";
    
    
}



const taskFormContainer = document.querySelector('.task-form-container');

const modifyTaskForm = (function () {
    console.log('toggle ran');

    function toggleTaskForm() {

        if (taskFormContainer.classList.contains('.active')) {
                return
            } else if (!taskFormContainer.classList.contains('.active')) {
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