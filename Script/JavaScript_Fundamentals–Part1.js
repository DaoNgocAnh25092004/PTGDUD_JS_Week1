console.log("Coding Challenge #1");
let mass
let height
var BMIMarks1;
var BMIJohn1;
let markHigherBMI = false;

console.log("------ Data 1 ------")
if (true) {
    mass = 78;
    height = 1.69;

    BMIMarks1 = mass / (height * height);
    console.log("Marks weights 78 kg and is 1.69 m tall => BMI: " + BMIMarks1);
}

if (true) {
    mass = 92;
    height = 1.95;

    BMIJohn1 = mass / (height * height);
    console.log("John weights 92 kg and is 1.95m tall => BMI: " + BMIJohn1);
}

if (BMIMarks1 > BMIJohn1) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher BMI than Mark.");
}

console.log("------ Data 2 ------")
var BMIMarks2;
var BMIJohn2;
if (true) {
    mass = 95;
    height = 1.88;

    BMIMarks2 = mass / (height * height);
    console.log("Marks weights 78 kg and is 1.69 m tall => BMI: " + BMIMarks2);
}

if (true) {
    mass = 85;
    height = 1.76;

    BMIJohn2 = mass / (height * height);
    console.log("John weights 92 kg and is 1.95m tall => BMI: " + BMIJohn2);
}

if (BMIMarks2 > BMIJohn2) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher BMI than Mark.");
}


console.log("\n");
console.log("--------------------------------------------------------------------------------------");
console.log("Coding Challenge #2");
console.log("\n");

console.log("------ Data 1 ------")
if (true) {
    mass = 78;
    height = 1.69;

    BMIMarks1 = mass / (height * height);
    console.log("Marks weights 78 kg and is 1.69 m tall => BMI: " + BMIMarks1);
}

if (true) {
    mass = 92;
    height = 1.95;

    BMIJohn1 = mass / (height * height);
    console.log("John weights 92 kg and is 1.95m tall => BMI: " + BMIJohn1);
}

if (BMIMarks2 > BMIJohn2) {
    console.log("Mark (" + BMIMarks2 + ")" + "  has a higher BMI than John (" + BMIJohn2 + ")");
} else {
    console.log("John (" + BMIJohn2 + ")" + " has a higher BMI than Mark (" + BMIMarks2 + ")");
}

console.log("------ Data 2 ------")
if (true) {
    mass = 95;
    height = 1.88;

    BMIMarks2 = mass / (height * height);
    console.log("Marks weights 78 kg and is 1.69 m tall => BMI: " + BMIMarks2);
}

if (true) {
    mass = 85;
    height = 1.76;

    BMIJohn2 = mass / (height * height);
    console.log("John weights 92 kg and is 1.95m tall => BMI: " + BMIJohn2);
}

if (BMIMarks2 > BMIJohn2) {
    console.log("Mark (" + BMIMarks2 + ")" + "  has a higher BMI than John (" + BMIJohn2 + ")");
} else {
    console.log("John (" + BMIJohn2 + ")" + " has a higher BMI than Mark (" + BMIMarks2 + ")");
}

console.log("\n");
console.log("--------------------------------------------------------------------------------------");
console.log("Coding Challenge #3");
console.log("\n");

const data1Group1 = [96, 108, 89];
const data1Group2 = [89, 91, 110];

const data2Group1 = [97, 112, 101];
const data2Group2 = [109, 95, 123];

const data3Group1 = [97, 112, 101];
const data3Group2 = [109, 95, 106];


let sum1;
let sum2;
let avg1;
let avg2;


function checkGroup(scoreGroup1, scoreGroup2) {
    if (scoreGroup1 > scoreGroup2) {
        console.log("Đội cá heo dành chiến thắng")
        if (scoreGroup1 > 100) {
            console.log("Đội cá heo đạt phần thưởng 1")
        } else {
            console.log("Đội cá chưa đạt phần thưởng 1")
        }
    } else if (scoreGroup1 === scoreGroup2) {
        console.log("Hai đội hòa nhau");
    } else {
        console.log("Đội gấu túi dành chiến thắng")
        if (scoreGroup2 > 100) {
            console.log("Đội gấu túi đạt phần thưởng 1")
        } else {
            console.log("Đội gấu túi chưa đạt phần thưởng 1")
        }
    }
}

if (true) {
    console.log("Dữ liệu 1");
    sum1 = data1Group1.reduce((pre, currentValue) => pre + currentValue);
    avg1 = sum1 / data1Group1.length
    console.log("Điểm trung bình của đội cá heo: " + avg1);


    sum2 = data1Group2.reduce((pre, currentValue) => pre + currentValue);
    avg2 = sum2 / data1Group1.length
    console.log("Điểm trung bình của đội gấu túi: " + avg2);

    checkGroup(avg1, avg2)
}

console.log("\n");
if (true) {
    console.log("Dữ liệu 2");
    sum1 = data2Group1.reduce((pre, currentValue) => pre + currentValue);
    avg1 = sum1 / data2Group1.length
    console.log("Điểm trung bình của đội cá heo: " + avg1);

    sum2 = data2Group2.reduce((pre, currentValue) => pre + currentValue);
    avg2 = sum2 / data2Group1.length
    console.log("Điểm trung bình của đội gấu túi: " + avg2);


    checkGroup(avg1, avg2)
}

console.log("\n");
if (true) {
    console.log("Dữ liệu 3");
    sum1 = data3Group1.reduce((pre, currentValue) => pre + currentValue);
    avg1 = sum1 / data3Group1.length
    console.log("Điểm trung bình của đội cá heo: " + avg1);

    sum2 = data3Group2.reduce((pre, currentValue) => pre + currentValue);
    avg2 = sum2 / data3Group1.length
    console.log("Điểm trung bình của đội gấu túi: " + avg2);

    checkGroup(avg1, avg2)
}

console.log("\n");
console.log("--------------------------------------------------------------------------------------");
console.log("Coding Challenge #4");
console.log("\n");

const dataMoney = [275, 40, 430];

const checkTip = dataMoney.every((money) => {
    return money >= 50 && money <= 300;
})

const totalMoney = dataMoney.reduce((sum, money) => sum + money);
let moneyTip = totalMoney;

moneyTip = checkTip ? moneyTip * 0.15 : moneyTip * 0.2;

checkTip ? console.log("Đạt số phần trăm tiền tip là 15%") : console.log("Đạt số phần trăm tiền tip là 20%");

console.log("Tổng tiền: " + totalMoney + " và đạt dược số tiền tip là: " + moneyTip);  