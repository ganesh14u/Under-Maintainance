  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });


 document.getElementById("emailForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    await fetch("https://script.google.com/macros/s/AKfycby-y47K6tunyMzt6jY1zXdm44SeG53wwVZQq-thtalZW5c_jGWHZaiLzLRioA17n9jwsA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "email=" + encodeURIComponent(email),
    });

    alert("Thank you! Your email has been saved.");
    e.target.reset();
  });