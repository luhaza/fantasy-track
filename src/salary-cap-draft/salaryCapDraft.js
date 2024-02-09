//the Athlete class for the Athlete object
class Athlete {
    constructor(name, value, school, year) {
        this.name = name;
        this.value = value;
        this.selectedBy = null; // To track which team has selected the player
        this.school = school; 
        this.year = year; 
    }

    showStats(){
        console.log(`Stats for ${this.name}: \n`);
        console.log(`Value: ${this.value} \n`);
        console.log(`School: ${this.school} \n`);
        console.log(`Year: ${this.year} \n`);
    }
}

//the Team class that allows a budget, array of selected athletes
class Team {
    constructor(name, budget) {
        this.name = name; 
        this.budget = budget;
        this.selectedAthletes = [];
    }

    //takes the chosen athlete and adds them to the team selectedAthletes array if allowed. 
    selectAthletes(athlete) {
        if (athlete.selectedBy === null && this.budget >= athlete.value) {
            this.selectedAthletes.push(athlete);
            athlete.selectedBy = this;
            this.budget -= athlete.value;
            return true;
        } else {
            return false;
        }
    }
    viewTeam(){
        const athleteNames = this.selectedAthletes.map(athlete => athlete.name);
        console.log(`${this.name} roster: `,athleteNames); 
    }
    
    //view team function
    //remove players from shopping cart function

}

//readline code
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isAthleteInArray(name, arr) {
    return arr.findIndex(athlete => athlete.name === name) !== -1;
}

function findAthleteByName(name, arr) {
    return arr.find(athlete => athlete.name === name);
}

function removeAthleteFromArray(name, arr) {
    const index = arr.findIndex(athlete => athlete.name === name);

    if (index !== -1) {
        arr.splice(index, 1);
        // console.log(`${name} has been removed from the array.`);
    } else {
        console.log(`${name} is not in the array.`);
    }
}

async function promptAsync(question){
    return new Promise((resolve) => {
        r1.question(question, resolve); 
    }); 
}

async function askYesNo(question) {
    return new Promise((resolve) => {
        r1.question(`${question} (yes/no): `, (answer) => {
            resolve(answer.toLowerCase());
        });
    });
}


//main function, contains all the draft logic
async function main() {
    // Define players with their values
    const athletes = [
        new Athlete("Graham Blanks", 16, "Harvard", 4),
        new Athlete("Nico Young", 16, "NAU", 3), 
        new Athlete("Luke Houser", 15, "UWash", 4), 
        new Athlete("Will Sumner", 15, "Georgia", 2), 
        new Athlete("Colin Sahlman", 14, "NAU", 2),
        new Athlete("Ethan Gregg", 14, "UW Lacrosse", 5),
        new Athlete("Christian Patzka", 12, "UW Whitewater", 4),
        new Athlete("Nate Lentz", 10, "Williams", 4), 
        new Athlete("Elias Lindgren", 10, "Williams", 5),
        new Athlete("Ryan Wilson", 12, "MIT", 6),
        new Athlete("Pat Theveny", 6, "Williams", 4),
        new Athlete("Tom Emery", 4, "Williams", 1),
        new Athlete("Nikhil DeNatale", 9, "Williams", 2), 
        new Athlete("Zachary Liu-Walter", 6, "Williams", 2), 
        new Athlete("Rick Yanashita", 2, "Williams", 2), 
    ];

    // Set up teams with a budget
    const team1 = new Team("Team 1", 100);
    const team2 = new Team("Team 2", 100);

    var roundNum = 0; 

    while ((team1.budget > 0 || team2.budget > 0) && athletes.length != 0){
        console.log(`\nCurrent Budgets - Team1: ${team1.budget}, Team2: ${team2.budget}`);
        console.log(`Draftable Athletes: ${athletes.filter(p => p.selectedBy === null).map(p => p.name)}`);
        console.log(team1.viewTeam());
        console.log(team2.viewTeam()); 

        //team1 select a player
        var complete1 = false; 
        while (complete1 == false){
            console.log("Team 1 Selection"); 
            const answer = await askYesNo('Do you want to see player stats?: ');
            if (answer === 'yes') {
                var check = true; 
                while (check){
                    try {
                        const checkPlayerStat = await promptAsync('Which athlete\'\s stats do you want to see?: ');
                        const currAthlete = findAthleteByName(checkPlayerStat, athletes); 
                        currAthlete.showStats(); 
                        const ans = await askYesNo('Do you want to keep checking stats?: ');
                        if (ans === 'yes') {
                            continue; 
                        } else if (ans === 'no') {
                            console.log('Proceeding to player selection -->');
                            check = false; 
                            // Add your logic for 'no' case here
                        } else {
                            console.log('Invalid input. Please enter "yes" or "no".');
                            // Handle invalid input, you may choose to ask the question again
                        }
                      } catch (error) {
                        console.error(error);
                        console.log('Please type a athlete\'\s name, or type the name correctly'); 
                        continue; 
                      }
                }
            } else if (answer === 'no') {
                console.log('Proceeding to player selection -->');
                // Add your logic for 'no' case here
            } else {
                console.log('Invalid input. Please enter "yes" or "no".');
                // Handle invalid input, you may choose to ask the question again
            }

            try {
                const chooseAthlete = await promptAsync('Team 1, select an athlete: ');
                const currentAthlete = findAthleteByName(chooseAthlete, athletes); 
                const diff = team1.budget - currentAthlete.value;
                if (isAthleteInArray(chooseAthlete, athletes) && diff > 0 && team1.selectedAthletes.length < 6){
                    console.log(`You chose ${chooseAthlete}`); 
                    team1.selectAthletes(currentAthlete); 
                    team1.budget = diff; 
                    removeAthleteFromArray(chooseAthlete, athletes); 
                    complete1 = true;  
                } else if (!isAthleteInArray(chooseAthlete, athletes)){
                    console.log(`You can not choose ${chooseAthlete}, they are already taken by another team. Try again`); 
                } else if (diff <= 0){
                    console.log(`You can not choose ${chooseAthlete}, you don't have enough credits. Try again`); 
                } else if (team1.selectedAthletes.length >= 6){
                    console.log(`You can not choose ${chooseAthlete}, you have already chosen 5 athletes. Your draft is over`);
                    break;  
                } 
            } catch (error) {
                console.error(error);
                console.log('Please type a athlete\'\s name, or type the name correctly'); 
                continue; 
                // Expected output: ReferenceError: nonExistentFunction is not defined
                // (Note: the exact output may be browser-dependent)
            }
        }

        console.log(`\nCurrent Budgets - Team1: ${team1.budget}, Team2: ${team2.budget}`);
        console.log(`Draftable Athletes: ${athletes.filter(p => p.selectedBy === null).map(p => p.name)}`);
        console.log(team1.viewTeam());
        console.log(team2.viewTeam());

        var complete2 = false; 
        while (complete2 == false){
            console.log("Team 2 Selection"); 
            const answer = await askYesNo('Do you want to see player stats?: ');
            if (answer === 'yes') {
                var check = true; 
                while (check){
                    try {
                        const checkPlayerStat = await promptAsync('Which athlete\'\s stats do you want to see?: ');
                        const currAthlete = findAthleteByName(checkPlayerStat, athletes); 
                        currAthlete.showStats(); 
                        const ans = await askYesNo('Do you want to keep checking stats?: ');
                        if (ans === 'yes') {
                            continue; 
                        } else if (ans === 'no') {
                            console.log('Proceeding to player selection -->');
                            check = false; 
                            // Add your logic for 'no' case here
                        } else {
                            console.log('Invalid input. Please enter "yes" or "no".');
                            // Handle invalid input, you may choose to ask the question again
                        }
                      } catch (error) {
                        console.error(error);
                        console.log('Please type a athlete\'\s name, or type the name correctly'); 
                        continue; 
                      }
                }
            } else if (answer === 'no') {
                console.log('Proceeding to player selection -->');
                // Add your logic for 'no' case here
            } else {
                console.log('Invalid input. Please enter "yes" or "no".');
                // Handle invalid input, you may choose to ask the question again
            }

            try {
                const chooseAthlete = await promptAsync('Team 2, select an athlete: ');
                const currentAthlete = findAthleteByName(chooseAthlete, athletes); 
                const diff = team2.budget - currentAthlete.value;
                if (isAthleteInArray(chooseAthlete, athletes) && diff > 0 && team2.selectedAthletes.length < 6){
                    console.log(`You chose ${chooseAthlete}`); 
                    team2.selectAthletes(currentAthlete); 
                    team2.budget = diff; 
                    removeAthleteFromArray(chooseAthlete, athletes); 
                    complete2 = true;  
                } else if (!isAthleteInArray(chooseAthlete, athletes)){
                    console.log(`You can not choose ${chooseAthlete}, they are already taken by another team. Try again`); 
                } else if (diff <= 0){
                    console.log(`You can not choose ${chooseAthlete}, you don't have enough credits. Try again`); 
                } else if (team2.selectedAthletes.length >= 6){
                    console.log(`You can not choose ${chooseAthlete}, you have already chosen 5 athletes. Your draft is over`);
                    break;  
                } 
            } catch (error) {
                console.error(error);
                console.log('Please type a athlete\'\s name, or type the name correctly'); 
                continue; 
                // Expected output: ReferenceError: nonExistentFunction is not defined
                // (Note: the exact output may be browser-dependent)
            }
        }
        roundNum++; 

        console.log(`END OF ROUND ${roundNum}`); 
        const continueGame = await askYesNo('Do you want to continue playing?: ');
        if (continueGame === 'yes') {
            console.log('Proceeding to next round -->'); 
            continue; 
        } else if (continueGame === 'no') {
            break; 
            // Add your logic for 'no' case here
        } else {
            console.log('Invalid input. Please enter "yes" or "no".');
            // Handle invalid input, you may choose to ask the question again
        }
    }

    // Print final teams
    console.log("\nFinal Teams:");
    console.log(team1.viewTeam());
    console.log(team2.viewTeam());
    r1.close(); 

    

    // Draft process
    // athletes.forEach(athlete => {
    //     console.log(`\nCurrent Budgets - Team1: ${team1.budget}, Team2: ${team2.budget}`);
    //     console.log(`Draftable Athletes: ${athletes.filter(p => p.selectedBy === null).map(p => p.name)}`);

    //     // Team 1 selects a player
    //     const athleteSelectedByTeam1 = team1.selectAthletes(athlete);
    //     console.log(athleteSelectedByTeam1 ? `Team1 selects ${athlete.name}` : `Team1 cannot select ${athlete.name}`);

    //     // Team 2 selects a player
    //     const athleteSelectedByTeam2 = team2.selectAthletes(athlete);
    //     console.log(athleteSelectedByTeam2 ? `Team2 selects ${athlete.name}` : `Team2 cannot select ${athlete.name}`);
    // });

    
    
}
// Run the script
main();
