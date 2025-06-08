// Utility function to shuffle options
const shuffleOptions = (options) => {
  return [...options].sort(() => Math.random() - 0.5);
};

const questions = [
  {
    id: 1,
    type: "single",
    question: "What is the capital of France?",
    options: shuffleOptions(["Berlin", "London", "Paris", "Madrid"]),
    answer: "Paris"
  },
  {
    id: 2,
    type: "multi",
    question: "Which of the following are programming languages?",
    options: shuffleOptions(["HTML", "Python", "CSS", "JavaScript"]),
    answer: ["Python", "JavaScript"]
  },
  {
    id: 3,
    type: "fill",
    question: "_____ is the process of finding and fixing bugs.",
    answer: "Debugging"
  },
 {
  id: 4,
  type: "single",
  question: "Which company developed the Java programming language?",
  options: shuffleOptions(["Microsoft", "Sun Microsystems", "Apple", "IBM"]),
  answer: "Sun Microsystems"
 },
 {
  id: 5,
  type: "multi",
  question: "Which of the following are frontend technologies?",
  options: shuffleOptions(["React", "Node.js", "Angular", "Express"]),
  answer: ["React", "Angular"]
 },
 {
  id: 6,
  type: "fill",
  question: "The World Wide Web was invented by _____.",
  answer: "Tim Berners-Lee"
 },
 {
  id: 7,
  type: "single",
  question: "Which HTML tag is used to define an unordered list?",
  options: shuffleOptions(["<ol>", "<ul>", "<li>", "<list>"]),
  answer: "<ul>"
 },
 {
  id: 8,
  type: "multi",
  question: "Which of the following are valid JavaScript data types?",
  options: shuffleOptions(["Boolean", "Integer", "Undefined", "Float"]),
  answer: ["Boolean", "Undefined"]
 },
 {
  id: 9,
  type: "fill",
  question: "In CSS, the _____ property is used to change the text color.",
  answer: "color"
 },
 {
  id: 10,
  type: "single",
  question: "What does HTTP stand for?",
  options: shuffleOptions([
    "HyperText Transfer Protocol",
    "HyperText Transmission Process",
    "HighText Transfer Protocol",
    "Hyper Transfer Text Protocol"
  ]),
  answer: "HyperText Transfer Protocol"
}
];


export default questions;
