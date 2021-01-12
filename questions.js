const collectAnswers = require("./lib/collectAnswers");
const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with Node JS? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`question answers: ${answer}`));

answerEvents.on("complete", answers => {
  console.log(`Thank you for your answers`);
  console.log(answers);
  process.exit();
});

answerEvents.on("complete", () => process.exit());
