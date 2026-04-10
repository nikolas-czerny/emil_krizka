
const templateBox = document.getElementById("consultationTemplate");
const copyBtn = document.getElementById("copyTemplateBtn");
const templateText = document.getElementById("consultationTemplateText");

async function copyTemplateText() {
    const text = templateText.textContent.trim();

    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Zkopírováno";
        setTimeout(() => {
            copyBtn.textContent = "Zkopírovat";
        }, 1600);
    } catch (err) {
        copyBtn.textContent = "Nešlo zkopírovat";
        setTimeout(() => {
            copyBtn.textContent = "Zkopírovat";
        }, 1600);
    }
}

templateBox.addEventListener("click", copyTemplateText);

copyBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    copyTemplateText();
});

