/* Typing Effect */

const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Java Backend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let currentChar = "";
let deleting = false;

const typing = document.getElementById("typing");

function type(){

    currentWord = words[wordIndex];

    if(!deleting){

        currentChar = currentWord.slice(0, ++charIndex);

    }else{

        currentChar = currentWord.slice(0, --charIndex);

    }

    typing.textContent = currentChar;

    if(!deleting && charIndex === currentWord.length){

        deleting = true;
        setTimeout(type,1000);
        return;

    }

    if(deleting && charIndex === 0){

        deleting = false;
        wordIndex++;

        if(wordIndex === words.length){
            wordIndex = 0;
        }
    }

    setTimeout(type,deleting ? 60 : 120);
}

type();

/* Counter Animation */

function animateCounter(id,target,speed){

    let count = 0;

    const element = document.getElementById(id);

    const update = setInterval(()=>{

        count++;

        element.innerText = count;

        if(count >= target){
            clearInterval(update);
        }

    },speed);
}

animateCounter("dsa",250,10);
animateCounter("projects-count",12,80);