const data1 =
    {
        temp1: 17,
        temp2: 21,
        temp3: 23,
        screen: function (selected)
                { const choice = parseInt(selected)
                    if (choice === 1) {
                        console.log(this.temp1 + ' degrés dans ' + choice + ' jours');
                    } else if (choice === 2) {
                            console.log(this.temp2 + ' degrés dans ' + choice + ' jours');
                    } else if (choice === 3) {
                            console.log(this.temp3 + ' degrés dans ' + choice + ' jours');
                    } else {
                    console.log('Nous n\'avons pas de données à  ' + choice + ' jours');

                }
                }

    };

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
                console.log(this.temp1 + ' degrés dans ' + choice + ' jours');
            } else if (choice === 2) {
                console.log(this.temp2 + ' degrés dans ' + choice + ' jours');
            } else if (choice === 3) {
                console.log(this.temp3 + ' degrés dans ' + choice + ' jours');
            } else if (choice === 4) {
                console.log(this.temp4 + ' degrés dans ' + choice + ' jours');
            } else if (choice === 6) {
                console.log(this.temp6 + ' degrés dans ' + choice + ' jours');
            } else {
                console.log('Nous n\'avons pas de données à  ' + choice + ' jours');

            }
        }

    };

const selectedProperty2 = parseInt(prompt('Tape à combien de jour tu veux afficher la météo ')) ;
data2.screen([selectedProperty2]) ;
