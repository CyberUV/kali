from flask import Flask, render_template, request, jsonify
from modules.ransomware.ransome import encrypt_file, encrypt_directory, generate_key, decrypt_file , load_key, decrypt_directory, ransom_note
from modules.data_limit.data_limit import task_done
from modules.data_limit.all_network import *
from modules.fetch_cve.fetch_cve import get_latest_cves
import os

app = Flask(__name__)

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/breached-emails', methods=['GET'])
def breached_data():
    return render_template('Data-Breach.html')

@app.route('/cve-exploits', methods=['GET'])
def cve_exploits():
    cves = get_latest_cves()
    return render_template('cve_exploits.html', cves=cves)
    # return render_template('cve_exploits.html')

@app.route('/wifi-data', methods=['GET'])
def wifi_data():
    return render_template('jnu_network_manager.html')

@app.route('/api/wifi')
def api_available_wifi():
    code, wifi_list = list_available_wifi()
    if code == 1:
        return jsonify({"available": wifi_list})
    return jsonify({"available": []})

@app.route('/api/wifi-connected')
def api_connected_wifi():
    code, conn_info = connected_network()
    if code == 1:
        return jsonify(conn_info[0])
    return jsonify({"ssid": "Not connected", "auth": "Unknown"})

@app.route('/api/wifi-history')
def api_wifi_history():
    profiles = wifi_history()
    result = []
    for p in profiles:
        result.append({"ssid": p.strip(), "auth": "Saved Profile"})
    return jsonify({"history": result})


# @app.route('/wifi-data', methods=['GET'])
# def wifi_data():
#     return render_template('jnu_network_manager.html')

@app.route('/ransomware-simulator', methods=['GET', 'POST'])
def ransomware_simulator():
    if request.method == 'POST':
        data = request.get_json()
        path = data.get("path")
        mode = data.get("mode")
        note = data.get("ransomeNote")
        print(mode)
        if not os.path.exists(path):
            return jsonify({"message": "❌ Path does not exist."})
        
        if ( mode == "encrypt" ) :
            try:
                generate_key()
                if os.path.isfile(path):
                    encrypt_file(path, load_key())
                    ransom_note(path, note)
                    return jsonify({"message": f"✅ File encrypted: {path}"})
                elif os.path.isdir(path):
                    encrypt_directory(path)
                    ransom_note(path, note)
                    return jsonify({"message": f"✅ Directory encrypted: {path}"})
                else:
                    return jsonify({"message": "⚠️ Unsupported path type."})
            except Exception as e:
                return jsonify({"message": f"❌ Error: {str(e)}"})
        elif mode == "decrypt":
            try:
                if os.path.isfile(path):
                    decrypt_file(path, load_key())
                    return jsonify({"message": f"✅ File decrypted: {path}"})
                elif os.path.isdir(path):
                    decrypt_directory(path)
                    return jsonify({"message": f"✅ Directory decrypted: {path}"})
                else:
                    return jsonify({"message": "⚠️ Unsupported path type."})
            except Exception as e:
                return jsonify({"message": f"❌ Error: {str(e)}"})

            ...
    return render_template('ransomware_simulator.html')

@app.route('/c2-simulation', methods=['GET'])
def c2_simulation():
    return render_template('404error.html')

@app.route('/firmware-scanner', methods=['GET'])
def firmware_scanner():
    return render_template('firmware_scanner.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

