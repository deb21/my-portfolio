// Create the 'Back to Top' button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆️ Back to Top';
backToTopButton.id = 'backToTopButton';
document.body.appendChild(backToTopButton);

// Add CSS styles for the button
const style = document.createElement('style');
style.textContent = `
    #backToTopButton {
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: none;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        font-size: 1em;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    #backToTopButton:hover {
        background-color: #FFD700;
    }
`;
document.head.appendChild(style);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
        backToTopButton.style.transform = 'translateY(0)';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'translateY(20px)';
        setTimeout(() => {
            if (window.scrollY <= 300) {
                backToTopButton.style.display = 'none';
            }
        }, 300);
    }
});

// Smooth scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
