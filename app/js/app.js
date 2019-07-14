new fullpage('#fullpage', {

    // Generate #href-anchors for section navigation
    anchors: ['welcome', 'gamedev', 'appdev', 'contact'],

    // Change letterbox color on transition
    onLeave: function (origin, destination, direction) {

        // Load Array of BG choices
        let headerArray = ['#282828', '#28814d', '#e77e22', '#9a59b5',];

        // Assign new color based on section index
        document.getElementById("header-letterbox").style.backgroundColor = headerArray[destination.index];

    },
});

// Section buttons
let btnWelcome = document.getElementById("btn-welcome");
let btnGamedev = document.getElementById("btn-gamedev");
let btnAppdev  = document.getElementById("btn-appdev");

// Add Listeners to section buttons
btnWelcome.addEventListener('click', function () {
    fullpage_api.moveSectionDown();
});

btnGamedev.addEventListener('click', function () {
    fullpage_api.moveSectionDown();
});

btnAppdev.addEventListener('click', function () {
    fullpage_api.moveSectionDown();
});