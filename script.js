const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const music = document.getElementById('music');
const video = document.getElementById('myVideo');
const questionPage = document.getElementById('question-page');
const celebrationPage = document.getElementById('celebration');

let scale = 1;
let opacity = 1;

// Function to move and shrink the button
const moveNoButton = () => {
    // Vibrate on interaction
    if (navigator.vibrate) navigator.vibrate(50);

    scale -= 0.1;
    opacity -= 0.15;

    if (opacity <= 0.1) {
        noBtn.style.display = 'none';
    }

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = `scale(${scale})`;
    noBtn.style.opacity = opacity;
};

// Event Listeners
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    // Start music (Browsers require a click to play audio)
    music.play();
    
    // Switch pages
    questionPage.classList.add('hidden');
    celebrationPage.classList.remove('hidden');
    
    // Play the video
    video.play();

    // Launch Confetti
    triggerConfetti();
});

function triggerConfetti() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ffffff']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ffffff']
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    }());
}
