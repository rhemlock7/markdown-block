const scriptContainer = document.getElementById('final-script-container');
const inputForm = document.getElementById('input-form');
const inputTextArea = document.getElementById('input-text-area');
const copyButton = document.getElementById('copy-button')
const durationText = document.getElementById('video-duration')

const getVideoDuration = () => {
    const text = inputTextArea.value.trim(); // Get the value of the textarea and remove leading/trailing whitespace
    const words = text.split(/\s+/); // Split the text into an array of words using whitespace as the delimiter
    const wordCount = words.length; // Get the number of words in the array

    const totalSeconds = wordCount / 3;
    const minutes = Math.floor(totalSeconds / 60); // Calculate minutes
    const seconds = Math.floor(totalSeconds % 60); // Calculate remaining seconds

    durationText.textContent = `${minutes} minutes and ${seconds} seconds`;
}

function formatMarkdown(event) {
    event.preventDefault()
    const inputValue = inputTextArea.value
    const formattedScript = inputValue.replace(/(\s+-\s+)|[^a-zA-Z0-9.,\/'"$%&@!...()?']|[\r\n]+/g, ' ');

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

inputTextArea.addEventListener('input', getVideoDuration)