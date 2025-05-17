addEventListener('DOMContentLoaded', () => {

    // upon load, info text should not show up
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const themeButton = document.getElementById('theme-toggle');
    const taskList = document.getElementById('taskList');
    const info = document.getElementById('info');
    const infoButton = document.getElementById('info-button');
    // const submitButton = document.getElementById('submitButton');
    // for the info link, when a user clicks on it, it will reveal the text contents.
    const infoText = document.createElement('p')
    infoText.classList.add('info-text');
    infoText.innerHTML = "PlanIt is your digital notebook for organizing daily tasks. Categorize, prioritize, and get things done with ease — all in one clean, focused space. <br> Whether you're planning your week or jotting down last-minute errands, PlanIt keeps everything in one place so you can stay on track.";

    function showInfo() {
        if (!document.querySelector('.info-text')) {
            info.appendChild(infoText);

        } else {
            info.removeChild(infoText);
        }
    };

    let infoShown = false;


    infoButton.addEventListener('click', (event) => {
        event.preventDefault();

        showInfo();
    });
    
    themeButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (themeStylesheet.getAttribute('href').includes('light.css')) {
        themeStylesheet.setAttribute('href', '/static/css/dark.css');
    } else {
        themeStylesheet.setAttribute('href', '/static/css/light.css');
    }
});

    // submitButton.addEventListener('click', (event) =>{
    //     event.preventDefault(); // stops page from refreshing page


        // const categoryValue = document.getElementById('category').value;
        // const priorityValue = document.getElementById('priority').value;
        // const taskItem = document.createElement('div');
        // const taskInput = document.getElementById('taskInput');
        // const taskValue = taskInput.value.trim();
        // const capitalizedTask = taskValue
        // .split(' ')
        // .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        // .join(' ');
        // console.log(capitalizedTask);


        // if (taskValue !== ''){
        // taskItem.classList.add('task-item');
        // taskList.appendChild(taskItem);
        //     console.log('Task Submitted', taskValue);

        // taskItem.innerHTML = `
        // <strong>${capitalizedTask}</strong><br>
        // Category: ${categoryValue.toUpperCase()}<br>
        // Priority: ${priorityValue.toUpperCase()}
        // `;
        // } else {
        //     console.log('Please enter a task.');
        // }


    // });

});
