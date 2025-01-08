(function () {
    console.log("----------------------- Coding Challenge #1 ---------------------------");

    //Dữ liệu
    const data1Group1 = [44, 23, 71];
    const data1Group2 = [65, 54, 49];

    const data2Group1 = [85, 54, 41];
    const data2Group2 = [23, 34, 27];

    //Hàm tính điểm trung bình
    const calcAverage = (arr) => arr.reduce((pre, currentValue) => pre + currentValue) / arr.length;

    //Hàm kiểm tra có đội thắng không
    const checkWinner = (val1, val2) => val1 >= val2 * 2 || val2 >= val1 * 2 ? true : false;

    //Kết quả tính điểm trung bình
    const result1AvgGroup1 = calcAverage(data1Group1);
    const result1AvgGroup2 = calcAverage(data1Group2);
    const result2AvgGroup1 = calcAverage(data2Group1);
    const result2AvgGroup2 = calcAverage(data2Group2);

    //Kiểm tra đội thắng
    console.log("Dữ liệu 1");
    console.log("Điểm trung bình của đội cá heo: " + result1AvgGroup1);
    console.log("Điểm trung bình của đội gấu túi: " + result1AvgGroup2);

    if (checkWinner(result1AvgGroup1, result1AvgGroup2)) {
        if (result1AvgGroup1 > result1AvgGroup2) { console.log("Đội cá heo dành chiến thắng") }
        else { console.log("Đội gấu túi dành chiến thắng") }
    } else {
        console.log("Không có đội nào thắng");
    }

    console.log("\n");

    console.log("Dữ liệu 2");
    console.log("Điểm trung bình của đội cá heo: " + result2AvgGroup1);
    console.log("Điểm trung bình của đội gấu túi: " + result2AvgGroup2);

    if (checkWinner(result2AvgGroup1, result2AvgGroup2)) {
        if (result2AvgGroup1 > result2AvgGroup2) { console.log("Đội cá heo dành chiến thắng") }
        else { console.log("Đội gấu túi dành chiến thắng") }
    } else {
        console.log("Không có đội nào thắng");
    }

    console.log("----------------------- Coding Challenge #2 ---------------------------");
    // Dữ liệu
    const bills1 = [125, 555, 44];
    const tips = [15, 20]
    const arrTotalResult = [];
    var totalBill;

    const calcTip = (arr) => {
        let checkTip;

        checkTip = arr.every(val => val >= 50 && val <= 300);

        var totalArr = arr.reduce((totalBill, currentValue) => totalBill + currentValue);

        if (checkTip) {
            console.log("Phần trăm tiền tiếp đó là: " + tips[0] + "%");
            totalBill = totalArr * tips[0] / 100;

        } else {
            console.log("Phần trăm tiền tiếp đó là: " + tips[1] + "%");
            totalBill = totalArr * tips[1] / 100;
        }

        console.log("Tổng tiền mỗi hóa đơn: " + totalBill);
        totalBill = totalArr;
    }

    //Gọi hàm tính tiền 
    calcTip(bills1);

    arrTotalResult.push(totalBill)
    console.log("Mảng kết quả: [" + arrTotalResult + "]");


})();