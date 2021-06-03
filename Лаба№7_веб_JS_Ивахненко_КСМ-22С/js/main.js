'use strict';

function showList(list) {
    let array = [];
    let newArray = [];
    let finalArray = [];
    function traverse(theObject) {

        for (let key in theObject) {
            if (theObject[key] != null && typeof (theObject[key]) == 'object') {
                traverse(theObject[key]);
            } else {

                array.push(theObject[key]);
                newArray = array.map(word => `<li>${word}</li>`);
                finalArray = newArray.join('');
                document.body.children[2].innerHTML = finalArray;
            }
        }
    }
    traverse(list);
}

showList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);

let sec = 10;
function timeSec() {
    if (sec < 1) {
        document.body.innerHTML = '';
    }
    else {
        document.getElementById('timer').innerHTML = sec;
        setTimeout(timeSec, 1000);
        sec--;
    }
}
timeSec();