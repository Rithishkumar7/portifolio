document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Navbar Background on Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. Typewriter Effect for Name
    const typedNameEl = document.getElementById('typed-name');
    if (typedNameEl) {
        const textToType = "Rithish Janjeerapu";
        let charIndex = 0;
        
        // Clear the fallback text immediately when JS runs
        typedNameEl.textContent = "";
        
        function typeWriter() {
            if (charIndex < textToType.length) {
                typedNameEl.textContent += textToType.charAt(charIndex);
                charIndex++;
                // Randomize typing speed slightly for realism (between 50ms and 150ms)
                const typingSpeed = Math.floor(Math.random() * 100) + 50;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Remove cursor after typing completes if desired, or keep it blinking
                // document.querySelector('.cursor').style.display = 'none';
            }
        }
        
        // Start typing after a short delay so the page can load first
        setTimeout(typeWriter, 500);
    }

    // 5. Scroll-Driven Fluid-Flow Timeline Animation (Dual-Engine)
    // Customization Variables:
    // - Activation Threshold: Set to 0.6 (60% from top of viewport). Lower is higher on screen.
    // - Customization colors, speeds, and sizes are defined in style.css under .timeline-liquid-line, .liquid-head, and .timeline-dot.glow-active
    const timelineThreshold = 0.6; 
    const timelineEl = document.getElementById('education-timeline');

    if (timelineEl) {
        // Detect if GSAP & ScrollTrigger are loaded
        const isGsapAvailable = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

        if (isGsapAvailable) {
            console.log("Timeline Controller: Initializing premium GSAP engine.");
            
            // Register ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);

            // Engine A: GSAP scrub animation for the liquid stream line and head
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#education-timeline",
                    start: `top ${timelineThreshold * 100}%`,
                    end: `bottom ${timelineThreshold * 100}%`,
                    scrub: 0.1, // micro-scrub smooth ease
                    onUpdate: (self) => {
                        const progress = self.progress;
                        // Fade head out when fluid hasn't started or is complete
                        gsap.to(".liquid-head", {
                            opacity: progress > 0.005 && progress < 0.995 ? 1 : 0,
                            duration: 0.15,
                            overwrite: "auto"
                        });
                    }
                }
            });

            // Simultaneously scrub the height of the line and the top offset of the pulsing head
            tl.to(".timeline-liquid-line", { height: "100%", ease: "none" }, 0)
              .to(".liquid-head", { top: "100%", ease: "none" }, 0);

            // Separate triggers for activating dots and cards
            const items = timelineEl.querySelectorAll('.timeline-item');
            items.forEach(item => {
                const dot = item.querySelector('.timeline-dot');
                
                ScrollTrigger.create({
                    trigger: item,
                    start: `top ${timelineThreshold * 100}%`,
                    onEnter: () => {
                        dot.classList.add('glow-active');
                        item.classList.add('active-item');
                    },
                    onLeaveBack: () => {
                        dot.classList.remove('glow-active');
                        item.classList.remove('active-item');
                    }
                });
            });

        } else {
            console.log("Timeline Controller: GSAP not detected. Falling back to high-performance Vanilla JS engine.");
            
            // Engine B: Vanilla JS fallback using requestAnimationFrame and passive scrolling
            const liquidLine = timelineEl.querySelector('.timeline-liquid-line');
            const liquidHead = timelineEl.querySelector('.liquid-head');
            const items = timelineEl.querySelectorAll('.timeline-item');
            
            let scrollScheduled = false;

            function updateTimelineVanilla() {
                const timelineRect = timelineEl.getBoundingClientRect();
                const triggerY = window.innerHeight * timelineThreshold;
                
                let progress = 0;
                if (timelineRect.top < triggerY) {
                    const scrolledHeight = triggerY - timelineRect.top;
                    progress = Math.min(Math.max(scrolledHeight / timelineRect.height, 0), 1);
                }
                
                // Update liquid line height & head vertical position
                liquidLine.style.height = `${progress * 100}%`;
                liquidHead.style.top = `${progress * 100}%`;
                
                // Fade head out at the bounds
                if (progress > 0.005 && progress < 0.995) {
                    liquidHead.style.opacity = '1';
                } else {
                    liquidHead.style.opacity = '0';
                }
                
                // Toggle active states for dots and cards as they cross the trigger boundary
                items.forEach(item => {
                    const itemRect = item.getBoundingClientRect();
                    const dot = item.querySelector('.timeline-dot');
                    
                    if (itemRect.top < triggerY) {
                        dot.classList.add('glow-active');
                        item.classList.add('active-item');
                    } else {
                        dot.classList.remove('glow-active');
                        item.classList.remove('active-item');
                    }
                });

                scrollScheduled = false;
            }

            // Passive listener for high-performance scroll handling
            window.addEventListener('scroll', () => {
                if (!scrollScheduled) {
                    scrollScheduled = true;
                    requestAnimationFrame(updateTimelineVanilla);
                }
            }, { passive: true });

            // Run initial check on load
            updateTimelineVanilla();

            // Run on resize as well to recalculate bounds
            window.addEventListener('resize', () => {
                if (!scrollScheduled) {
                    scrollScheduled = true;
                    requestAnimationFrame(updateTimelineVanilla);
                }
            }, { passive: true });
        }
    }
});
