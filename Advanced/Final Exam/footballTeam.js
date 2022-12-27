class footballTeam {
    constructor(clubName, country, invitedPlayers) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let result = [];
        for (let person of footballPlayers){
            let [name, age, pValue] = person.split('/');
            if(this.invitedPlayers.length === 0) {
                this.invitedPlayers.push({name, age, pValue})
                result.push(name);
            } else {
        for (let i = 0; i < this.invitedPlayers.length; i++) {
            if(this.invitedPlayers[i].name === name) {
                if(this.invitedPlayers[i].pValue < pValue){
                    this.invitedPlayers[i].pValue = pValue;
                }
            } else {
                this.invitedPlayers.push({name, age, pValue});
                result.push(name);
                break;
                }
            }
        }
    }
        return `You successfully invite ${result.join(', ')}.`;
    }
    signContract(selectedPlayer){
        let [name, offer] = selectedPlayer.split('/');
        let notInList = true;
        for(let i = 0; i< this.invitedPlayers.length; i++) {
            if(this.invitedPlayers[i].name === name) {
                notInList = false;
                if(this.invitedPlayers[i].pValue > offer) {
                    let diff = Math.abs(Number(this.invitedPlayers[i].pValue) - Number(offer));
                    throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`);
                } else {
                    this.invitedPlayers[i].pValue = 'Bought';
                }
            }
        }
        if(notInList){
            throw new Error (`${name} is not invited to the selection list!`);
        } 
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }
    ageLimit(name, age){
        let notInList = true;
        for(let i = 0; i< this.invitedPlayers.length; i++) {
            if(this.invitedPlayers[i].name === name) {
                notInList = false;
                if(this.invitedPlayers[i].age < age){
                    let diff = Number(age) - Number(this.invitedPlayers[i].age);{
                        if(diff < 5){
                            return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
                        } else {
                            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                        }
                    }
                } else {
                    return `${name} is above age limit!`;
                }
            }

        }
        if(notInList){
            throw new Error (`${name} is not invited to the selection list!`);
        }
    }
    transferWindowResult(){
        let result = [];
        result.push('Players list:');
        let sorted = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        for (let player of sorted) {
            result.push(`Player ${player.name}-${player.pValue}`);
        }
        return result.join('\n');
    }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

