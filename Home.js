document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded');
    
    const hero = document.querySelector('.hero');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    function initializeHome() {
        setupNavigation();
        setupHeroAnimation();
        setupScrollEffects();
        <div>
            <h1>Kenta Lange's Portfolio</h1>
            <p>I'm a computer science major at University at Albany. I'm always looking to improve my skills.</p>
            <p>
                Education<br/>
                University at Albany, State University of New York<br/>
                Expected Graduation: December 2025<br/>
                B.S in Computer Science, Minor in Math<br/>
                GPA 3.2
            </p>
        </div>

    }
    
    function setupNavigation() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    function setupHeroAnimation() {
        if (hero) {
            hero.classList.add('animate-in');
        }
    }
    
    function setupScrollEffects() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax');
            
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const windowHeight = window.innerHeight;
                
                if (scrolled > sectionTop - windowHeight + 100) {
                    section.classList.add('visible');
                }
            });
        });
    }
    
    initializeHome();
});