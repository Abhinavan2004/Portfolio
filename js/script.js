document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

  
  document.getElementById("year").textContent = new Date().getFullYear();

    // Initialize theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    if (savedTheme === 'light') {
        html.classList.add('light');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('light');
            const isLight = html.classList.contains('light');
            localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');

            if (isLight) {
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar transparency on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('glass');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('glass');
            header.classList.add('bg-transparent');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    // Close mobile menu on link click
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    
    // Project Modal Logic
    const projectData = {
        'healthcare-cps': {
            title: 'Healthcare CPS Security (Ongoing)',
            short_desc: 'A hybrid Spring Boot + Kotlin-based prototype ensuring secure data flow in healthcare CPS using Arduino sensors and PostgreSQL.',
            motivation: 'To address privacy and integrity concerns in healthcare CPS by building a secure architecture capable of withstanding cyber threats.',
            process: 'Designed a CPS prototype integrating Arduino sensors with Kotlin apps for data collection, routed to a secure Spring Boot backend. Simulated attack vectors to test authentication and encryption.',
            technologies: ['Java', 'Spring Boot', 'Kotlin', 'PostgreSQL', 'Google Cloud', 'Arduino'],
            challenges: 'Ensuring end-to-end data security under real-time conditions and bridging IoT hardware with cloud layers.',
            github: 'https://github.com/Abhinavan2004/Ensuring-Securing-in-CPS-for-Healthcare-Applications',
            live: '#'
        },
        'shortify': {
            title: 'Shortify – URL Shortener',
            short_desc: 'A full-stack URL shortener that converts long URLs into short, shareable links with fast redirection.',
            motivation: 'To build a real-world utility focusing on usability, performance, and clean API design.',
            process: 'Designed a REST-based backend to manage short URLs and integrated it with a responsive React frontend with unique URL generation.',
            technologies: ['Spring Boot', 'React', 'Render', 'Neon Serverless PostgreSQL'],
            challenges: 'Handling unique URL generation without collisions and managing redirection efficiency.',
            github: 'https://github.com/Abhinavan2004/Shortify-An-Url-Shortener',
            live: 'https://shortify-an-url-shortener-ui.onrender.com/'
        },
        'medibridge': {
            title: 'MediBridge HMS',
            short_desc: 'Hospital Management System with role-based access for Admin, Doctor, and Patient.',
            motivation: 'To streamline hospital operations and patient data management through a structured software solution.',
            process: 'Built with core Java and MySQL, focusing on database normalization and secure user roles.',
            technologies: ['Java Core', 'JDBC', 'MySQL', 'Swing'],
            challenges: 'Designing a complex relational database schema and managing state across multiple user roles.',
            github: 'https://github.com/Abhinavan2004',
            live: '#'
        },
        'nexoraa': {
            title: 'NeXoraa Video App',
            short_desc: 'Real-Time Video & Chat Application using MERN stack and Stream Video SDK.',
            motivation: 'Exploring real-time communication protocols and SDK integration in a modern social app.',
            process: 'Integrated Stream SDK for high-quality video calling and used MongoDB for persistent user and chat data.',
            technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Stream SDK'],
            challenges: 'Synchronizing real-time events across multiple clients and ensuring low latency for video streams.',
            github: 'https://github.com/Abhinavan2004',
            live: '#'
        },
        'travelsphere': {
            title: 'TravelSphere – Tourism System',
            short_desc: 'A Java-based travel management system with user authentication and package booking features.',
            motivation: 'To build a full-featured desktop system for streamlining travel bookings using core Java concepts.',
            process: 'Designed the GUI using Java Swing and AWT. Implemented JDBC connectivity for persistent MySQL storage.',
            technologies: ['Java', 'Swing', 'AWT', 'JDBC', 'MySQL'],
            challenges: 'Managing multiple screens and user states within Swing while maintaining modular code.',
            github: 'https://github.com/Abhinavan2004/Travel_and_Tourism_Management',
            live: '#'
        },
        'taskmate': {
            title: 'TaskMate – Desktop Task Manager',
            short_desc: 'A Java Swing-based desktop application for task scheduling and productivity tracking.',
            motivation: 'Creating a clean, offline-first tool for personal productivity with persistent storage.',
            process: 'Built the GUI with Swing and connected to a local MySQL instance via XAMPP for data persistence.',
            technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'XAMPP'],
            challenges: 'Ensuring real-time database sync and implementing reliable CRUD operations.',
            github: 'https://github.com/Abhinavan2004/TaskMate-Java',
            live: '#'
        },
        'ai-reviewer': {
            title: 'AI Code Reviewer',
            short_desc: 'MERN application integrating Gemini AI API for real-time code analysis and feedback.',
            motivation: 'To assist developers with intelligent, AI-powered code feedback during the development lifecycle.',
            process: 'Developed using React for a clean UI and Node/Express to securely interface with the Gemini API.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind', 'Gemini AI'],
            challenges: 'Ensuring accurate code parsing and managing API rate limits for consistent feedback.',
            github: 'https://github.com/Abhinavan2004/AI-Code-Reviewer',
            live: '#'
        }
    };

    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const projectCards = document.querySelectorAll('.project-card');
    const closeModal = document.getElementById('close-modal');
    const modalOverlay = document.getElementById('modal-overlay');

    const openProjectModal = (projectId) => {
        const data = projectData[projectId];
        if (!data) return;

        modalContent.innerHTML = `
            <h2 class="text-4xl font-bold mb-4 text-gradient">${data.title}</h2>
            <p class="text-xl text-text-primary mb-8 font-medium">${data.short_desc}</p>
            
            <div class="grid md:grid-cols-2 gap-12">
                <div class="space-y-8">
                    <div>
                        <h4 class="text-primary font-bold uppercase tracking-widest text-sm mb-3">Motivation</h4>
                        <p class="text-text-secondary leading-relaxed">${data.motivation}</p>
                    </div>
                    <div>
                        <h4 class="text-secondary font-bold uppercase tracking-widest text-sm mb-3">The Process</h4>
                        <p class="text-text-secondary leading-relaxed">${data.process}</p>
                    </div>
                    <div>
                        <h4 class="text-accent font-bold uppercase tracking-widest text-sm mb-3">Challenges</h4>
                        <p class="text-text-secondary leading-relaxed">${data.challenges}</p>
                    </div>
                </div>
                
                <div class="space-y-8">
                    <div>
                        <h4 class="text-text-primary font-bold mb-4">Technologies Used</h4>
                        <div class="flex flex-wrap gap-2">
                            ${data.technologies.map(tech => `
                                <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-secondary">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        ${data.live !== '#' ? `
                            <a href="${data.live}" target="_blank" class="px-8 py-4 bg-primary text-white font-bold rounded-xl text-center hover:scale-105 transition-all">Live Demo</a>
                        ` : ''}
                        <a href="${data.github}" target="_blank" class="px-8 py-4 glass text-text-primary font-bold rounded-xl text-center hover:scale-105 transition-all flex items-center justify-center gap-2">
                            <i data-lucide="github" class="w-5 h-5"></i> View Source
                        </a>
                    </div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    const hideModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    };

    closeModal?.addEventListener('click', hideModal);
    modalOverlay?.addEventListener('click', hideModal);
});


