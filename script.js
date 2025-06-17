document.addEventListener("DOMContentLoaded", function () {
    // Navbar toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Scroll spy logic
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    };

    // Contact form mailto handler
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value || "N/A";
        const email = document.getElementById("email").value || "N/A";
        const phone = document.getElementById("phone").value || "N/A";
        const subject = document.getElementById("subject").value || "No Subject";
        const message = document.getElementById("message").value || "No Message";

        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:sabarish1827@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        form.reset();
    });
});
