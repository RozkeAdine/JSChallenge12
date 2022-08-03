const data1 =
    {
        temp1: 17,
        temp2: 21,
        temp3: 23,
        screen: function (selected)
                { const choice = parseInt(selected)
                    if (choice === 1) {
                        console.log(this.temp1 + ' degrés dans ' + choice + ' jours d\'après le tableau 1');
                    } else if (choice === 2) {
                            console.log(this.temp2 + ' degrés dans ' + choice + ' jours d\'après le tableau 1');
                    } else if (choice === 3) {
                            console.log(this.temp3 + ' degrés dans ' + choice + ' jours d\'après le tableau 1');
                    } else {
                    console.log('Nous n\'avons pas de données à  ' + choice + ' jours.' +
                        ' Veuillez choisir un nombre de jour plus bas que ' + choice + ' jours.');

                }
                }

    };
const selectedProperty = prompt('en rapport avec le tableau 1. Tape à combien de jour tu veux afficher la météo ') ;
data1.screen([selectedProperty]) ;


const data2 =
    {
        temp1: 12,
        temp2: 5,
        temp3: -5,
        temp4: 0,
        temp5: 4,
        screen: function (selectedData2)
        { const choice = parseInt(selectedData2)
            if (choice === 1) {
                console.log(this.temp1 + ' degrés dans ' + choice + ' jours d\'après le tableau 2');
            } else if (choice === 2) {
                console.log(this.temp2 + ' degrés dans ' + choice + ' jours d\'après le tableau 2');
            } else if (choice === 3) {
                console.log(this.temp3 + ' degrés dans ' + choice + ' jours d\'après le tableau 2');
            } else if (choice === 4) {
                console.log(this.temp4 + ' degrés dans ' + choice + ' jours d\'après le tableau 2');
            } else if (choice === 5) {
                console.log(this.temp5 + ' degrés dans ' + choice + ' jours d\'après le tableau 2');
            } else {
                console.log('Nous n\'avons pas de données à  ' + choice + ' jours.' +
                    ' Veuillez choisir un nombre de jour plus bas que ' + choice + ' jours.');

            }
        }

    };

const selectedProperty2 = prompt('en rapport avec le tableau 2. Tape à combien de jour tu veux afficher la météo ') ;
data2.screen([selectedProperty2]) ;
