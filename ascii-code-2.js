testString = "Behold -- the Four /Rider's +blackened steeds%, 1 through 4, breathed *fire* and spat *brimstone*!";

function alphabetPosition(text) {
    return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*\'\"@+0-9?;:|\\{}\[\]<>=\-_`~()]/g, '').split('').map(l => l.charCodeAt() - 96).toString().replace(/,/g, ' ');
}

alphabetPosition(testString);