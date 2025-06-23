import requests
import subprocess
import sys
import os
import time
import re

##########################################################################



def banner() :
    print('''
Internet Access In JNU Server
--------------------------------
1> Check Connectivity
2> Login 
3> Logout
4> Unlimited Data
5> SYNC Login File
6> Exit
''')
    try: 
        option = int(input("option => "))
        if (option < 7 and option > 0 ) :
            return option
        else :
            os.system("cls")
            print("[-] Invalid option, please try again\n")
            banner()
    except :
        os.system("cls")
        print("[-] Enter Number only as Input\n")
        banner()
        
##########################################################################



def login_id(mod) :
    url = 'http://172.16.35.1:8090/httpclient.html'
    session = requests.Session()
    #res1 = session.get(url)

    if mod == "191":
        rid = rid_data()
        if (rid == 33) :
            return 33 , "[---] All R-IDs are Used Import new Ids in Login.txt"
        elif not rid:
            return 0, "[-] R-ID Not Found, check login.txt or log.txt"
    else:
        rid = "30816"
    
## mod 191 = login and 193 = logout

    form_data = {
        "mode": mod,
        "username": "R"+str(rid),
        "password": "R"+str(rid),
        "a":    "1730911159800",
        "producttype": "0"
    }

    headers = {
        "method": "POST",
        "thirdParty": "false",
        "cookieStoreId": "firefox-default",
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate",
        "Host": "172.16.35.1:8090",
        "Origin": "http://172.16.35.1:8090",
        "originUrl": "http://172.16.35.1:8090/httpclient.html",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0"
    }
    try :
        res = session.post(url, headers=headers, data=form_data)
    except :
        return 0 , "[--] Error On Sending Request"
    
    if "You have successfully logged off" in res.text :
        message = "[+] You have successfully Logged In R-ID : " + str(rid)
        return 1 , message
    elif "ve signed out" in res.text :
        message = "[+] You have Logged Out from JNU Network"
        return 1 , message
    elif "Login failed. Invalid user name" in res.text :
        message = "------------------\n[-] Login Failed invalid R-ID : " + str(rid) + " Try Again\n------------------"
        return 0 , message
    else :
        message = "[-] Connection Error With Network"
        return 0 , message


##########################################################################



def sort_file_data(filename):
    with open(filename, "r") as file:
        # Read lines, keep only unique 5-digit integers, and ignore non-integer lines
        numbers = {int(line.strip()) for line in file if line.strip().isdigit() and len(line.strip()) == 5}
    
    # Convert set to sorted list
    sorted_numbers = sorted(numbers)
    sorted_numbers.insert(0, "sorted\n")

    with open(filename, "w") as file:
        for item in sorted_numbers:
            file.write(f"{item}\n")

##########################################################################




            
def rid_data() :
    ridf = open("./login.txt", "r")
    logf = open("./log.txt", "r")
    rid_lines = ridf.readlines()
    # Read first line to check data is sorted or not
    first_rid = rid_lines[0]
    last_log1 = ""
    for x in logf.readlines() :
        last_log1 = x.strip()
    #print(f'last log is {last_log1}')
    logf.close()
    logf = open("./log.txt", "a+")

    if "sorted" in first_rid :
        True
    else :
        sort_file_data("login.txt")
        logf.write("\n0") 
        
    # Read last line to check last value used in data
    
    for line in rid_lines[1:]:  
        match = re.match(r"^\s*(\d{5})\s*$", line)
        if match:
            x = match.group(1)  # Extract the 5-digit number
            
            if x <= last_log1.strip():  
                True
            elif x > last_log1.strip() :
                print(f"[+] Login With R-ID R{x}")
                logf.write(f"\n{x}")
                ridf.close()
                logf.close()
                return x                
            else:
                print("[---] All R-IDs are Used Import new Ids in Login.txt")
                ridf.close()
                logf.close()
                return 33

    ridf.close()
    logf.close()
    print("[-] No valid R-IDs found.")
    return 0


########################################################################



def check_status():
    # Check if login.txt exists and has valid R-IDs
    if not os.path.exists("login.txt"):
        print("[-] login.txt file is missing.")
        return

    with open("login.txt", "r") as ridf:
        rid_lines = ridf.readlines()

    # Check if the file contains the "sorted" header
    if not rid_lines or "sorted" not in rid_lines[0]:
        print("[-] login.txt is not sorted or is empty. Sorting now...")
        sort_file_data("login.txt")
        rid_lines = rid_lines[1:]  # Re-read after sorting

    # Filter and count valid 5-digit R-IDs
    valid_rids = [line.strip() for line in rid_lines if line.strip().isdigit() and len(line.strip()) == 5]

    # Check for total R-IDs and issue message if no R-IDs are found
    if not valid_rids:
        print("[-] No valid R-IDs found in login.txt.")
        return

    total_rids = len(valid_rids)
    print(f"[+] Total R-IDs in login.txt: {total_rids}")

    # Check if log.txt exists and read used R-IDs
    if os.path.exists("log.txt"):
        with open("log.txt", "r") as logf:
            log_lines = logf.readlines()
            used_rids = [line.strip() for line in log_lines if line.strip().isdigit() and len(line.strip()) == 5]
    else:
        print("[-] log.txt is missing, creating it now...")
        used_rids = []

    # Count used R-IDs and print the last used R-ID if any
    used_count = len(used_rids)
    print(f"[+] R-IDs used: {used_count} out of {total_rids}")

    # Identify the last used R-ID if available
    last_used_rid = used_rids[-1] if used_rids else None
    if last_used_rid:
        print(f"[+] Last used R-ID: {last_used_rid}")
    else:
        print("[-] No R-IDs have been used yet.")

    # Check for the currently active R-ID (next unused R-ID in login.txt)
    current_rid = None
    for rid in valid_rids:
        if rid not in used_rids:
            current_rid = rid
            break

    if current_rid:
        print(f"[+] Current R-ID in use: {current_rid}")
    else:
        print("[-] All R-IDs in login.txt have been used.")

    # Ask the user if they have entered new R-IDs in login.txt
    user_input = input("[?] Have you entered new R-IDs in login.txt? (yes/no): ").strip().lower()

    if user_input == "yes":
        # Clear log.txt and reset it with initial values
        with open("log.txt", "w") as logf:
            logf.write("___=== LOGS ===___\n")  # First line indicating logs section
            logf.write("\n0")  # Indicate no R-ID has been read yet
        print("[+] log.txt has been reset and initialized.")

    elif user_input == "no":
        print("[+] Proceeding with current log.txt.")
    else:
        print("[-] Invalid input. Please enter 'yes' or 'no'.")


