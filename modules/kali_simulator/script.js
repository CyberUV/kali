
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    if(h == 0){
        h = 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 60000);
}

showTime();

// Working with first terminal

document.getElementById('main_ter').addEventListener('click', function() {
    document.getElementById('terminal_win').style.display = 'block';
});
document.getElementById('header_ter_icon').addEventListener('click', function() {
    document.getElementById('terminal_win').style.display = 'block';
});
document.getElementById('close').addEventListener('click', function() {
    document.getElementById('terminal_win').style.display = 'none';
});
document.getElementById('minimize').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win');
    windowElement.style.height = '80px';
    windowElement.style.width = '350px';
});
document.getElementById('maximize').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win');
    if (windowElement.style.width === '91%' && windowElement.style.height === '91%') {
        windowElement.style.width = '40%';
        windowElement.style.height = '40%';
        windowElement.style.top = '50px';
        windowElement.style.left = '50px';
    } else {
        windowElement.style.width = '91%';
        windowElement.style.height = '91%';
        windowElement.style.top = '37px';
        windowElement.style.left = '17px';
    }
});

// Working with terminal 2

document.getElementById('main_ter2').addEventListener('click', function() {
    document.getElementById('terminal_win2').style.display = 'block';
});
document.getElementById('close2').addEventListener('click', function() {
    document.getElementById('terminal_win2').style.display = 'none';
});
document.getElementById('minimize2').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win2');
    windowElement.style.height = '80px';
    windowElement.style.width = '350px';
});
document.getElementById('maximize2').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win2');
    if (windowElement.style.width === '91%' && windowElement.style.height === '91%') {
        windowElement.style.width = '40%';
        windowElement.style.height = '40%';
        windowElement.style.top = '340px';
        windowElement.style.left = '45px';
    } else {
        windowElement.style.width = '91%';
        windowElement.style.height = '91%';
        windowElement.style.top = '37px';
        windowElement.style.left = '17px';
    }
});

// Working with terminal 5


document.getElementById('close5').addEventListener('click', function() {
    document.getElementById('terminal_win5').style.display = 'none';
});
document.getElementById('minimize5').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win5');
    windowElement.style.height = '80px';
    windowElement.style.width = '350px';
});
document.getElementById('maximize5').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win5');
    if (windowElement.style.width === '91%' && windowElement.style.height === '91%') {
        windowElement.style.width = '40%';
        windowElement.style.height = '40%';
        windowElement.style.top = '340px';
        windowElement.style.left = '45px';
    } else {
        windowElement.style.width = '91%';
        windowElement.style.height = '91%';
        windowElement.style.top = '37px';
        windowElement.style.left = '17px';
    }
});

// Working with terminal 8

document.getElementById('main_ter3').addEventListener('click', function() {
    document.getElementById('terminal_win8').style.display = 'block';
});
document.getElementById('main_ter3_icon').addEventListener('click', function() {
    document.getElementById('terminal_win8').style.display = 'block';
});
document.getElementById('close8').addEventListener('click', function() {
    document.getElementById('terminal_win8').style.display = 'none';
});
document.getElementById('minimize8').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win8');
    windowElement.style.height = '250px';
    windowElement.style.width = '400px';
});
document.getElementById('maximize8').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win8');
    if (windowElement.style.width === '95%' && windowElement.style.height === '95%') {
        windowElement.style.height = '250px';
        windowElement.style.width = '400px';
        windowElement.style.top = '25px';
        windowElement.style.left = '45px';
    } else {
        windowElement.style.width = '95%';
        windowElement.style.height = '95%';
        windowElement.style.top = '37px';
        windowElement.style.left = '17px';
    }
});

// Object repositioning

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Add event listeners for headers
    if (elmnt.querySelector(".win_header")) {
        elmnt.querySelector(".win_header").onmousedown = dragMouseDown;
    } else if (elmnt.querySelector(".win_header2")) {
        elmnt.querySelector(".win_header2").onmousedown = dragMouseDown;
    } else if (elmnt.querySelector(".win_header5")) {
        elmnt.querySelector(".win_header5").onmousedown = dragMouseDown;
    } else if (elmnt.querySelector(".win_header7")) {
        elmnt.querySelector(".win_header7").onmousedown = dragMouseDown;
    } else if (elmnt.querySelector(".win_header8")) {
        elmnt.querySelector(".win_header8").onmousedown = dragMouseDown;
    }

    // Add event listener for the resizer
    if (elmnt.querySelector(".resizer")) {
        elmnt.querySelector(".resizer").onmousedown = resizeMouseDown;
    } else if (elmnt.querySelector(".resizer2")) {
        elmnt.querySelector(".resizer2").onmousedown = resizeMouseDown;
    } else if (elmnt.querySelector(".resizer5")) {
        elmnt.querySelector(".resizer5").onmousedown = resizeMouseDown;
    } else if (elmnt.querySelector(".resizer7")) {
        elmnt.querySelector(".resizer7").onmousedown = resizeMouseDown;
    } else if (elmnt.querySelector(".resizer8")) {
        elmnt.querySelector(".resizer8").onmousedown = resizeMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function resizeMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeResizeElement;
        document.onmousemove = elementResize;
    }

    function elementResize(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.width = (elmnt.offsetWidth - pos1) + "px";
        elmnt.style.height = (elmnt.offsetHeight - pos2) + "px";
    }

    function closeResizeElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

window.onload = function() {
    dragElement(document.getElementById("terminal_win"));
    dragElement(document.getElementById("terminal_win2"));
    dragElement(document.getElementById("terminal_win5"));
    dragElement(document.getElementById("terminal_win7"));
    dragElement(document.getElementById("terminal_win8"));
}


// Onclick window z index is increased by 1
window.terminal_win_click = 0 ;
window.terminal_win2_click = 0 ;
window.terminal_win5_click = 0 ;
window.terminal_win7_click = 0 ;
document.getElementById('terminal_win').addEventListener('click', function() {
    window.terminal_win_click++ ;
});
document.getElementById('terminal_win2').addEventListener('click', function() {
    window.terminal_win2_click++ ;
});
document.getElementById('terminal_win5').addEventListener('click', function() {
    window.terminal_win5_click++ ;
});
document.getElementById('terminal_win7').addEventListener('click', function() {
    window.terminal_win7_click++ ;
});