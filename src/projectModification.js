
// in charge of creating a new container each time a project
// is created
export function createTaskContainer() {
    const taskBreakContainer = document.createElement('div');
    // create new container
    // pass in the container as an arguement to the 
    // createTask() addEventListener function
    // ... this way each aticle has to get added to that 
    // specific container
    toggleTaskForm();
    
}



const taskFormContainer = document.querySelector('.task-form-container');

function toggleTaskForm () {
    console.log('toggle ran');

    if (taskFormContainer.classList.contains('.active')) {
        return
    } else if (!taskFormContainer.classList.contains('.active')) {
        console.log('does not have, adding now');
        taskFormContainer.classList.remove('task-form-container');
        taskFormContainer.classList.add('task-form-container-active');
    };
}