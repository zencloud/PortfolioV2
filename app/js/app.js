new fullpage('#fullpage', {
    //sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

let btnWelcome = document.getElementById("btn-welcome");
btnWelcome.addEventListener('click', function() {

    fullpage_api.moveSectionDown();
    
    headerBG = document.getElementById("header-letterbox").style.backgroundColor = "#28814d";

});

// Scroll To Function
function scrollTo(section) {

    switch (section) {
        case 1: 
            fullpage_api.moveTo(section);
            break;
    }
}