window.part_of_hacking = []; 
const code = `

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Firefox()

target = "Rudraksh Yadav"
target_username = "cyberuv"
driver.get("https://www.google.com/")
search_bar = driver.find_element(By.XPATH,'//*[@id="APjFqb"]')
search_bar.send_keys(target)

search_bar.submit()
time.sleep(3)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

time.sleep(5)
sea = driver.find_element(By.XPATH,'//*[@id="APjFqb"]')
sea.clear()
sea.send_keys(target_username)
sea.submit()


time.sleep(3)
driver.get('https://in.pinterest.com/pin/cyberuv--1079386235672212430/')

time.sleep(3)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(1)
driver.back()
time.sleep(3)

driver.get('https://hackerone.com/cyberuv/hacktivity')
time.sleep(6)
driver.back()
time.sleep(2)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
sea = driver.find_element(By.XPATH,'//*[@id="APjFqb"]')
sea.clear()
sea.send_keys('intext:"cyber_buddy_rudra"')
sea.submit()
time.sleep(3)
driver.get('https://www.instagram.com/cyber_buddy_rudra/')
time.sleep(5)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(6)
driver.get("https://cyberuvp.github.io/profile")
time.sleep(3)

driver.get('https://www.google.com')
search_bar = driver.find_element(By.XPATH,'//*[@id="APjFqb"]')
search_bar.send_keys('intext:"Accent soft drink"')
search_bar.submit()
time.sleep(3)
driver.get('https://cyberuv.github.io/shop/')
time.sleep(5)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
driver.get('https://cyberuv.github.io/instagarm/')
time.sleep(3)

driver.back()
driver.get("https://github.com/cyberuv")

time.sleep(5)
driver.close()
####################################
## Osint Paylaod Done
`;

const code2 = `
Opening Google....
.
.
nothing is here
Rudraksh Yadav has a account in hackerone.
Rudraksh Yadav related to cybersecurity
lets check the Rudraksh Yadav's logo
Rudraksh Yadav Choose nice Logo
Lets check hackerone Account....
looks good account
Lets go to Google Dorking
ohh he follows HackWithHer
Lets Check his insta account
okay I got a Github Repo
His Date of Birth is 16-Aug-2004
Nice Rudraksh Yadav already creates 10+ website
lets check the github repo
so he is studeing in JNU Jaipur {2023-27}
I am right, He is persuing B.tech CSE honr in Cyber Security
He has created two websites related to accent soft drink
This company's owner may be his dad
Got his home location
Lets check his ecommerce website
Nice i got his Phone NUmber
Lets check his instagram Clone
I think this website is Private Due to
`;

const command1 = [
    "sudo su",
    "<br><span style='color: blue; margin-right: 5px;'>(root@kali)-[~] </span> mkdir payload<br>",
    "<span style='color: blue; margin-right: 5px;'>(root@kali)-[~] </span> cd payload <br>",
    "<span style='color: blue; margin-right: 5px;'>(root@kali)-[/home/kali/paylaod/] </span> nano osint.py<br><br>"
];

const command2 = [
    "sudo su <br>",
    "<span style='color: blue; margin-right: 5px;'>(root@kali)-[~] </span>pwd <br>",
    "/home/kali/payload/<br>",
    "<span style='color: blue; margin-right: 5px;'>(root@kali)-[/home/kali/paylaod/] </span> ls <br>",
    "osint.py  paylaod_tool <br>",
    "<span style='color: blue; margin-right: 5px;'>(root@kali)-[/home/kali/paylaod/] </span> python3 osint.py <br>",
    " <br>",
    "... <br> ",
    "Opening Firefox .... <br>"
];
