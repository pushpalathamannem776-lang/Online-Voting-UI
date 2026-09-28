function castVote() {

    const selectedCandidate =
        document.querySelector(
            'input[name="candidate"]:checked'
        );

    const message =
        document.getElementById("message");

    if (!selectedCandidate) {
        message.textContent =
            "Please select a candidate.";
        message.style.color = "red";
        return;
    }

    message.textContent =
        "✓ Demo vote recorded for " +
        selectedCandidate.value;

    message.style.color = "green";

    document.querySelectorAll(
        'input[name="candidate"]'
    ).forEach(input => {
        input.disabled = true;
    });
}