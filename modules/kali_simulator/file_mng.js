document.getElementById('close7').addEventListener('click', function() {
    document.getElementById('terminal_win7').style.display = 'none';
});
document.getElementById("main_ter4").addEventListener('click', function (){
    document.getElementById('terminal_win7').style.display = 'block';
})
document.getElementById('minimize7').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win7');
    windowElement.style.height = '50%';
    windowElement.style.width = '35%';
});
document.getElementById('maximize7').addEventListener('click', function() {
    let windowElement = document.getElementById('terminal_win7');
    if (windowElement.style.width === '91%' && windowElement.style.height === '91%') {
        windowElement.style.width = '40%';
        windowElement.style.height = '40%';
        windowElement.style.top = '340px';
        windowElement.style.left = '47px';
    } else {
        windowElement.style.width = '91%';
        windowElement.style.height = '91%';
        windowElement.style.top = '37px';
        windowElement.style.left = '17px';
    }
});


// //////////////////////////// File manager work

const dir_name1 = document.getElementById('dir_name1');
const dir_name2 = document.getElementById('dir_name2');

// const place2 = document.getElementById("place2");

document.getElementById("place2").addEventListener('click', function() {
    dir_name2.innerText = "";
    dir_name1.style.display = 'flex';
    dir_name2.style.display = 'none';
});
document.getElementById("place3").addEventListener('click', function() {
    dir_name2.innerText = "desktop";
    dir_name2.style.display = 'flex';
});
document.getElementById("place4").addEventListener('click', function() {
    dir_name2.innerText = "recent";
    dir_name2.style.display = 'flex';
});
document.getElementById("place5").addEventListener('click', function() {
    dir_name2.innerText = "trash";
    dir_name2.style.display = 'flex';
});
document.getElementById("place6").addEventListener('click', function() {
    dir_name2.innerText = "documents";
    dir_name2.style.display = 'flex';
});
document.getElementById("place7").addEventListener('click', function() {
    dir_name2.innerText = "music";
    dir_name2.style.display = 'flex';
});
document.getElementById("place8").addEventListener('click', function() {
    dir_name2.innerText = "pictures";
    dir_name2.style.display = 'flex';
});
document.getElementById("place9").addEventListener('click', function() {
    dir_name2.innerText = "downloads";
    dir_name2.style.display = 'flex';
});
document.getElementById("place10").addEventListener('click', function() {
    dir_name2.innerText = "";
    dir_name2.style.display = 'none';
    dir_name1.style.display = 'none';
});


document.getElementById('downloadImage').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = this.src;
    link.download = 'my-image.jpg';
    link.click();
});

// //////////////////////////// File manager work





        document.getElementById('close_signout_div').addEventListener('click', function() {
            document.getElementById('signout_div').style.display = "none";
        })
        document.getElementById('win8_shutbtn').addEventListener('click', function () {
            // document.getElementById('signout_div').style.display = "none";
            document.getElementById('log_auth').style.display = 'flex';
            window.location.href = "https://cyberuv.github.io/profile" ;
        })
        document.getElementById('win8_lockbtn').addEventListener('click', function () {
            // window.location.href = "https://cyberuv.github.io/profile" ;
            document.getElementById('log_auth').style.display = 'flex';
            document.getElementById('signout_div').style.display = "none";
        })
        document.getElementById('win8_restartbtn').addEventListener('click', ()=> {
            document.getElementById('loading').style.display = 'flex';
            document.getElementById('signout_div').style.display = "none";
            const bootingText = `
[INFO] Initializing boot sequence...
[INFO] Loading kernel modules...
[INFO] Mounting filesystems...
[INFO] Starting system services...
[INFO] Detecting network interfaces...
[INFO] Configuring IP addresses...
[INFO] Setting up user environment...
[INFO] Starting graphical interface...

Welcome to Kali Linux
`;

            const textElement = document.getElementById('booting-text');
            let index = 0;
        
            function typeBootingText() {
                if (index < bootingText.length) {
                    textElement.innerHTML += bootingText.charAt(index);
                    index++;
                    setTimeout(typeBootingText, 50);
                } else {
                    setTimeout(() => {
                            document.getElementById('loading').style.display = 'none';
                            document.getElementById('log_auth').style.display = 'flex';
                            textElement.innerHTML = "" ;
                    }, 1000);
                }
            }
        
            typeBootingText();

        })