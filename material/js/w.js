
const openModalBtn = document.getElementById('openModalBtn');
const WalletModal = document.getElementById('WalletModal');
const closeBtn = document.querySelector('.close-btn');
const connectWalletBtn = document.getElementById('connectWallet');
const cancelWalletBtn = document.getElementById('cancelWallet');
const statusMessage = document.getElementById('statusMessage');


openModalBtn.addEventListener('click', () => {
    WalletModal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
    WalletModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === WalletModal) {
        WalletModal.style.display = 'none';
    }
});

connectWalletBtn.addEventListener('click', () => {
    statusMessage.textContent = 'Connecting to Your TON Wallet...';

    setTimeout(() => {
        statusMessage.textContent = 'oops try again something wents wrong!';
    }, 2000);
});


cancelWalletBtn.addEventListener('click', () => {
    WalletModal.style.display = 'none';
    statusMessage.textContent = '';
});
