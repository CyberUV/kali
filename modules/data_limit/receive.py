from flask import Flask, request
import os

app = Flask(__name__)

# Define the directory to save uploaded files
UPLOAD_FOLDER = "/testing"  # Replace with your preferred directory
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# This route will handle both GET and POST requests
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # Handle file upload (POST request)
        if 'file' not in request.files:
            return "No file part", 400
        file = request.files['file']
        if file.filename == '':
            return "No selected file", 400
        
        # Save the file to the UPLOAD_FOLDER
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)

        # Extract sender information
        sender_ip = request.remote_addr  # Client's IP address
        user_agent = request.headers.get('User-Agent')  # Browser or tool used
        referrer = request.headers.get('Referer')  # Referring URL, if available
        content_type = request.headers.get('Content-Type')  # Type of data being sent

        # Log or print the sender info (You can save it to a file or database)
        print(f"File uploaded by: {sender_ip}")
        print(f"User-Agent: {user_agent}")
        print(f"Referrer: {referrer}")
        print(f"Content-Type: {content_type}")

        # Optionally, store the information in a log file
        with open('upload_log.txt', 'a') as log_file:
            log_file.write(f"File: {file.filename} uploaded by {sender_ip}\n")
            log_file.write(f"User-Agent: {user_agent}\n")
            log_file.write(f"Referrer: {referrer}\n")
            log_file.write(f"Content-Type: {content_type}\n\n")

        return f"File successfully uploaded to {file_path}", 200

    # Handle GET request
    elif request.method == 'GET':
        return "Send a POST request with a file to upload.", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5766)
