

const testString = "qwretjkkiplmnobfdsathn";
let chunks = [];
let chunk = [];


console.log('original string: ' + testString);

function solve(string) {
    //step 1: split the string into chunks, getting rid of the vowels:
    chunks = string.split(/a|e|i|o|u/);
    console.log("chunks of original string: " + chunks + '\n');
    //step 2: split the chunks into arrays:
    chunks = chunks.map(chunk => chunk.split(''));
    console.log('the chunks split into individual characters: ');
    console.log(chunks);
    //step 3: assign an ASCII value to each character:
    for (i = 0; i < chunks.length; ++i) {
        console.log('\nchunk ' + i + ':');
        for (j = 0; j < chunks[i].length; ++j) {
            console.log('character = ' + chunks[i][j]);
            console.log('i= ' + i + ' j= ' + j);
            chunks[i][j] = (chunks[i][j].charCodeAt(0) - 96);
            console.log('ASCII value - 96 = ' + chunks[i][j]);
        };
    }
    //step 4: assign an ASCII value to each chunk (the sum of its character's ASCII values):
    for (i = 0; i < chunks.length; ++i) {
        chunks[i] = chunks[i].reduce((a, b) => a + b);
    };

    console.log(chunks);

    //step 5: return the highest value out of the array:
    return Math.max(...chunks);

} // end of function 'solve'

solve(testString);
