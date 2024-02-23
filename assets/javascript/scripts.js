const scriptContainer = document.getElementById('final-script-container');
const inputForm = document.getElementById('input-form');
const inputTextArea = document.getElementById('input-text-area');
const copyButton = document.getElementById('copy-button')


function formatMarkdown(event) {
    event.preventDefault()
    const inputValue = inputTextArea.value
    const formattedScript = inputValue.replace(/(\s+-\s+)|[^a-zA-Z0-9.,\/!'...()?]|[\r\n]+/g, ' ')


    console.log(formattedScript.trim())
    scriptContainer.textContent = formattedScript.trim();
}

inputForm.addEventListener('submit', formatMarkdown)

copyButton.addEventListener('click', function() {
    scriptContainer.select();
    try {
        const successful = document.execCommand('copy'); // Copy the selected content to the clipboard
        const message = successful ? 'Text copied to clipboard' : 'Unable to copy text to clipboard';
        console.log(message);
    } catch (err) {
        console.error('Error copying text to clipboard:', err);
    }
});