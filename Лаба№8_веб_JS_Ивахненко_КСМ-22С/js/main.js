'use strict';

document.getElementById("price").onblur = function () {
    let tempPrice = +price.value;
    price.innerText = tempPrice;
    if (tempPrice < 0) {
        document.getElementById('coment').innerText = `Please enter correct price`;
        document.getElementById('price').classList.add('reds');
    } else {
        document.getElementById('price').classList.remove('reds');
        document.getElementById('coment').innerText = ``;
        let spanList = document.getElementById('spanList');
        let spanNode = document.createElement('span');
        spanNode.setAttribute('onclick', `removespan(this);`);
        let textNode = document.createTextNode(`Текущая цена: ${tempPrice}`);
        spanNode.appendChild(textNode);
        spanList.appendChild(spanNode);
        console.log(tempPrice);
    }
};

let removespan = function(span) {
    span.parentNode.removeChild(span);
};
