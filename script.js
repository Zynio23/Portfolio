// Lista projektów - zamiast pisać je w HTML, przechowujemy je w tablicy 
const projects = [
    {
        title: "To-Do List",
        description: "Zaawansowany menadżer zadań w Pythonie.",
        link: "#"
    },
    {
        title: "Dziennik wydatków",
        description: "Aplikacja do śledzenia wydatków z zapsiem do pliku JSON.",
        link: "#"
    },
    {
        title: "Planowanie zakupów",
        description: "Aplikacja do korzystanie z listy zakupów z zapisem do pliku JSON.",
        link: "#"
    }
];

//-------------------------------------------------------------------------

// Funkcja generująca HTML dla projektów
function displayProjects() {
    const projectSection = document.getElementById("projects");  // Pobierz sekcję "Projekty"
    const projectContainer = document.createElement("div");  // Stwórz div na projekty
    projectContainer.classList.add("project-container");    // Dodaj klasy CSS na div-a

    projects.forEach((project, index) => {     // Przejdź przez każdy projekt w tablicy
        const projectDiv = document.createElement("div");    // Stworzony div dla pojedynczego projektu
        projectDiv.classList.add("project");        // Dodaje klasę CSS

        projectDiv.addEventListener("mouseenter", () => {
            projectDiv.style.transform = "perspective(1000px) rotateY(5deg) scale(1.05)";
            projectDiv.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.3)";
        });

        projectDiv.addEventListener("mouseleave", () => {
            projectDiv.style.transform = "perspective(1000px) rotateY(0deg) scale(1)";
            projectDiv.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        });

        // Dodaj animację AOS do projektów
        projectDiv.setAttribute("data-aos", "flip-left");
        if (index === 0) {
            projectDiv.setAttribute("data-aos-delay", "0");     // Pierwszy projekt bez opóźnienia
        } else {
            projectDiv.setAttribute("data-aos-delay", "100");       // Minimalne opóźnienie dla reszty
        }

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Zobacz projekt</a>
        `;

        projectContainer.appendChild(projectDiv);       // Dodaj projekt do kontenera
    });

    projectSection.appendChild(projectContainer);       // Dodaj cały kontener do sekcji "Projekty"
}

// Uruchom funkcję po załadowaniu strony
document.addEventListener("DOMContentLoaded", displayProjects);

//---------------------------------------------------------

// Obsługa formularza kontaktowego
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();     // Zapobiegam odświeżaniu strony

    // Pobieranie wartości wpisanych przez użytkownika
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    // Prosta walidacja (sprawdzamy czy pola nie są puste)
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Proszę wypełnić wszystkie pola!");
        return;
    }

    // Po wypełnieniu formularza pokazujemy komunikat
    document.getElementById("form-message").style.display = "block";

    // Czyszczenie pól formularza
    document.getElementById("contact-form").reset();
});



//---------------------------------------------------------
// Obsługa fali na przycisku form button 

// Efekt fali (ripple) dla przycisków formularza

document.querySelectorAll("form button").forEach(button => {
    button.addEventListener("click", function (e) {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");

        ripple.classList.add("ripple");
        ripple.style.left = `${e.clientX - rect.left - 30}px`;      // Wyśrodkowanie fali
        ripple.style.top = `${e.clientY - rect.top - 30}px`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 400);        // Po 400ms usuwa efekt, zniwelowanie obciążenia strony
    });
});


// Strzałka powrotu do góry 
const scrollToTopButton = document.getElementById("scrollToTop");

// Funkcja pokazująca / ukrywają strzałkę
window.addEventListener("scroll", () => {
    if(window.scrollY > 300) {          // Pojawia się po przewinięciu 300px w dół
        scrollToTopButton.style.display = "block";
    }else {
        scrollToTopButton.style.display = "none";
    }
});

// Obsługa kliknięcia w strzałkę
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});          // Płynne przewinięcie
});

