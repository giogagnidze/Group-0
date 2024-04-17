let globalValue = {
    nestedValue: null
};

function setNestedValue(newValue){
    let localValue = newValue;
    globalValue.nestedValue = localValue;
}

setNestedValue("Giorgi, Gagnidze");

console.log(globalValue.nestedValue);