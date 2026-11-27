const progressBars = document.querySelectorAll(".progress-fill");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const progress = entry.target.dataset.progress;
            entry.target.style.width = progress + "%";
        }
    });
});
progressBars.forEach((bar) => {
    observer.observe(bar);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});


const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "0px 0px 50px 0px"
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("active");
    });
}


const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    alert("Message sent successfully!");
    contactForm.reset();
});

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();