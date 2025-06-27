const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "BCA";
        break;
    case marks >= 80:
        Branch = "MCA";
        break;
    case marks >= 70:
        Branch = "BCOM";
        break;
    case marks >= 60:
        Branch = "BBA";
        break;
    case marks >= 50:
        Branch ="B.TECH";
        break;
    default:
        Branch = "B.A";
        break;
}

console.log(`Student Branch name is : ${Branch}`);