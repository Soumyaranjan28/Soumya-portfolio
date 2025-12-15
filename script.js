// Skills data - easily editable to add new skills
const skills = [
    {
        title: "Java",
        description: "Object-oriented programming language with strong typing and extensive libraries for enterprise applications.",
        icon: "java.png",
        proficiency: 90,
        category: "Languages",
        link: "#"
    },
    {
        title: "Python",
        description: "Versatile scripting language known for its simplicity and powerful data science libraries.",
        icon: "python.png",
        proficiency: 85,
        category: "Languages",
        link: "#"
    },
    {
        title: "JavaScript",
        description: "Dynamic programming language essential for web development and interactive applications.",
        icon: "java-script.png",
        proficiency: 88,
        category: "Languages",
        link: "#"
    },
    {
        title: "React",
        description: "Popular JavaScript library for building user interfaces with component-based architecture.",
        icon: "⚛️",
        proficiency: 85,
        category: "Frontend",
        link: "#"
    },
    {
        title: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine for server-side development.",
        icon: "programing.png",
        proficiency: 80,
        category: "Backend",
        link: "#"
    },
    {
        title: "MongoDB",
        description: "NoSQL database for modern applications requiring flexible, scalable data storage.",
        icon: "MongoDB (1).png",
        proficiency: 78,
        category: "Databases",
        link: "#"
    },
    {
        title: "MySQL",
        description: "Relational database management system for structured data and complex queries.",
        icon: "sql-server.png",
        proficiency: 85,
        category: "Databases",
        link: "#"
    },
    {
        title: "Git",
        description: "Distributed version control system for tracking changes and collaborating on code.",
        icon: "github.png",
        proficiency: 92,
        category: "Tools",
        link: "#"
    },
    {
        title: "Docker",
        description: "Platform for developing, shipping, and running applications in containers.",
        icon: "social.png",
        proficiency: 75,
        category: "Tools",
        link: "#"
    },
   
];

// Project data - easily editable to add new projects
const projects = [
    {
        title: "E-Commerce Web App",
        description: "Full-stack e-commerce application built with React, Node.js, and MongoDB, featuring user authentication and payment integration.",
        image: "https://via.placeholder.com/400x200/cccccc/666666?text=E-Commerce+App",
        icon: "🛒",
        link: "#"
    },
    {
        title: "Task Management Tool",
        description: "Collaborative task management application with real-time updates using WebSockets and a responsive design.",
        image: "https://via.placeholder.com/400x200/cccccc/666666?text=Task+Management",
        icon: "📋",
        link: "#"
    },
    {
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for data analysis built with Python, Flask, and D3.js, displaying real-time metrics.",
        image: "https://via.placeholder.com/400x200/cccccc/666666?text=Data+Dashboard",
        icon: "📊",
        link: "#"

    },
    {
        title: "Mobile App Backend",
        description: "RESTful API for a mobile application using Express.js, with JWT authentication and database integration.",
        image: "https://via.placeholder.com/400x200/cccccc/666666?text=Mobile+Backend",
        icon: "📱",
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website built with HTML, CSS, and JavaScript, featuring dynamic content loading.",
        image: "https://via.placeholder.com/400x200/cccccc/666666?text=Portfolio+Site",
        icon: "💼",
        link: "#"
    },
    {
        title: "Chat Application",
        description: "Real-time chat application using Socket.io, React, and Node.js with user rooms and message history.",
        image: "https://via.placeholder.com/400x200/cccccc/666666?text=Chat+App",
        icon: "💬",
        link: "#"
    },
     
];

// DOM elements
const projectsGrid = document.getElementById('projects-grid');
const contactForm = document.getElementById('contact-form');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close the hamburger menu after navigation
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll arrow functionality
const scrollArrow = document.querySelector('.scroll-arrow');
if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    const isImage = /\.(png|jpg|jpeg|svg|gif)$/i.test(project.icon);
    const iconHtml = isImage
        ? `<img src="${project.icon}" alt="${project.title} icon" class="project-icon-img">`
        : `<div class="project-icon">${project.icon}</div>`;
    card.innerHTML = `
        ${iconHtml}
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link">View Project →</a>
        </div>
    `;
    return card;
}

// Function to create skill cards
function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    const isImage = /\.(png|jpg|jpeg|svg|gif)$/i.test(skill.icon);
    const iconHtml = isImage
        ? `<img src="${skill.icon}" alt="${skill.title} icon" class="skill-icon-img">`
        : `<div class="skill-icon">${skill.icon}</div>`;
    card.innerHTML = `
        ${iconHtml}
        <div class="skill-content">
            <h3 class="skill-title">${skill.title}</h3>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-proficiency">
                <div class="proficiency-bar">
                    <div class="proficiency-fill" style="width: ${skill.proficiency}%"></div>
                </div>
                <span class="proficiency-text">${skill.proficiency}%</span>
            </div>
            <span class="skill-category">${skill.category}</span>
            <a href="${skill.link}" class="skill-link">Learn More →</a>
        </div>
    `;
    return card;
}

// Load projects dynamically
function loadProjects() {
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

// Load skills dynamically
function loadSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skills.forEach(skill => {
            const card = createSkillCard(skill);
            skillsGrid.appendChild(card);
        });
    }
}

// Intersection Observer for fade-in animations
function setupFadeInObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all project cards and skill cards
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        observer.observe(card);
    });
}

// Contact form handling
function setupContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (in a real scenario, you'd send this to a server)
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I\'ll get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll progress bar
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// Scroll-triggered section animations
function setupSectionObserver() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load projects only on pages that have projects-grid
    if (projectsGrid) {
        loadProjects();
    }

    // Load skills only on pages that have skills-grid
    loadSkills();

    // Setup fade-in observer for both projects and skills
    setupFadeInObserver();

    // Setup contact form only on pages that have contact-form
    if (contactForm) {
        setupContactForm();
    }

    // Setup scroll progress and section animations
    updateScrollProgress();
    setupSectionObserver();
});
