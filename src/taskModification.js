import {articleFactory} from "./objectCreator.js"

export function createPriorityBar(priorityLevel, priorityBar, taskDropContainer) {
    const prioritySelect = document.getElementById('importance');
    console.log(prioritySelect);

    const priorityTitle = document.createElement('label')
    articleFactory.addToArticle(priorityTitle,'priority-title', taskDropContainer);
    priorityTitle.textContent = 'Priority Level:'


    for (let i = 0; i < 5; i++) {
        const priorityOption = prioritySelect.options[i];
        // console.log(priorityOption);
        //create button for each option
        const priorityButton = document.createElement('input');
        priorityButton.type = 'radio';
        priorityButton.name = priorityLevel;

        // create label for each option
        const priorityButtonLabel = document.createElement('label');
        priorityButtonLabel.textContent = prioritySelect.options[i].value;
        articleFactory.addToArticle(priorityButtonLabel,'priority-button-label', priorityBar);

        if (priorityOption.value === priorityLevel) {
            priorityButton.checked = true;
            console.log(priorityButton);
        }

        articleFactory.addToArticle(priorityButton,'priority-button', priorityBar);
    }



}


export function taskDropLogic(dropButton, dropContainer, titleTest) {
    dropButton.addEventListener('click', () => {
        console.log('drop down work');
        console.log(titleTest);

        if (dropContainer.classList.contains('taskDrop-container')) {
            dropContainer.classList.remove('taskDrop-container');
            dropContainer.classList.add('taskDrop-container-active');
        } else if (dropContainer.classList.contains('taskDrop-container-active')) {
            dropContainer.classList.remove('taskDrop-container-active');
            dropContainer.classList.add('taskDrop-container');
        }
    })

}



export function createTaskContainer() {
    const taskBreakContainer = document.createElement('div');
    // create new container
    // pass in the container as an arguement to the 
    // createTask() addEventListener function
    // ... this way each aticle has to get added to that 
    // specific container
    toggleTaskForm();
    
}