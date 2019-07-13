new fullpage('#fullpage', {

    anchors: ['stageWelcome', 'stageGamedev', 'stageAppdev', 'stageContact'],
    //sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],

    // Change letterbox color on transition
    onLeave: function (origin, destination, direction) {
    

        // Welcome
        if (destination.index === 0) {
            document.getElementById("header-letterbox").style.backgroundColor = "#282828";
        }

        // Gamedev
        if (destination.index === 1) {
            document.getElementById("header-letterbox").style.backgroundColor = "#28814d";
        }

        // Appdev
        if (destination.index === 2) {
            document.getElementById("header-letterbox").style.backgroundColor = "#e77e22";
        }

        // Contact
        if (destination.index === 3) {
            document.getElementById("header-letterbox").style.backgroundColor = "#9a59b5";
        }
    },
});


// Navigation Listeners
let btnWelcome = document.getElementById("btn-welcome");
let btnGamedev = document.getElementById("btn-gamedev");


// Add Listeners
btnWelcome.addEventListener('click', function () {
    fullpage_api.moveSectionDown();
});

btnGamedev.addEventListener('click', function () {
    fullpage_api.moveSectionDown();
});
