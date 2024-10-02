/* Variables
-------------------------------------------------- */
const pronoun = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher'];
const activity = ['sat on', 'ate', 'danced with', 'saw', 'kissed'];
const emotion = ['a funny', 'a scary', 'a goofy', 'a barking', 'a fat'];
const living_things = ['goat', 'monkey', 'fish', 'cow', 'bug'];
const loactions = ['on the moon', 'on the chair', 'on the grass', 'in my shoes', 'in my soup'];
var textToSpeak = '';

const story_outcome = document.getElementById('story_satatus');
const speakStatusoutcome = document.getElementById('speak-status');
const resetStatusoutcome = document.getElementById('reset-status');

const pronounValue = document.querySelector('#pronoun_');
const actionValue = document.querySelector('#action');
const emotionValue = document.querySelector('#emotion-value');
const animalValue = document.querySelector('#livingnoun-value');
const loactionValue = document.querySelector('#place-value');

const synth = window.speechSynthesis; 

function speaking(string) {
    
    if (synth.speaking) {
        console.error("SpeechSynthesis is already speaking.");
        return;
    }
    var utterThis = new SpeechSynthesisUtterance(string);
   
    synth.speak(utterThis);
}

function Random_Word(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function createRandomStory() {
    let storyy = ''; 
    let count = 0;   

    while (count < 5) { 
        storyy += `${Random_Word(pronoun)} ${Random_Word(activity)} ${Random_Word(emotion)} ${Random_Word(living_things)} ${Random_Word(loactions)}. `;
        count++;
    }

    return storyy.trim();
}

document.getElementById('Tittle-button').addEventListener('click', function() {
    const noun = Random_Word(pronoun);
    pronounValue.textContent = noun;
    textToSpeak += noun + " ";
});

document.getElementById('Action-button').addEventListener('click', function() {
    const act = Random_Word(activity);
    actionValue.textContent = act;
    textToSpeak += act + " ";
});

document.getElementById('Emotion-button').addEventListener('click', function() {
    const emot = Random_Word(emotion);
    emotionValue.textContent = emot;
    textToSpeak += emot + " ";
});

document.getElementById('Animal-button').addEventListener('click', function() {
    const animall = Random_Word(living_things);
    animalValue.textContent = animall;
    textToSpeak += animall + " ";
});

document.getElementById('Location-button').addEventListener('click', function() {
    const loactionn = Random_Word(loactions);
    loactionValue.textContent = loactionn;
    textToSpeak += loactionn + " ";
});

document.querySelector('#reset_button').addEventListener('click', function() {
    textToSpeak = '';
    pronounValue.textContent = '';
    actionValue.textContent = '';
    emotionValue.textContent = '';
    animalValue.textContent = '';
    loactionValue.textContent = '';
    story_outcome.textContent = '';
    speakStatusoutcome.textContent = '';
    synth.cancel(); 
});

document.querySelector('#speak_button').addEventListener('click', function() {
    if (textToSpeak.trim() !== "") {
        speaking(textToSpeak);
        speakStatusoutcome.textContent = "Story running 🗣️";
    } else {
        speakStatusoutcome.textContent = "No story to speak. Please create a story first.";
    }
});

document.querySelector('#create_button').addEventListener('click', function() {
    const story = createRandomStory();
    story_outcome.innerHTML = story; // 
    speaking(story); 
});

document.getElementById('howToUseButton').addEventListener('click', function() {
    var instructionBox = document.getElementById('instructionBox');
    
    // Toggle the display property
    if (instructionBox.style.display === 'none') {
        instructionBox.style.display = 'block';  
    } else {
        instructionBox.style.display = 'none';  
    }
});
