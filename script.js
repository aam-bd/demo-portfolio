// script.js
(function() {
  // Live date & time in footer
  function updateDateTime() {
    const now = new Date();
    const options = { 
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: true
    };
    const dateTimeStr = now.toLocaleString('en-US', options);
    const el = document.getElementById('liveDateTime');
    if (el) {
      el.textContent = '🕒 ' + dateTimeStr;
    }
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Contact form validation (pure JS)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // Reset validation
      [name, email, message].forEach(field => field.classList.remove('is-invalid'));

      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
      }
      if (!email.value.trim() || !email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
      }
      if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
      }

      if (isValid) {
        alert('✅ Message sent! (This is a demo. Your message would be delivered to aalmamun871@gmail.com)');
        form.reset();
      }
    });
  }
})();