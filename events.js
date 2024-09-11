document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('mousemove', (e) => {
        const { left, top } = step.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        gsap.to(step, {
            duration: 0.3,
            background: `radial-gradient(circle at ${x}px ${y}px, rgba(187, 134, 252, 0.1), transparent 50%)`,
        });
    });

    step.addEventListener('mouseleave', () => {
        gsap.to(step, {
            duration: 0.3,
            background: 'var(--card-bg)',
        });
    });
});