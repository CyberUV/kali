document.addEventListener('DOMContentLoaded', (event) => {
    var video = document.getElementById('myVideo');
    video.playbackRate = 4.0;
});


const videoContainer = document.getElementById('terminal_win3');
const resizer3 = document.getElementById('resizer3');

let isDragging = false;
let isResizing = false;
let containerRect, startX, startY, startWidth, startHeight;

// Aspect ratio
const aspectRatio = 16 / 9;

// Dragging functionality
videoContainer.addEventListener('mousedown', (e) => {
    if (e.target === resizer3) return; // Prevent dragging when resizing

    isDragging = true;
    containerRect = videoContainer.getBoundingClientRect();
    startX = e.clientX - containerRect.left;
    startY = e.clientY - containerRect.top;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
});

function drag(e) {
    if (!isDragging) return;

    videoContainer.style.left = `${e.clientX - startX}px`;
    videoContainer.style.top = `${e.clientY - startY}px`;
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}


// document.getElementById('main_ter3').addEventListener('click', function() {
//     document.getElementById('terminal_win3').style.display = 'block';
// });
// document.getElementById('header_ter_icon').addEventListener('click', function() {
//     document.getElementById('terminal_win3').style.display = 'block';
// });
document.getElementById('close3').addEventListener('click', function() {
    // document.getElementById('terminal_win3').style.width= "350px";
    // document.getElementById('terminal_win3').style.height = '80px';
    document.getElementById('terminal_win3').style.display = 'none';

});
document.getElementById('minimize3').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win3');
    let firefox_header = document.getElementById('firefox_header');
    let close3 = document.getElementById('close3');
    let maximize3 = document.getElementById('maximize3');
    let minimize3 = document.getElementById('minimize3');
    // firefox_header.style.background = '#21232cd2';
    windowElement.style.height = '80px';
    windowElement.style.width = '350px';
    // minimize3.style.background = '#2f3340';
    // maximize3.style.background = '#2f3340';
    // close3.style.background = 'red';
    // minimize3.style.color = 'white';
    // maximize3.style.color = 'white';
    // close3.style.color = 'white';

});
document.getElementById('maximize3').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win3');
    let maximize3 = document.getElementById('maximize3');
    let minimize3 = document.getElementById('minimize3');
    let close3 = document.getElementById('close3');
    if (windowElement.style.width === '1100px' && windowElement.style.height === '696px') {
        windowElement.style.width = '702px';
        windowElement.style.height = '444px';
        windowElement.style.top = '50px';
        windowElement.style.left = '50px';

    } else {
        windowElement.style.width = '1100px';
        windowElement.style.height = '696px';
        windowElement.style.top = '15px';
        windowElement.style.left = '15px';
        // maximize3.style.width = '45px';
        // maximize3.style.height = '51px';
        // minimize3.style.width = '45px';
        // minimize3.style.height = '51px';
        // close3.style.width = '45px';
        // close3.style.height = '51px';
    }
});

// width: 45px;
//   height: 51px;

const main_ter5 = document.getElementById('main_ter5');
const root_ter_icon = document.getElementById('root_ter_icon');
const kali_sub = document.getElementById('authenticate');

root_ter_icon.addEventListener('click', function () {
    auth_fun();
})

document.getElementById('main_ter5').addEventListener('click', function() {
    auth_fun();
});

document.getElementById('close5').addEventListener('click', function() {
    document.getElementById('terminal_win5').style.display = 'none';
});
document.getElementById('close6').addEventListener('click', function() {
    document.getElementById('lock_div').style.display = 'none';
    const kali_pass = document.getElementById('kali_pass');
    const wrong_pass = document.getElementById('wrong_pass');
    kali_pass.value = '';
    wrong_pass.style.display = 'none';
})


const auth_fun = function(){
    document.getElementById('lock_div').style.display = 'flex';
    document.getElementById('authenticate').addEventListener('click', function(){
        const kali_pass = document.getElementById('kali_pass').value;
        const wrong_pass = document.getElementById('wrong_pass');
        const lock_div = document.getElementById('lock_div');
    
        if(kali_pass == 'kali' || kali_pass == "Kali" || kali_pass == 'cyberuv' ) {
            lock_div.style.display = 'none';
            document.getElementById('terminal_win5').style.display = 'block';
        }
        else {
            wrong_pass.style.display = 'block';
            document.getElementById('kali_pass').value = '';
        }
    
    });
};