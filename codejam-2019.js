//initial development test inputs, later replace with stdin:
// let N = 0; //Math.floor(Math.random() * 10000);
let T = 0;
let test1 = 0;
let test2 = 0;
let test3 = 0;
let tests = [];

//declare global variables:
let A = 0;
let B = 0;
let testA = true;
let testB = true;


//get input:
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}


//process input:
function fourFixer (N) {
	testA = true;
	testB = true;
	while (testA || testB) {
		A = Math.floor(Math.random() * N);
		B = Math.floor(N - A);
		testA = A.toString().split('').includes('4');
		testB = B.toString().split('').includes('4');
	}
}

//display output:
function displayOutput (T, tests) {
	len = tests.length;
	for (i = 0; i < len; i++) {
		fourFixer(tests[i]);
		console.log(`Case #${i+1}: A:${A} B:${B}`);
	}
}

start();

async function start() {
  T = await ask('Value of T? ');
  test1 = await ask('Value for test1? ');
  test2 = await ask('Value for test2? ');
  test3 = await ask('Value for test3? ');
  tests = [test1, test2, test3];

  displayOutput(T, tests);
  process.exit();
}

