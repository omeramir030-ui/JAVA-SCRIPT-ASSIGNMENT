function checkgrade(marks) {
    if (marks >= 90) {
        return "A Grade";
    } else if (marks >= 80) {
        return "B Grade";
    } else if (marks >= 70) {
        return "C Grade";
    } else if (marks >= 60) {
        return "D Grade";
    } else {
        return "F Grade";
    }
}
console.log(checkgrade(85)); 