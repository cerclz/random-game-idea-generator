//Random Game Idea Generator

//Create lists with genres, setting, goals and rules to use them for randomly generating a game idea!

const genre = ['Action', 'Action-Adventure', 'Adventure', 'Puzzle', 'Role-playing', 'Simulation', 'Strategy', 'Sports', 'MMO', 'Sandbox', 'Metroidvania', 'Battle Royale']
const setting = ['Distant Future', 'Ancient Greece', 'Simulated Reality', 'Space Village', 'Fantasy', 'Mafia', 'Casino', 'Modern', 'Pirate']
const goals = ['Rescue the donkey', 'Find the space monkey', 'Kill 1000 chickens' ]
const rules = ['One Button Control', 'Limited Inventory Items', 'You are the enemy', 'One and a half enemy', 'Fluffy weapons', 'Move to the rhythm', 'Running out of power', 'Sorcery gone wrong', 'Side Effects']

//Create a list with vowels that helps to choose the beggining of the sentence
const vowels = ['a', 'e', 'i', 'o', 'u'];

//Select a random genre, setting, goal and rule from the lists
let selectGenre = genre[Math.floor(Math.random() * genre.length)];
let selectSetting = setting[Math.floor(Math.random() * setting.length)];
let selectGoal = goals[Math.floor(Math.random() * goals.length)];
let selectRule = rules[Math.floor(Math.random() * rules.length)];

//Select randomly if its online or not
let randomSelect = Math.floor(Math.random() * 2)
let online = false;
if (randomSelect === 1){
    online = true;
}

//Create the game idea
const generator = (gameGenre, gameSetting, gameGoal, bonusRule) => {
    let sentence = ''
    //Check if the game genre first letter is a vowel
    let letterCheck = gameGenre[0].toLowerCase();
    if (vowels.includes(letterCheck)){
        sentence = `An ${gameGenre} game, in ${gameSetting}, where you must ${gameGoal}! ${bonusRule}`;
    } else {
        sentence = `A ${gameGenre} game, in ${gameSetting}, where you must ${gameGoal}! ${bonusRule}`;
    }

    //Check if the game should be an online game and add it after the game genre
    let sentenceBreak = sentence.indexOf(' ');
    if (online){
        sentence = 'An online' + sentence.slice(sentenceBreak);
    }
    return sentence;
};

console.log(generator(selectGenre, selectSetting, selectGoal, selectRule))



