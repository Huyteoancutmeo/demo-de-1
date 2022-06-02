var display = true;

function showMenu() {
    if(display) {
        document.getElementById("toggle-menu").style.visibility = "visible";
        display = false;
    }
    else {
        document.getElementById("toggle-menu").style.visibility = "hidden";
        display= true;
    }
}