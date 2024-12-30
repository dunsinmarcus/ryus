from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/save_wallet', methods=['POST'])
def save_wallet():
    data = request.get_json()
    wallet_address = data.get('walletAddress')
    
    # Save wallet_address to the database (example placeholder logic)
    print(f"Saving wallet address: {wallet_address}")
    
    # Example response
    return jsonify({"message": "Wallet address saved successfully!"})

if __name__ == '__main__':
    app.run(debug=True)