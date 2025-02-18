// intro

document.addEventListener("DOMContentLoaded", () => {
    const introBtn = document.querySelector(".introButton");
    introBtn.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.add("hidden");
        const intro = document.querySelector(".introDisplay");
        intro.classList.remove("hidden");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".introExitButton");
    closeButton.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.remove("hidden");
        const intro = document.querySelector(".introDisplay");
        intro.classList.add("hidden");
    });
});

// work tab 

document.addEventListener("DOMContentLoaded", () => {
    const introBtn = document.querySelector(".workButton");
    introBtn.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.add("hidden");
        const work = document.querySelector(".workDisplay");
        work.classList.remove("hidden");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".workExitButton");
    closeButton.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.remove("hidden");
        const work = document.querySelector(".workDisplay");
        work.classList.add("hidden");
    });
});

// about

document.addEventListener("DOMContentLoaded", () => {
    const introBtn = document.querySelector(".aboutButton");
    introBtn.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.add("hidden");
        const about = document.querySelector(".aboutDisplay");
        about.classList.remove("hidden");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".aboutExitButton");
    closeButton.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.remove("hidden");
        const about = document.querySelector(".aboutDisplay");
        about.classList.add("hidden");
    });
});

// contact

document.addEventListener("DOMContentLoaded", () => {
    const introBtn = document.querySelector(".contactButton");
    introBtn.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.add("hidden");
        const contacts = document.querySelector(".contactDisplay");
        contacts.classList.remove("hidden");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".contactExitButton");
    closeButton.addEventListener("click", () => {
        const mainTab = document.querySelector(".mainTab");
        mainTab.classList.remove("hidden");
        const contacts = document.querySelector(".contactDisplay");
        contacts.classList.add("hidden");
    });
});

