import subprocess
import re
import os
import time
import requests
import json

    # List of all Netowrk names
def list_available_wifi():
    network = []
    try :
        networks = subprocess.check_output("netsh wlan show networks", shell=True).decode('utf-8')
        ssid = re.findall(r"SSID\s+\d+\s+:\s(.+)", networks)
        auth = re.findall(r"Authentication\s+:\s(.+)", networks)
        network = [{"ssid": ssid[i].replace('\r', ''), "auth": auth[i].replace('\r', '')} for i in range(len(ssid))]
        code = 1
    except Exception as e :
        print(f'[-] Check Wifi Adaptor \n{"-"*35}\n{e}\n{"-"*35}')
        code = 0 
    return code , network

    # List of Connected Network Name
def connected_network() :
    conn_network = []
    try :
        interfaces = subprocess.check_output("netsh wlan show interface", shell=True).decode('utf-8')
        interface = re.findall(r"SSID\s+:\s(.+)",interfaces)
        interface_auth = re.findall(r'Authentication\s+:\s(.+)',interfaces)
        conn_network.append({"ssid": interface[0].replace('\r', ''), "auth": interface_auth[0].replace('\r', '')})
        code = 1
    except :
        conn_network.append({"ssid": 0 , "auth": 0 })
        code = 2
    return code , conn_network

def wifi_pass():
    wifi_his = []
    profile = wifi_history()
    for data in profile :
        try :
            pre_pro = subprocess.check_output(f"netsh wlan show profile name=\"{data}\" key=clear" , shell=True).decode('utf-8')
            name_match = re.search(r"Name\s+:\s(.+)", pre_pro)
            name = name_match.group(1) if name_match else "N/A"

            key_content_match = re.search(r"Key Content\s+:\s(.+)", pre_pro)
            key_content = key_content_match.group(1) if key_content_match else "Absent"
            wifi_his.append({"ssid": name.replace('\r', ''), "auth": key_content.replace('\r', '')})
            
        except Exception as e:
            True

    with open("data/lytffg.cy","w") as file :
        json.dump(wifi_his , file , indent=0)

        

    # List of All wifi who are connected before
def wifi_history() :
    pro = subprocess.check_output("netsh wlan show profiles", shell=True).decode('utf-8')
    profile = re.findall(r"All User Profile\s+:\s(.+)",pro)
    profile.sort()

    return profile

    # Connect with Wifi 
def connect_to_open_wifi(ssid) :
    command = f'netsh wlan connect name="{ssid}"'
    try:
        subprocess.run(command, shell=True, check=True)
        print(f"Successfully connected to {ssid}")
    except subprocess.CalledProcessError:
        print(f"Failed to connect to {ssid}. It might be secured or not in range.")

def check_new_old(i , ava_wifi) :
    before_wifi = wifi_history()
    for wifi in ava_wifi :
        for befor in before_wifi :
            if (wifi["ssid"] == befor) :
                print(f'{i}> {wifi["ssid"]} : {wifi["auth"]}  <Saved> ')
        print(f'{i}> {wifi["ssid"]} : {wifi["auth"]}  ')
        i = i+1

    return i 
def wifi_list_banner(ava_wifis) :
    ava_wifi = ava_wifis
    while True :
        print(f'''[-] You are Not Connected with any Network
{"-"*25}
Choose the Network for Connection :\n
no.  SSID  :  Authentication''')
            
        i = 1
        i = check_new_old(i , ava_wifi)
        print(f'{i}> Not Showing Scan Again  [-]')
        i = i+1
        print(f'{i}> Exit')

        try :
            opti = int(input("Choose option ==> "))
            if(opti <= i and opti > 0 and opti != i-1 and opti != i) :
                connect_to_open_wifi(ava_wifi[opti - 1]["ssid"])
                return 1
            elif (opti == i-1) :
                os.system("cls")
                print("[+] Rescanning Available Wifi networks")
                try :
                    code , new_wifi = list_available_wifi()
                    ava_wifi = new_wifi
                except :
                    print("[-] Error occuring while scanning wifi")
            elif( opti == i ):
                print("See You Soon")
                print("[+] Exit in 3...")
                time.sleep(1)
                print("2...")
                time.sleep(1)
                print("1...")
                return 1
                
            else :
                os.system("cls")
                print("[-] Invalid option, please try again\n")
        except :
            os.system("cls")
            print("[-] Enter Number only as Input\n-")
            
#########################################################################
def wifi_process() :
    try :
        code2 , conn_wifi = connected_network()
        if code2 == 1 :
            print(f'''[+] You Are Connected with Network
{"-"*25}
SSID : {conn_wifi[0]['ssid']}
Authentication: {conn_wifi[0]["auth"]}''')
        elif (conn_wifi[0]["ssid"] == 0) :
            code1 , ava_wifi   = list_available_wifi()
            wifi_list_banner(ava_wifi)
        else :
            print(f'[-] Issue With Network Connection')
    except :
        print("[-] Checking The Network Adaptor")
    



par, par2 = connected_network()

print(f'{par} || {par2}')