'use strict';

function filterBy(list, dataType) {
    let newArray = list.filter(function(item) {
        return typeof (item) !== dataType ;
    });
    console.log(newArray);
    return newArray;
}
filterBy(['hello', 'world', 23, '23', null], 'string');