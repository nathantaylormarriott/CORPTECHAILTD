const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

const cue = document.getElementById('scrollCue');
if (cue) {
  cue.addEventListener('click', () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  });
}

const form = document.querySelector('.cta-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'there';
    const interest = data.get('interest') || 'your initiative';
    alert(`Thanks ${name}! We'll send a blueprint for ${interest}.`);
    form.reset();
  });
}
