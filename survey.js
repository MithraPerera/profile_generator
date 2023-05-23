const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`Here is your profile description: Hi my name is ${answer}. I love ${answer2} and I listen to ${answer3} when I am doing it. My favorite meal is ${answer4} and I love to eat ${answer5}. My favorite sport to play is ${answer6} and when I am not playing sports I am using my superpower of ${answer7} to save the world!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});