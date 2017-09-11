const question = [
  "What did you learn yesterday/this week?",
  "What excites or interests you about coding?",
  "What is a recent technical challenge you experienced and how did you solve it?",
  "What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?",
  "If you have 5 different stylesheets, how would you best integrate them into the site?",
  "How would you optimize a website's assets/resources?",
  "How many resources will a browser download from a given domain at a time? (What are the exceptions?)",
  "Name 3 ways to decrease page load (perceived or actual load time).",
  "Describe how you would create a simple slideshow page.",
  "Explain some of the pros and cons for CSS animations versus JavaScript animations.",
  "What does CORS stand for and what issue does it address?",
  "What does a doctype do?",
  "What is the difference between full standards mode, almost standards mode and quirks mode?",
  "What is the difference between HTML and XHTML?",
  "Are there any problems with serving pages as application/xhtml+xml?",
  "How do you serve a page with content in multiple languages?",
  "What are data- attributes good for?",
  "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
  "Describe the difference between a cookie, sessionStorage and localStorage.",
  "Describe the difference between <script>, <script async> and <script defer>.",
  "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
  "What is progressive rendering?",
  "What is the difference between classes and IDs in CSS?",
  "What's the difference between \"resetting\" and \"normalizing\" CSS? Which would you choose, and why?",
  "Describe Floats and how they work.",
  "Describe z-index and how stacking context is formed.",
  "Describe BFC(Block Formatting Context) and how it works.",
  "What are the various clearing techniques and which is appropriate for what context?",
  "Explain CSS sprites, and how you would implement them on a page or site.",
  "What are your favourite image replacement techniques and which do you use when?",
  "How would you approach fixing browser-specific styling issues?",
  "How do you serve your pages for feature-constrained browsers?",
  "What are the different ways to visually hide content (and make it available only for screen readers)?",
  "Have you ever used a grid system, and if so, what do you prefer?",
  "Have you used or implemented media queries or mobile specific layouts/CSS?",
  "Explain event delegation",
  "Explain how this works in JavaScript",
  "Explain how prototypal inheritance works",
  "What do you think of AMD vs CommonJS?",
  "Explain why the following doesn't work as an IIFE: function foo(){ }();.",
  "What's the difference between a variable that is: null, undefined or undeclared?",
  "What is a closure, and how/why would you use one?",
  "What's a typical use case for anonymous functions?",
  "How do you organize your code? (module pattern, classical inheritance?)",
  "What's the difference between host objects and native objects?",
  "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
  "What's the difference between .call and .apply?",
  "Explain Function.prototype.bind.",
  "Why is it called a Ternary expression, what does the word \"Ternary\" indicate?",
  "What is \"use strict\";? what are the advantages and disadvantages to using it?",
  "Create a for loop that iterates up to 100 while outputting **\"fizz\"** at multiples of 3, **\"buzz\"** at multiples of 5 and **\"fizzbuzz\"** at multiples of 3 and 5",
  "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
  "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
  "Explain what a single page app is and how to make one SEO-friendly.",
  "What is the extent of your experience with Promises and/or their polyfills?",
  "What are the pros and cons of using Promises instead of callbacks?",
  "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
  "What are some advantages/disadvantages to testing your code?",
  "What tools would you use to test your code's functionality?",
  "What is the difference between a unit test and a functional/integration test?",
  "What is the purpose of a code style linting tool?",
  "What tools would you use to find a performance bug in your code?",
  "What are some ways you may improve your website's scrolling performance?",
  "What are the differences between Long-Polling, Websockets and Server-Sent Events?",
  "What are HTTP methods? List all HTTP methods that you know, and explain them."
];


// returns a random number
function getRandom(min, max) {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
}

// get length of array
const arrLen = question.length;

// get random question to put onto page
(function getQuestion(arr) {
  // get random number
  const randomNumber = getRandom(0, arrLen - 1);

  // get question
  const randomQuestion = question[randomNumber];

  // attach question to page
  const divQuestion = document.getElementById('quote');
  const paraQuestion = document.createElement('p');
  paraQuestion.textContent = randomQuestion;
  divQuestion.appendChild(paraQuestion);
})();
