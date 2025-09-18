function toggleCategory(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector(".arrow");

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("down");
    } else {
        content.style.display = "block";
        arrow.classList.add("down");
    }
}

function showPopup(message, type) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.className = 'popup ' + type;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}


// Pls ignore the obviously visible flags bcs im lazy to encrypt
const flags = {
    // "challenge_crypto_1": "CBCTF{STOP-SITTING_ON-FENCES}",
    // "challenge_crypto_2": "CBCTF{you_captured_me_finally}",
    // "challenge_crypto_3": "CBCTF{.....}",
    // "challenge_exploit_1": "CBCTF{f0rm4t_str1ng_3xpl01t_succ3ss}",
    // "challenge_forensic_1": "CBCTF{y0ur3_1n_mY_sp0t}",
    // "challenge_forensic_3": "CBCTF{n0_m0r3_w4r5}",
    // "challenge_network_1": "CBCTF{cYb3Rw@r}",
    // "challenge_network_2": "CBCTF{HIDD3NM0RS3}",
    // "challenge_network_3": "CBCTF{.....}",
    // "challenge_misc_2": "CBCTF{d2hhdF9pc19nMDBnbGVfZG9ya2luZz8=}"
    // "challenge_misc_3": "CBCTF{.....}"
};


function checkFlag(challengeId) {
    const input = document.getElementById(challengeId).value.trim();
    const correctFlag = flags[challengeId];

    if (!correctFlag) {
        showPopup("Error: Unknown challenge ID", "error");
        return;
    }

    if (input === correctFlag) {
        showPopup("Correct! 🎉", "success");
    } else if (input === "") {
        showPopup("Please input a flag.", "error");
    } else {
        showPopup("Incorrect. Try again!", "error");
    }
}