const canvas = document.getElementById('asteroids-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

// Configuration
const config = {
    particleCount: 80,
    minSize: 1,
    maxSize: 4,
    minSpeed: 0.2,
    maxSpeed: 1.5,
    colors: ['#8b5cf6', '#06b6d4', '#d946ef', '#ffffff', '#4b5563']
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset(true);
    }

    reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -10;
        this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        this.speedY = Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed;
        this.speedX = (Math.random() - 0.5) * 0.5; // Slight horizontal drift
        this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > height + 10 || this.x < -10 || this.x > width + 10) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        
        // Add subtle glow
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color;

        ctx.beginPath();
        // Draw an irregular polygon to look like a tiny asteroid/debris
        ctx.moveTo(this.size, 0);
        ctx.lineTo(this.size * 0.5, this.size);
        ctx.lineTo(-this.size * 0.8, this.size * 0.8);
        ctx.lineTo(-this.size, -this.size * 0.2);
        ctx.lineTo(0, -this.size);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }
}

function init() {
    resize();
    window.addEventListener('resize', resize);
    
    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
    }
    
    animate();
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
    
    requestAnimationFrame(animate);
}

// Ensure the script runs after DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
