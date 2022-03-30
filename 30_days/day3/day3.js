'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    tip_percent = tip_percent.toFixed(10);
    tax_percent = tax_percent.toFixed(10);
    const tip=meal_cost*tip_percent/100.0;
    //console.log(tip);
    const tax=tax_percent*meal_cost/100.0;
    //console.log(tax);
    const total_cost=(meal_cost+tip+tax).toFixed(10);
    console.log(Math.trunc(total_cost));
    //return Math.trunc(total_cost);
}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    //console.log(solve(meal_cost, tip_percent, tax_percent));
    solve(meal_cost, tip_percent, tax_percent);
}
