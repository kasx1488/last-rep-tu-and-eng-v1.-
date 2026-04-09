// Alerts and prompts — translated in aggressive trader slang
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("You're about to join the alpha. No jeets allowed, only serious apes.");
        });
    });
});

// Example dynamic text update
const tradeNotice = document.getElementById('trade-notice');
if(tradeNotice) {
    tradeNotice.textContent = "Hot trades incoming — get ready to ape in!";
}

// Any popups or modals
const popup = document.getElementById('popup-message');
if(popup) {
    popup.textContent = "This is private alpha access. Only real degens get through.";
}
