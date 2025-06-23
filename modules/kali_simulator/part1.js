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

document.addEventListener("DOMContentLoaded", function() {
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
                    // document.getElementById('log_auth').style.display = 'flex';
                    textElement.innerHTML = "" ;
            }, 1000);
        }
    }

    typeBootingText();
});



const page_start = document.getElementById('page_start');

page_start.addEventListener('click', function(){
    const username_value = document.getElementById('username');
    const passwd_value = document.getElementById('passwd');
    const wrong = document.getElementById('wrong_login');
    const username = username_value.value ;
    const passwd = passwd_value.value ;
    if (username == "" || passwd ==""){
        wrong.style.display = 'flex';
    }
    else if(username == "kali" && passwd == "kali"){
        username_value.value = "";
        passwd_value.value = "";
        document.getElementById('log_auth').style.display = 'none';

    }  else if(username == "root" && passwd == "root"){
        username_value.value = "";
        passwd_value.value = "";
        document.getElementById('log_auth').style.display = 'none';

    }  else if(username == "aman" && passwd == "aman"){
        username_value.value = "";
        passwd_value.value = "";
        document.getElementById('log_auth').style.display = 'none';
    
    } else if(username == "kali" && passwd != "kali") {
        username_value.value = "";
        passwd_value.value = "";
        wrong.style.display = 'flex';
        
    } else {
        username_value.value = "";
        passwd_value.value = "";
        wrong.style.display = 'flex';
    }

})

document.getElementById("kali_icon").addEventListener('click', function(){
    const signout_div = document.getElementById('signout_div');
    // window.location.href="https://www.google.com";
    signout_div.style.display = 'flex';
})