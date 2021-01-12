const trueBtn = document.querySelector('.true');
const falseBtn = document.querySelector('.false');
const score = document.querySelector('.score');
// const resetBtn = document.querySelector('.reset');
const questionBox = document.querySelector('.question');
const questions = [
    {
        question: "GM's LS1 engine was first introduced in 1997?", 
        answer: true 
    },
    {
        question: "In 1987 Buick produced the fastest production car the GNX?", 
        answer: true 
    },
    {
        question: "Dodge's Omni GLH-S, the S stands for snake?", 
        answer: false 
    },
    {
        question: "The Ferrair F40 features a large displacement v10 engine?", 
        answer: false 
    },
    {
        question: "The Honda Civic has the highest production volume of all cars?", 
        answer: false 
    },
    {
        question: "A turbocharger uses a exhaust energy to compress air?", 
        answer: true 
    },
    {
        question: "All Corvette's utlize a front engine layout?", 
        answer: false 
    },
    {
        question: "The fastest modified car in the mile long race is the Ford GT?", 
        answer: true 
    },
    {
        question: "Porsche uses a v6 engine that was once air cooled and now liquid cooled?", 
        answer: false 
    },
    {
        question: "The Dodge Viper utlizes a large v10 engine in all years?", 
        answer: true 
    },
]

// POPULATE QUESTIONS WILL BE A FUNCTION IF/ELSE ATM LAB TEXT CONTENT
// AFTER QUESTION IS ANSWERED MOVE ON TO NEXT QUESTION
// LET SCORE START AND 0/10 NEED TO COUNT UP CORRECT T/F INPUTS AND INCREMENT.

// true answer selection NEED TO COMPLETE 
trueBtn.addEventListener("click", function() {

})
// FALSE answer selection NEED TO COMPLETE 
falseBtn.addEventListener("click", function() {
    
})



// reset button is just a page refresh for now

function resetPage(){
    window.location.reload();
} 