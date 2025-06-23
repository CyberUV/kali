import requests
import subprocess
import sys
import os
import time
import re
from .all_network import *
from .banner import *

google = "https://httpbin.org/status/200"
jnu_server = "http://172.16.35.1:8090/httpclient.html"
login = "191"
logout = "193"

def chk_ping(url) :

    try:
        res = requests.get(url)
        if (res.status_code == 200):
            #print(f"[+] Connected With Netwok")
            return 1
    except Exception as e:
        #print(f"[-] Not connected with Network")
        return 0

def conn_interface_name() :
        networks = subprocess.check_output("netsh wlan show interface", shell=True).decode('utf-8')
        ssid_list = re.findall(r"SSID\s+\d+\s+:\s(.+)", networks)
        return ssid_list[0]
         
def conn_with_wifi(code):
    if(code) :
        user_input = input("[?] Do you want to connect with wifi? (yes/no): ").strip().lower()

        if user_input == "yes" :
            os.system("cls")
            wifi_process()
        elif user_input == "no" :
            return 1 
        else:
            print("[-] Invalid input. Please enter 'yes' or 'no'.")
    else :
        os.system("cls")
        wifi_process()
        
def conn_with_jnu() :
        if(chk_ping(jnu_server)) :
            return 1 , "[+] You have connected with JNU Network"
        else :
            statement = "[-] Not Connected with JNU Network"
            return 0 , statement 
        
def chk_login() :
        if(chk_ping(google)):
            return 1 , "[+] You have already Login in JNU Network"
        else :
            return 0 , "[-] You have not logged in JNU Network"

def login_process():
        print("Checking Connection with JNU Network...")
        code1 , state1 = conn_with_jnu()
        if(code1):
            print(state1)
        else :
            return 0 , state1
        
        print("Checking Login Status...")
        code2 , state2 = chk_login()
        if(code2):
            #print("[-] You have already Login in JNU Network")
            return 1 , state2
        else :
            print("Login into JNU Network...")
            code3 , state3 = login_id(login)
            return code3 , state3

def logout_process() :
        print("Checking Connection with JNU Network...")
        code1 , state1 = conn_with_jnu()
        if(not code1):
            return 0 , state1
        
        code2 , state2 = login_id(logout)
        if(code2):
            return 1, state2
        else :
            return 0, "[-] You have not logged out from JNU Network check login_id"

def stop_process():
    time.sleep(60)
    code , state = chk_login()
    if(code) :
        stop_process()
    else :
        print(state)
        return 0

def limit_process() :
        i = 0
        while (i <= 2) :
            code , state = login_process()
            if (code == 33) :
                print(state)
                return 33
            elif (code == 1) :
                print(state)
                i=0
                print("Waiting For Data Exceed...")
                stop_process()
                code2 , state2 = logout_process()
                print(state2) if code2 else print(state2)
            else :
                print(state)
                print(f'Getting An Error Check the Errors Fixing Attempt : {3-i}')
                i = i+1
            print("\n"+"-"*40 + "\n")                

#######################################################################
def task_done(num) :
    print("\n\n")
    if(num == 1):
        os.system("cls")
        print("Checking Connectivity with JNU Network")
        print("-"*30)
        code , state = conn_with_jnu()
        if (code):
            print(state)
            conn_with_wifi(code)
        else :
            print(state)
            conn_with_wifi(code)


    elif(num == 2):
        os.system("cls")
        print("Login into JNU Network")
        print("-"*30)
        login_process()
            
    #elif(num == 3):
     #   os.system("cls")
      #  print("Checking the Login Status")
       # print("-"*30)
        #code , state = chk_login()
        #print(state)

    elif(num == 3):
        os.system("cls")
        print("Logout From JNU Network")
        print("-"*30)
        code , state = logout_process()
        print(state)

    elif(num == 4):
        os.system("cls")
        print("Access Unlimited Internet")
        print("-"*30)
        limit_process()

    elif(num == 5):
        os.system("cls")
        print("Checking R-ID status")
        print("-"*30)
        check_status()
        wifi_pass()
        

    if(num == 6) :
        print("See You Soon")
        print("[+] Exit in 3...")
        time.sleep(1)
        print("2...")
        time.sleep(1)
        print("1...")

    else :
        time.sleep(1)
        opt = banner()
        task_done(opt)



def main():
    os.system("cls")
    opt = banner()
    task_done(opt)

    

# if __name__=="__main__" :
#     main()
