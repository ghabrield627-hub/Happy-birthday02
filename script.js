// ============= AUDIO PLAYER =============

const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const vinyl = document.getElementById('vinyl');
const playerStatus = document.getElementById('playerStatus');

let isPlaying = false;

// Play/Pause Toggle
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playIcon.textContent = '▶';
        playBtn.classList.remove('playing');
        vinyl.classList.remove('playing');
        playerStatus.textContent = 'Paused';
    } else {
        audioPlayer.play().then(() => {
            isPlaying = true;
            playIcon.textContent = '⏸';
            playBtn.classList.add('playing');
            vinyl.classList.add('playing');
            playerStatus.textContent = 'Now Playing...';
            createMusicNotes();
        }).catch(err => {
            playerStatus.textContent = 'Error: ' + err.message;
        });
    }
}

// Audio Event Listeners
audioPlayer.addEventListener('ended', function() {
    isPlaying = false;
    playIcon.textContent = '▶';
    playBtn.classList.remove('playing');
    vinyl.classList.remove('playing');
    playerStatus.textContent = 'Lagu selesai. Tekan untuk putar ulang!';
});

audioPlayer.addEventListener('error', function() {
    playerStatus.textContent = 'Error loading audio';
});

// Initialize volume
audioPlayer.volume = 0.7;

// ============= BACKGROUND ANIMATIONS =============

// Create floating hearts
function createBackgroundHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.fontSize = `${Math.random() * 20 + 20}px`;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 15000);
        }, i * 300);
    }
}

// Create floating balloons
function createBackgroundBalloons() {
    const balloonColors = ['#ff69b4', '#ff1493', '#ff9ec0', '#ff6b9d'];
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'floating-balloon';
            balloon.style.setProperty('--balloon-color', balloonColors[Math.floor(Math.random() * balloonColors.length)]);
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDelay = `${Math.random() * 10}s`;
            document.body.appendChild(balloon);
            
            setTimeout(() => {
                balloon.remove();
            }, 20000);
        }, i * 500);
    }
}

// Create sparkles
function createBackgroundSparkles() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 2}s`;
            document.body.appendChild(sparkle);
        }, i * 100);
    }
}

// Initialize background animations
createBackgroundHearts();
createBackgroundBalloons();
createBackgroundSparkles();

// ============= PAGE NAVIGATION =============

function goToPage(pageId) {
    // Pause audio when leaving song page
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playIcon.textContent = '▶';
        playBtn.classList.remove('playing');
        vinyl.classList.remove('playing');
    }
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the target page
    document.getElementById(pageId).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ============= GIFT CARD FUNCTIONS =============

function showSong() {
    setTimeout(() => goToPage('songPage'), 300);
}

function showLetter() {
    setTimeout(() => goToPage('letterPage'), 300);
}

function showPresent() {
    setTimeout(() => goToPage('presentPage'), 300);
}

// ============= BUTTON EVENT LISTENERS =============

// Yes button functionality
document.getElementById('yesBtn').addEventListener('click', function() {
    const heart = document.getElementById('heartAnimation');
    heart.style.display = 'block';
    
    createCelebration();
    
    setTimeout(() => {
        goToPage('giftsPage');
    }, 1200);
});

// No button functionality
document.getElementById('noBtn').addEventListener('click', function() {
    createHearts();
    alert("That's okay! Take your time. The surprise will be waiting for you whenever you're ready!");
});

// ============= CELEBRATION EFFECTS =============

function createHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = '30px';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.zIndex = '9999';
            heart.style.animation = 'gentleFadeIn 0.5s ease-out, floatUp 2s ease-in forwards';
            heart.style.opacity = '0.8';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 2000);
        }, i * 100);
    }
}

function createConfetti() {
    const confettiColors = ['#ff69b4', '#ff1493', '#ff9ec0', '#ff6b9d', '#ffd700'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = '0';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.animation = `floatUp ${Math.random() * 2 + 1}s linear forwards`;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

function createMusicNotes() {
    const notes = ['♪', '♫', '♬', '🎵', '🎶'];
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
            note.style.position = 'fixed';
            note.style.fontSize = '25px';
            note.style.left = `${Math.random() * 100}%`;
            note.style.top = `${Math.random() * 100}%`;
            note.style.zIndex = '9999';
            note.style.animation = 'gentleFadeIn 0.5s ease-out, floatUp 2s ease-in forwards';
            note.style.opacity = '0.7';
            note.style.color = '#ff69b4';
            document.body.appendChild(note);
            
            setTimeout(() => note.remove(), 2000);
        }, i * 80);
    }
}

function createCelebration() {
    createConfetti();
    createHearts();
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.innerHTML = '🎈';
            balloon.style.position = 'fixed';
            balloon.style.fontSize = '40px';
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.bottom = '0';
            balloon.style.zIndex = '9999';
            balloon.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-in forwards`;
            document.body.appendChild(balloon);
            
            setTimeout(() => balloon.remove(), 5000);
        }, i * 200);
    }
}

// ============= GIFT OPENING =============

function createMassiveFlowerExplosion(x, y) {
    const flowerTypes = ['🌸', '🌺', '🌷', '🌹', '💮', '🏵️'];
    const heartTypes = ['❤️', '💖', '💗', '💓', '💞', '💕', '💘', '💝'];
    const sparkleTypes = ['✨', '🌟', '💫', '⭐'];
    const colors = ['#ff69b4', '#ff1493', '#ff6b9d', '#ff9ec0', '#d87093', '#ffb6c1'];
    
    const flowerCount = 100 + Math.floor(Math.random() * 50);
    
    for (let wave = 0; wave < 3; wave++) {
        setTimeout(() => {
            for (let i = 0; i < flowerCount / 3; i++) {
                setTimeout(() => {
                    const typeRand = Math.random();
                    let element;
                    
                    if (typeRand < 0.7) {
                        element = document.createElement('div');
                        element.className = 'explosion-flower';
                        element.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
                        
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        element.style.color = color;
                        
                        const size = 25 + Math.random() * 40;
                        element.style.fontSize = `${size}px`;
                        
                        element.style.setProperty('--float-x-1', `${(Math.random() - 0.5) * 300}px`);
                        element.style.setProperty('--float-y-1', `${-Math.random() * 100 - 50}px`);
                        element.style.setProperty('--float-x-2', `${(Math.random() - 0.5) * 400}px`);
                        element.style.setProperty('--float-y-2', `${-Math.random() * 200 - 100}px`);
                        element.style.setProperty('--float-x-3', `${(Math.random() - 0.5) * 300}px`);
                        element.style.setProperty('--float-y-3', `${-Math.random() * 300 - 150}px`);
                        element.style.setProperty('--float-x-4', `${(Math.random() - 0.5) * 200}px`);
                        element.style.setProperty('--float-y-4', `${-Math.random() * 400 - 200}px`);
                        
                        const offsetX = (Math.random() - 0.5) * 200;
                        const offsetY = (Math.random() - 0.5) * 200;
                        element.style.left = `${x + offsetX}px`;
                        element.style.top = `${y + offsetY}px`;
                        
                        const duration = 2.5 + Math.random() * 1.5;
                        element.style.animationDuration = `${duration}s`;
                        
                    } else if (typeRand < 0.9) {
                        element = document.createElement('div');
                        element.className = 'heart-explosion';
                        element.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
                        
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        element.style.color = color;
                        
                        const offsetX = (Math.random() - 0.5) * 300;
                        const offsetY = (Math.random() - 0.5) * 300;
                        element.style.left = `${x + offsetX}px`;
                        element.style.top = `${y + offsetY}px`;
                        
                        element.style.setProperty('--heart-x', `${(Math.random() - 0.5) * 200}px`);
                        
                        const duration = 3 + Math.random() * 2;
                        element.style.animationDuration = `${duration}s`;
                        
                    } else {
                        element = document.createElement('div');
                        element.className = 'sparkle-element';
                        element.innerHTML = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];
                        
                        const offsetX = (Math.random() - 0.5) * 250;
                        const offsetY = (Math.random() - 0.5) * 250;
                        element.style.left = `${x + offsetX}px`;
                        element.style.top = `${y + offsetY}px`;
                        
                        const size = 15 + Math.random() * 20;
                        element.style.fontSize = `${size}px`;
                        
                        element.style.setProperty('--sparkle-x', `${(Math.random() - 0.5) * 150}px`);
                        
                        const duration = 1.5 + Math.random();
                        element.style.animationDuration = `${duration}s`;
                    }
                    
                    document.body.appendChild(element);
                    
                    setTimeout(() => {
                        if (element.parentNode) {
                            element.parentNode.removeChild(element);
                        }
                    }, 5000);
                    
                }, i * 20);
            }
        }, wave * 300);
    }
}

function openGift() {
    const box = document.getElementById('giftBox');
    const surprise = document.getElementById('surpriseText');
    
    box.classList.add('open');
    
    const giftBoxRect = document.querySelector('.present-box').getBoundingClientRect();
    const explosionX = giftBoxRect.left + giftBoxRect.width / 2;
    const explosionY = giftBoxRect.top + giftBoxRect.height / 2;
    
    createMassiveFlowerExplosion(explosionX, explosionY);
    createConfetti();
    
    setTimeout(() => {
        surprise.classList.add('show');
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.innerHTML = '✨';
                star.style.position = 'fixed';
                star.style.fontSize = '35px';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.zIndex = '9999';
                star.style.animation = 'sparkle 1s ease-out';
                document.body.appendChild(star);
                
                setTimeout(() => star.remove(), 1000);
            }, i * 50);
        }
    }, 1000);
}

// Initial celebration on load
setTimeout(() => {
    createHearts();
}, 1000);
