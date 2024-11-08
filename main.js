// 1. Print the number entered by the user
{
    let inputNum1 = prompt("Enter a number:");
    console.log("Output:", inputNum1);
}

// 2. Check if number is divisible by 3 and 4
{
    let inputNum2 = prompt("Enter a number:");
    console.log(inputNum2 % 3 === 0 && inputNum2 % 4 === 0 ? "Yes" : "No");
}

// 3. Find the maximum of two numbers
{
    let firstNum3 = prompt("Enter first number:");
    let secondNum3 = prompt("Enter second number:");
    console.log("Output:", firstNum3 > secondNum3 ? firstNum3 : secondNum3);
}

// 4. Check if a number is positive or negative
{
    let inputNum4 = prompt("Enter a number:");
    console.log(inputNum4 >= 0 ? "positive" : "negative");
}

// 5. Find the maximum and minimum of three numbers
{
    let num1_5 = prompt("Enter first number:");
    let num2_5 = prompt("Enter second number:");
    let num3_5 = prompt("Enter third number:");
    let maxNum5 = num1_5 > num2_5 ? (num1_5 > num3_5 ? num1_5 : num3_5) : (num2_5 > num3_5 ? num2_5 : num3_5);
    let minNum5 = num1_5 < num2_5 ? (num1_5 < num3_5 ? num1_5 : num3_5) : (num2_5 < num3_5 ? num2_5 : num3_5);
    console.log("Max element =", maxNum5);
    console.log("Min element =", minNum5);
}

// 6. Check if a number is even or odd
{
    let inputNum6 = prompt("Enter a number:");
    console.log(inputNum6 % 2 === 0 ? "even" : "odd");
}

// 7. Check if a character is a vowel or consonant
{
    let char7 = prompt("Enter a character:").toLowerCase();
    console.log("aeiou".includes(char7) ? "vowel" : "consonant");
}

// 8. Print numbers from 1 to the entered number
{
    let endNum8 = prompt("Enter a number:");
    let result8 = "";
    for (let i = 1; i <= endNum8; i++) {
        result8 += i + (i < endNum8 ? ", " : "");
    }
    console.log(result8);
}

// 9. Print multiplication table up to 12 for a given number
{
    let inputNum9 = prompt("Enter a number:");
    let result9 = "";
    for (let i = 1; i <= 12; i++) {
        result9 += inputNum9 * i + " ";
    }
    console.log(result9.trim());
}

// 10. Print all even numbers from 1 to a given number
{
    let endNum10 = prompt("Enter a number:");
    let result10 = "";
    for (let i = 2; i <= endNum10; i += 2) {
        result10 += i + " ";
    }
    console.log(result10.trim());
}

// 11. Calculate power of a number without using **
{
    let base11 = prompt("Enter base number:");
    let exponent11 = prompt("Enter exponent:");
    let result11 = 1;
    for (let i = 0; i < exponent11; i++) {
        result11 *= base11;
    }
    console.log("Output:", result11);
}

// 12. Calculate total, average, and percentage of 5 subjects
{
    let mark1_12 = parseInt(prompt("Enter marks for subject 1:"));
    let mark2_12 = parseInt(prompt("Enter marks for subject 2:"));
    let mark3_12 = parseInt(prompt("Enter marks for subject 3:"));
    let mark4_12 = parseInt(prompt("Enter marks for subject 4:"));
    let mark5_12 = parseInt(prompt("Enter marks for subject 5:"));
    let total12 = mark1_12 + mark2_12 + mark3_12 + mark4_12 + mark5_12;
    let average12 = total12 / 5;
    let percentage12 = (total12 / 500) * 100;
    console.log("Total marks =", total12);
    console.log("Average marks =", average12);
    console.log("Percentage =", percentage12);
}

// 13. Get the number of days in a month
{
    let month13 = prompt("Enter month number (1-12):");
    let days13;
    if ([1, 3, 5, 7, 8, 10, 12].includes(Number(month13))) days13 = 31;
    else if ([4, 6, 9, 11].includes(Number(month13))) days13 = 30;
    else if (month13 == 2) days13 = 28;
    console.log("Days in Month:", days13);
}

// 14. Calculate percentage and grade
{
    let phys14 = parseInt(prompt("Enter marks for Physics:"));
    let chem14 = parseInt(prompt("Enter marks for Chemistry:"));
    let bio14 = parseInt(prompt("Enter marks for Biology:"));
    let math14 = parseInt(prompt("Enter marks for Mathematics:"));
    let comp14 = parseInt(prompt("Enter marks for Computer:"));
    let total14 = phys14 + chem14 + bio14 + math14 + comp14;
    let percent14 = (total14 / 500) * 100;
    let grade14 = percent14 >= 90 ? 'A' : percent14 >= 80 ? 'B' : percent14 >= 70 ? 'C' : percent14 >= 60 ? 'D' : percent14 >= 40 ? 'E' : 'F';
    console.log("Percentage:", percent14);
    console.log("Grade:", grade14);
}

// Switch Case Examples

// 15. Days in month with switch case
{
    let month15 = prompt("Enter month number (1-12):");
    let days15;
    switch (parseInt(month15)) {
        case 2: days15 = 28; break;
        case 4: case 6: case 9: case 11: days15 = 30; break;
        default: days15 = 31;
    }
    console.log("Days in Month:", days15);
}

// 16. Check if alphabet is vowel or consonant with switch case
{
    let char16 = prompt("Enter a letter:").toLowerCase();
    switch (char16) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            console.log("vowel");
            break;
        default:
            console.log("consonant");
    }
}

// 17. Maximum between two numbers with switch case
{
    let num1_17 = parseInt(prompt("Enter first number:"));
    let num2_17 = parseInt(prompt("Enter second number:"));
    switch (true) {
        case num1_17 > num2_17: console.log("Max:", num1_17); break;
        case num2_17 > num1_17: console.log("Max:", num2_17); break;
        default: console.log("Both numbers are equal");
    }
}

// 18. Check even or odd with switch case
{
    let num18 = parseInt(prompt("Enter a number:"));
    switch (num18 % 2) {
        case 0: console.log("even"); break;
        default: console.log("odd");
    }
}

// 19. Positive, negative, or zero with switch case
{
    let num19 = parseInt(prompt("Enter a number:"));
    switch (true) {
        case num19 > 0: console.log("positive"); break;
        case num19 < 0: console.log("negative"); break;
        default: console.log("zero");
    }
}

// 20. Simple calculator using switch case
{
    let num1_20 = parseFloat(prompt("Enter first number:"));
    let num2_20 = parseFloat(prompt("Enter second number:"));
    let operator20 = prompt("Enter operator (+, -, *, /):");
    let result20;
    switch (operator20) {
        case "+": result20 = num1_20 + num2_20; break;
        case "-": result20 = num1_20 - num2_20; break;
        case "*": result20 = num1_20 * num2_20; break;
        case "/": result20 = num1_20 / num2_20; break;
        default: result20 = "Invalid operator";
    }
    console.log("Result:", result20);
}
