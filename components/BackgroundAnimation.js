'use client';

import { useEffect, useRef } from 'react';
import styles from './BackgroundAnimation.module.css';

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Theme detection
        const getThemeColors = () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            return {
                baseAlpha: isLight ? 0.6 : 0.3, // More visible in light mode
                colorBase: isLight ? '98, 0, 234' : '255, 255, 255' // Purple in light, White in dark
            };
        };

        let themeConfig = getThemeColors();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    themeConfig = getThemeColors();
                    // Re-init particles on theme change to update colors effectively or let update loop handle it
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];
        const particleCount = 60; // Increased count

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 3 + 1;
                this.alpha = Math.random() * themeConfig.baseAlpha;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                //Dynamic color based on current theme config
                ctx.fillStyle = `rgba(${themeConfig.colorBase}, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default BackgroundAnimation;
