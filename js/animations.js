document.addEventListener('DOMContentLoaded', () => {
    // Animation for Skill Progress Bars on Scroll
    const skillProgressBars = document.querySelectorAll('.skills-section .progress-bar');

    const animateSkillBars = () => {
        skillProgressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isInView = (rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50 && rect.bottom >= 0);

            if (isInView && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('aria-valuenow');
                bar.style.width = width + '%';
                bar.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars);

    // Intersection Observer for General Scroll Animations
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    scrollAnimateElements.forEach(element => {
        observer.observe(element);
    });

    // Special handling for language switcher if it affects content position
    const langButtons = document.querySelectorAll('[data-lang-set]');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(() => {
                scrollAnimateElements.forEach(element => {
                    element.classList.remove('animated');
                    element.style.opacity = '0';
                    if (element.classList.contains('header-animate')) {
                         element.style.transform = 'translateY(-30px)';
                    } else {
                         element.style.transform = 'translateY(30px)';
                    }
                    observer.observe(element);
                });
                skillProgressBars.forEach(bar => {
                    bar.classList.remove('animated');
                    bar.style.width = '0%';
                });
                animateSkillBars();
            }, 300);
        });
    });
});