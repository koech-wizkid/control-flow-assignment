//1..print "fizz" for multiples of 3 and "buzz" for multiples of 5 and "fizzbuzz" for multiples of 3 and 5

for(let i=1; i<=100; i++) {
    if(i % 15 === 0) {
        console.log("FIZZBUZZ")
    }
    else if(i % 3 === 0) {
        console.log("FIZZ")

    }
    else if(i % 5 === 0) {
        console.log("BUZZ")

    }
    else {
        console.log(i)
    }
}


// //2..write a program that prints odd numbers less than 100


const num = 100;
for(let i=1; i<=num; i++){
    if (i %2 != 0) {
        console.log(i)
    }
}


//3..Write a program to check grades by using a switch case.

function myFunction(){
    let grade = prompt("Enter your grade")


switch(true){
    case grade > 90 && grade <= 100: 
     console.log("A");
    break;
    case grade >= 85 && grade <= 90:
        console.log("A-");
        break;
    case grade >= 80 && grade <= 84:
        console.log("B+");
        break;
    case grade >= 75 && grade <= 79:
        console.log("B");
        break;
    case grade >= 70 && grade <= 74:
        console.log("B-");
        break;
    case grade >= 65 && grade <= 69:
        console.log("C+");
        break;
    case grade >= 60 && grade <=64:
        console.log("C");
        break;
    case grade >= 50 && grade <= 59:
        console.log("C-");
        break;
    case grade <= 49:
         console.log("FAIL");
         break;

}
}
