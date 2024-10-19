// Create a new audio element
const audio = new Audio("sounds/good_day_by_greg_stree.mp3");

// Set autoplay and loop properties
audio.autoplay = true;  // Automatically play the audio on page load
audio.loop = true;      // Set the audio to loop continuously

// Restore the previous time position if available in localStorage
if (localStorage.getItem("audioCurrentTime")) {
    audio.currentTime = localStorage.getItem("audioCurrentTime");
}

// Check localStorage for audio playback state and play the audio accordingly
if (localStorage.getItem("audioPlaying") === "true") {
    audio.play(); // Play if it was previously playing
} else if (localStorage.getItem("audioPlaying") === "false") {
    audio.pause(); // Pause if it was paused
}


// Function to toggle audio playback (play/pause)
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        localStorage.setItem("audioPlaying", "true");  // Save the play state
    } else {
        audio.pause();
        localStorage.setItem("audioPlaying", "false"); // Save the pause state
    }
}

// Save the current time and pause audio when leaving the page
window.addEventListener("beforeunload", () => {
    localStorage.setItem("audioCurrentTime", audio.currentTime); // Save current playback time
    audio.pause(); // Pause audio when navigating away
});

// Expose the toggleAudio function globally for use with buttons
window.toggleAudio = toggleAudio;
