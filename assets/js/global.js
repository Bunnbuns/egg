function $(id){  //less typing
    if(id.startsWith(".")){
        return document.getElementsByClassName(id.substring(1));
    }else{
        return document.getElementById(id);
    }
}

// set devMode to false in production //
var devMode = false;

function showHide(id, display){
    $(id).style.display = display;
}

function giveEgg(){
    showHide('eggLoader', 'none');
    $('eggVideo').play();
    setTimeout(function() { showHide('video', 'block'); }, 200);
}

function loadEgg(){
    console.log('giving egg to user');
    showHide('top', 'none');
    showHide('eggTime', '');
    //show loading spinner for about 1 sec
    showHide('eggLoader', 'block');
    setTimeout(function() { giveEgg(); }, 762);
}