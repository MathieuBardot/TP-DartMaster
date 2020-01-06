// 1ère partie
const inquirer = require('inquirer')

// 1 classe Joueur
class Joueur{
    constructor(name,score){
        this.name = name
        this.score = score
    }

    ChoixNombreJoueurs(N){
        let tab = new Array(N-1)
        for (let numberPlayers=2; numberPlayers<=N; numberPlayers++){
            tab[numberPlayers] = numberPlayers
        }
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'Nombre de Joueurs',
                message: 'Choisissez le nombre de joueurs :',
                choices: tab,
            },
            ])
            .then(answer => {
                console.info('Answer:',answer)
            })
    }
}

// 1 classe Mode de Jeu
class ModeDeJeu extends Joueur{
    constructor(){
        super()
    }

    ChoixModeJeu(){
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'Mode de Jeu ',
                message: 'Choisissez le mode de jeu :',
                choices: ['Le tour du monde','le 301','le Cricket'],
            },
            ])
            .then(answer => {
                console.info('Answer:',answer)
            })
    }

    // Mode 1 : Le tour du monde
    Mode1(){
        let secteur = 1;
        let N = 3;
        while (secteur != 20){
            for (let numberPlayers=0; numberPlayers<N; numberPlayers++){
                for (let numberFlechette = 1; numberFlechette <= 3; numberFlechette++){
                    inquirer
                        .prompt([
                        {
                            type: 'confirm',
                            name: `Joueur ${Joueur.name} sur secteur ${secteur}`,
                            message: `Joueur ${Joueur.name} est sur secteur ${secteur} ?`,
                        },
                        ])
                        .then(answer => {
                            console.log('Answer:',answer)
                            if (answer === true){
                                secteur = secteur + 1
                            }
                        })
                }
            }
        }
        console.log(`Bravo ${Joueur.name} vous avez gagné !`)
    }
}

// Test
let Players = new Joueur()
//const result = Players.ChoixNombreJoueurs(4)

let Game = new ModeDeJeu();
//const mode= Game.ChoixModeJeu()
const jeu1 = Game.Mode1()