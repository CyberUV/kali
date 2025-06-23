const typingSpeed = 20; // Initial typing speed in milliseconds
let currentIndex = 0;
let currentIndex2 = 0;
let interval1;
let interval2;
const root_kali = document.getElementById('root_kali');
const codeDisplay = document.getElementById('code_area');
const root_kali2 = document.getElementById('root_kali2');
const codeDisplay2 = document.getElementById('code_area2');

function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}

document.addEventListener('keydown', () => {
    let chk_ter = document.getElementById('terminal_win').style.display;
    let chk_ter2 = document.getElementById('terminal_win2').style.display;

    if (currentIndex != 1989 && window.part_of_hacking.length === 0) {
        // Typing in terminal 1
        if (window.terminal_win_click > 0 && chk_ter == "block" && !interval1) {
            interval1 = setInterval(() => {
                if (currentIndex < command1.length) {
                    root_kali.innerHTML += command1[currentIndex];
                    currentIndex++;
                } else if (currentIndex < code.length) {
                    codeDisplay.textContent += code[currentIndex];
                    currentIndex++;
                    scrollToBottom(codeDisplay);
                    if (currentIndex == 1989) {
                        window.part_of_hacking.push(1);
                        document.getElementById('code_area4').innerHTML += '                        <li class="todo_line">Finally Payload is done. Lets start <font color="#0f0">automatic osint</font> payload in  <font color="#0f0">Payload Exicution Terminal</font> </li>';
                        next_todo();
                        clearInterval(interval1);
                        interval1 = null;
                    }
                } else {
                    clearInterval(interval1);
                    interval1 = null;
                }
            }, 1);
        }
    } else if (window.part_of_hacking.length === 1) {
        // Typing in terminal 2
        if (window.terminal_win2_click > 0 && chk_ter2 == "block" && !interval2) {
            interval2 = setInterval(() => {
                if (currentIndex2 < command2.length) {
                    root_kali2.innerHTML += command2[currentIndex2];
                    currentIndex2++;
                    document.getElementById('terminal_win3').style.display = 'block';
                    var video = document.getElementById('myVideo');
                    video.play()
                    video.playbackRate = 4.0;
                } else if (currentIndex2 < code2.length) {
                    codeDisplay2.textContent += code2[currentIndex2];
                    currentIndex2++;
                    scrollToBottom(codeDisplay2);
                    if (currentIndex2 == 841) {
                        window.part_of_hacking.push(2);

                        document.getElementById('code_area4').innerHTML += '                        <li class="todo_line">Oh nice he also a <font color="#0f0"> hacker </font>. Lets Exploit its</li>';
   //////////////           here i can define next task           
                        next_todo();
            /////////////////////////
                        clearInterval(interval2);
                        interval2 = null;
                    }
                } else {
                    clearInterval(interval2);
                    interval2 = null;
                }
            }, 50);
        }
    }
});

function next_todo() {
    if (window.part_of_hacking.length == 1) {
        var main_ter = document.getElementById('main_ter');
        // main_ter.style.display = 'none';
        var main_ter2 = document.getElementById("main_ter2");
        main_ter2.style.display = 'block';
    }
}
