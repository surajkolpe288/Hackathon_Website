// class Particle {
//     constructor(x, y, size, speed, color) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.speed = speed;
//         this.color = color;
//         this.angle = Math.random() * Math.PI * 2;
//         this.vx = Math.cos(this.angle) * this.speed;
//         this.vy = Math.sin(this.angle) * this.speed;
//     }

//     update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
//         if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
//     }

//     draw(ctx) {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }
// }

// const canvas = document.getElementById('particleCanvas');
// const ctx = canvas.getContext('2d');

// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
// }

// resizeCanvas(); // Initial sizing

// const particles = [];
// const particleCount = 100;
// const maxDistance = 150;

// let mouseX = 0;
// let mouseY = 0;

// function init() {
//     for (let i = 0; i < particleCount; i++) {
//         const size = Math.random() * 3 + 1;
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         const speed = Math.random() * 0.5 + 0.1;
//         const color = `rgba(0, ${Math.floor(Math.random() * 155 + 100)}, ${Math.floor(Math.random() * 155 + 100)}, ${Math.random() * 0.8 + 0.2})`;
//         particles.push(new Particle(x, y, size, speed, color));
//     }
//     console.log(`Initialized ${particles.length} particles`);
// }

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     particles.forEach(particle => {
//         particle.update();
//         particle.draw(ctx);

//         // React to mouse
//         const dx = mouseX - particle.x;
//         const dy = mouseY - particle.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         if (distance < maxDistance) {
//             const force = (maxDistance - distance) / maxDistance;
//             particle.x -= dx * force * 0.03;
//             particle.y -= dy * force * 0.03;
//         }
//     });

//     // Connect particles with lines
//     ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
//     ctx.lineWidth = 0.5;
//     for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//             const dx = particles[i].x - particles[j].x;
//             const dy = particles[i].y - particles[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             if (distance < maxDistance) {
//                 ctx.beginPath();
//                 ctx.moveTo(particles[i].x, particles[i].y);
//                 ctx.lineTo(particles[j].x, particles[j].y);
//                 ctx.stroke();
//             }
//         }
//     }

//     requestAnimationFrame(animate);
// }

// window.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// window.addEventListener('resize', resizeCanvas);

// init();
// animate();




class Particle {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
}

resizeCanvas(); // Initial sizing

const particles = [];
const particleCount = 140;
const maxDistance = 170;

let mouseX = 0;
let mouseY = 0;

function init() {
    for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 0.5 + 0.1;
        const color = `rgba(0, ${Math.floor(Math.random() * 155 + 100)}, ${Math.floor(Math.random() * 155 + 100)}, ${Math.random() * 0.8 + 0.2})`;
        particles.push(new Particle(x, y, size, speed, color));
    }
    console.log(`Initialized ${particles.length} particles`);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);

        // React to mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            particle.x -= dx * force * 0.03;
            particle.y -= dy * force * 0.03;
        }
    });

    // Connect particles with lines
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

window.addEventListener('resize', resizeCanvas);

init();
animate();




