
let sign = ["the Sun", "the Comet", "the Moon"];
let luckLevel = ["great luck", "bad luck", "good luck"];
let advice = ["go outside", "learn to code", "eat pizza"];

function generateFortune() {
let randomSign = sign[Math.floor(Math.random() * sign.length)];
let randomLuck = luckLevel[Math.floor(Math.random()* luckLevel.length)]
let randomAdvice = advice[Math.floor(Math.random()* advice.length)]

let message = `Your sign is ${randomSign}. You are having ${randomLuck}.
You should ${randomAdvice}`;

console.log(message);
}


generateFortune();
