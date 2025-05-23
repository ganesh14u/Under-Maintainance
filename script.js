  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });


 document.getElementById("emailForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzILTpDZNvwYRoXSt-Q_9w8yjKmV4pKnw2C2HcnGGfwdn0SdPn4u3nef8pSHrjSCLtk/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "email=" + encodeURIComponent(email),
      });

      const result = await response.text();  // Important: get raw text, not JSON

      console.log("Server response:", result); // Check this in browser console

      if (result.includes("SAVED")) {
        alert("Thank you! Your email has been saved.");
      } else if (result.includes("EXISTS")) {
        alert("This email is already registered.");
      } else {
        alert("Something went wrong. Try again.");
      }

      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
  });

