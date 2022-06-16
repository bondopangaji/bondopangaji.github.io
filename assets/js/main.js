// Copyright (c) 2022 Bondo Pangaji
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Custom switch theme w/ AlpineJS
 */
document.addEventListener('alpine:init', () => {
    Alpine.store('lightMode', {
        on: false,

        toggle() {
            this.on = !this.on
        }
    })
})

/**
 * Custom click behavior w/ AlpineJS
 */
function scrollToWhoami(e) {
    e.preventDefault();
    document.getElementById("whoami").scrollIntoView({
        behavior: "smooth",
    });
}

function scrollToKits(e) {
    e.preventDefault();
    document.getElementById("kits").scrollIntoView({
        behavior: "smooth",
    });
}

function scrollToRepositories(e) {
    e.preventDefault();
    document.getElementById("repositories").scrollIntoView({
        behavior: "smooth",
    });
}

function scrollToContact(e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
    });
}