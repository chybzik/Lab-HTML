'use strict';
function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.firstName[0].toLowerCase() + this.secondName.toLowerCase()) ;
        },
        getAge: function () {
            let now = new Date();
            let currentYear = now.getFullYear();

            let inputDate = +this.birthday.substring(0, 2);
            let inputMonth = +this.birthday.substring(3, 5);
            let inputYear = +this.birthday.substring(6, 10);

            let birthDate = new Date(inputYear, inputMonth-1, inputDate);
            let birthYear = birthDate.getFullYear();
            let age = currentYear - birthYear;
            if (now < new Date(birthDate.setFullYear(currentYear))) {
                age = age - 1;
            }
            return console.log(age);
        },
        getPassword: function () {

            return console.log(this.firstName[0].toUpperCase() + this.secondName.toLowerCase() + this.birthday.substring(6,10));
        }
    };
    newUser.firstName = prompt("Write your first name");
    newUser.secondName = prompt("Write your second name");
    newUser.birthday = prompt("Write your birthday dd.mm.yy: ");
    newUser.getAge();
    newUser.getPassword();

    return newUser;
}
createNewUser();