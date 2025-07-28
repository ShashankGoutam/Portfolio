// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2, /* Trigger when 20% of the item is visible */
    rootMargin: "0px 0px -50px 0px" /* Adjust when it appears slightly earlier */
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target); /* Stop observing once it has appeared */
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Horizontal scrolling for projects section
const projectsContainer = document.getElementById('projectsContainer');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');

scrollLeftBtn.addEventListener('click', () => {
    // Scroll by the width of one card + gap
    const cardWidth = projectsContainer.querySelector('.card').offsetWidth;
    const gap = parseFloat(getComputedStyle(projectsContainer).gap);
    projectsContainer.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    // Scroll by the width of one card + gap
    const cardWidth = projectsContainer.querySelector('.card').offsetWidth;
    const gap = parseFloat(getComputedStyle(projectsContainer).gap);
    projectsContainer.scrollBy({
        left: (cardWidth + gap),
        behavior: 'smooth'
    });
});
