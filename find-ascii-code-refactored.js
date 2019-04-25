function solve(string) {
    //chop up the string:
    let chunks = string.split(/a|e|i|o|u/).map(chunk => chunk.split(''));
    //iterate through the new array of arrays to assign ASCII codes: 
    for (i = 0; i < chunks.length; i++) {
        for (j = 0; j < chunks[i].length; ++j) {
            chunks[i][j] = (chunks[i][j].charCodeAt(0) - 96);
        };
        //add up the ASCII codes for each chunk:
        chunks[i] = chunks[i].reduce((a, b) => a + b, 0);
    }
    //report the largest chunk value:
    return Math.max(...chunks);
}