//Code your solutions in this file
 fiveToOnneHudred=()=>{
    for(let i=5;i<=100;i++){
        console.log(i)};
};
fiveToOnneHudred();

multiplesOfThree =() => {
    for (let i = 0; i<=100; i++) {
        if (i % 3 === 0) {
        console.log(i);
        };
    };
};
multiplesOfThree();

multiplesOfThreeOrFive =() => {
    for (let i = 0; i<=100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
        };
    };
};
multiplesOfThreeOrFive()

untilNum = (num) => {
for (i = 1; i <= num; i++) {
    console.log(i)
}
}

untilNum(5)
untilNum(9)
untilNum(42)

const multiply=(a,b)=>{
    return a*b
}
console.log(multiply(2,3))

add = (a,b) => {
a + b; {
    if (a === b) {
        console.log((a + b) * 3) 
    }
}
}

add(2, 4);
add(5, 5);
add(6 ,6);

isNegative = (num) => {
    if (num < 0) {
        console.log(true);
    } else {
        console.log(false);
    }
};

console.log(isNegative(-1));
console.log(isNegative(1)); 

triangleArea = (a, b) => {
return .5 * a * b;
}

console.log(triangleArea(5, 7));
console.log(triangleArea(6, 8));