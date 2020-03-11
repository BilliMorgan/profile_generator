// Trio programmed by @d0ugr, @Linh095 and @BilliMorgan
const readline = require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});
const info = {
  name: {
    question: "What's your name?",
    answer:   ""
  },
  activity: {
    question: "What's an activity you like doing?",
    answer:   ""
  },
  music: {
    question: "What do you listen to while doing that?",
    answer:   ""
  },
  meal: {
    question: "Which meal is your favourite (eg: dinner, brunch, etc.)",
    answer:   ""
  },
  food: {
    question: "What's your favourite thing to eat for that meal?",
    answer:   ""
  },
  sport: {
    question: "Which sport is your absolute favourite?",
    answer:   ""
  },
  superpower: {
    question: "What is your superpower? In a few words, tell us what you are amazing at!",
    answer:   ""
  }
};
const questions = Object.keys(info);
let currentQuestion = 0;
const nextQuestion = () => {
  rl.question(`${info[questions[currentQuestion]].question} `, (answer) => {
    // info[questions[currentQuestion++]] = answer;
    info[questions[currentQuestion]].answer = answer;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      nextQuestion();
    } else {
      rl.close();
      dumpProfile(info);
    }
  });
};
const dumpProfile = (info) => {
  // // console.log(`\nSO MUCH BLAH!!!  ${JSON.stringify(info)}`);
  // console.log(`\nSO MUCH BLAH!!!`);
  // for (const key in info) {
  //   console.log(`${key}: ${info[key]}`)
  // }
  console.log(
    `\nHi, my name is ${info.name.answer} and I'm totally amazing.\nI like to listen to ${info.music.answer} while ${info.activity.answer}.\n` +
    `Eating ${info.food.answer} for ${info.meal.answer} then playing ${info.sport.answer} gives me special ${info.superpower.answer} powers.`
  );
};
nextQuestion();
// rl.on("line", (input) => {
//   console.log("YO");
//   console.log(`input: ${input}`);
//   if (currentQuestion < questions.length) {
//     nextQuestion();
//     currentQuestion++;
//   } else {
//     rl.close();
//     dumpProfile();
//   }
// });