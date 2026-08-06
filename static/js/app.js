document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("generateBtn");
    const result = document.getElementById("result");

    button.addEventListener("click", async () => {
        button.disabled = true;
        button.textContent = "Generating...";

        result.classList.remove("visible");
        result.innerHTML = '<div class="loading">Generating keys...</div>';

        try {
            const response = await fetch("/generate");
            if (!response.ok) {
                throw new Error("Failed to generate keys");
            }

            const data = await response.json();
            const keys = data.keys || [];

            result.innerHTML = `
                <div class="result-panel">
                    <div class="result-title">Generated Keys</div>
                    <div class="keys-list">
                        ${keys.map((key) => `<div class="key-item">${key}</div>`).join("")}
                    </div>
                </div>
            `;
            result.classList.add("visible");
        } catch (error) {
            result.innerHTML = `<div class="result-panel error">${error.message}</div>`;
            result.classList.add("visible");
        } finally {
            button.disabled = false;
            button.textContent = "Generate";
        }
    });
});