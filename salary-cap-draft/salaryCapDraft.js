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
    constructor(budget) {
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
    
    //show statistics function: prints the statistics of the athlete
}

//readline code
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    const team1 = new Team(100);
    const team2 = new Team(100);

    function findAthleteByName(name) {
        return athletes.find(athlete => athlete.name === name);
    }

    function isAthleteInArray(name) {
        return athletes.findIndex(athlete => athlete.name === name) !== -1;
    }

    function removeAthleteFromArray(name) {
        const index = athletes.findIndex(athlete => athlete.name === name);
    
        if (index !== -1) {
            athletes.splice(index, 1);
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

    while ((team1.budget > 0 || team2.budget > 0) && athletes.length != 0){
        console.log(`\nCurrent Budgets - Team1: ${team1.budget}, Team2: ${team2.budget}`);
        console.log(`Draftable Athletes: ${athletes.filter(p => p.selectedBy === null).map(p => p.name)}`);

        //team1 select a player
        var complete1 = false; 
        while (complete1 == false){
            console.log("Team 1 Selection"); 
            const answer = await askYesNo('Do you want to see player stats?: ');
            if (answer === 'yes') {
                var check = true; 
                while (check){
                    const checkPlayerStat = await promptAsync('Which athlete\'\s stats do you want to see?: ');
                    const currAthlete = findAthleteByName(checkPlayerStat); 
                    currAthlete.showStats(); 
                    const ans = await askYesNo('Do you want to keep checking stats?: ');
                    if (answer === 'yes') {
                        continue; 
                    } else if (answer === 'no') {
                        console.log('Proceeding to player selection -->');
                        check = false; 
                        // Add your logic for 'no' case here
                    } else {
                        console.log('Invalid input. Please enter "yes" or "no".');
                        // Handle invalid input, you may choose to ask the question again
                    }
                }
            } else if (answer === 'no') {
                console.log('Proceeding to player selection -->');
                // Add your logic for 'no' case here
            } else {
                console.log('Invalid input. Please enter "yes" or "no".');
                // Handle invalid input, you may choose to ask the question again
            }
            const chooseAthlete = await promptAsync('Team 1, select an athlete: '); 
            const currentAthlete = findAthleteByName(chooseAthlete); 
            const diff = team1.budget - currentAthlete.value;
            if (isAthleteInArray(chooseAthlete) && diff > 0 && team1.selectedAthletes.length < 6){
                console.log(`You chose ${chooseAthlete}`); 
                team1.selectAthletes(currentAthlete); 
                team1.budget = diff; 
                removeAthleteFromArray(chooseAthlete); 
                complete1 = true;  
            } else if (!isAthleteInArray(chooseAthlete)){
                console.log(`You can not choose ${chooseAthlete}, they are already taken by another team. Try again`); 
            } else if (diff <= 0){
                console.log(`You can not choose ${chooseAthlete}, you don't have enough credits. Try again`); 
            } else if (team1.selectedAthletes.length >= 6){
                console.log(`You can not choose ${chooseAthlete}, you have already chosen 5 athletes. Your draft is over`);
                break;  
            }
        }

        console.log(`\nCurrent Budgets - Team1: ${team1.budget}, Team2: ${team2.budget}`);
        console.log(`Draftable Athletes: ${athletes.filter(p => p.selectedBy === null).map(p => p.name)}`);

        var complete2 = false; 
        while (complete2 == false){
            const chooseAthlete = await promptAsync('Team 2, select an athlete: '); 
            const currentAthlete = findAthleteByName(chooseAthlete); 
            const diff = team2.budget - currentAthlete.value;
            if (isAthleteInArray(chooseAthlete) && diff > 0 && team2.selectedAthletes.length < 6){
                console.log(`You chose ${chooseAthlete}`); 
                team2.selectAthletes(currentAthlete); 
                team2.budget = diff; 
                removeAthleteFromArray(chooseAthlete); 
                complete2 = true;  
            } else if (!isAthleteInArray(chooseAthlete)){
                console.log(`You can not choose ${chooseAthlete}, they are already taken by another team. Try again`); 
            } else if (diff <= 0){
                console.log(`You can not choose ${chooseAthlete}, you don't have enough credits. Try again`); 
            } else if (team2.selectedAthletes.length >= 6){
                console.log(`You can not choose ${chooseAthlete}, you have already chosen 5 athletes. Your draft is over`);
                break;  
            }
        }
        const answer = await askYesNo('Do you want to keep playing?: ');

        if (answer === 'yes') {
            console.log('You chose to proceed.');
            // Add your logic for 'yes' case here
        } else if (answer === 'no') {
            console.log('You chose not to proceed.');
            break; 
            // Add your logic for 'no' case here
        } else {
            console.log('Invalid input. Please enter "yes" or "no".');
            // Handle invalid input, you may choose to ask the question again
        }

    }

    // Print final teams
    // console.log("\nFinal Teams:");
    // console.log("Team 1:", team1.athletes.map(athlete => athlete.name));
    // console.log("Team 2:", team2.athletes.map(athlete => athlete.name));
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
