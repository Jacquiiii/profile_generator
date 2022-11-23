const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  let userName = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    let activity = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      let music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        let meal = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          let mealItem = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            let sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              let superpower = answer;

              console.log(`${userName} loves listening to ${music} while ${activity}, devouring ${mealItem} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});

