document.getElementById('connectWalletButton').addEventListener('click', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create a new provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Get the signer
            const signer = provider.getSigner();

            // Get the user's address
            const address = await signer.getAddress();
            console.log('Connected address:', address);

            // Optionally, update the button text or UI
            document.getElementById('connectWalletButton').innerText = 'Wallet Connected';
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    } else {
        alert('MetaMask is not installed. Please install it to use this feature.');
    }
});