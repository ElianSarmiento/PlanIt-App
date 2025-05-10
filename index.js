addEventListener('DOMContentLoaded', () => {

    // upon load, info text should not show up

    const info = document.getElementById('info');
    const infoButton = document.getElementById('info-button')

    // for the info link, when a user clicks on it, it will reveal the text contents.
    const infoText = document.createElement('p')
    infoText.classList.add('info-text');
    infoText.innerHTML = "PlanIt is your digital notebook for organizing daily tasks. Categorize, prioritize, and get things done with ease — all in one clean, focused space. <br> Whether you're planning your week or jotting down last-minute errands, PlanIt keeps everything in one place so you can stay on track.";
    info.appendChild(infoText);

    infoButton.addEventListener('click', () => {
        event.preventDefault();
        // add logic for the button click event
    })

});

