
/* function checkInput() {
    let a = document.getElementById("calc1").value;
    let b = document.getElementById("calc2").value;

    document.getElementById("errorMessage").innerHTML = "";

    if (a === "" || b === "") {
        document.getElementById("result").value = "";
        document.getElementById("errorMessage").innerHTML += "Введите цифру!";
    }
} */

class Calc {
    static getAdditionResult() {
        let a = document.getElementById("calc1").value;
        let b = document.getElementById("calc2").value;
        document.getElementById("errorMessage").innerHTML = "";

        if (a === "" || b === "") {
            document.getElementById("result").value = "";
            document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
        } else {
            let res = Number(a) + Number(b);
            document.getElementById("result").value = res;
        }
    }

    static getSubstractionResult() {
        let a = document.getElementById("calc1").value;
        let b = document.getElementById("calc2").value;
        document.getElementById("errorMessage").innerHTML = "";

        if (a === "" || b === "") {
            document.getElementById("result").value = "";
            document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
        } else {
            let res = Number(a) - Number(b);
            document.getElementById("result").value = res;
        }
    }

    static getMultiplicationResult() {
        let a = document.getElementById("calc1").value;
        let b = document.getElementById("calc2").value;
        document.getElementById("errorMessage").innerHTML = "";

        if (a === "" || b === "") {
            document.getElementById("result").value = "";
            document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
        } else {
            let res = Number(a) * Number(b);
            document.getElementById("result").value = res;
        }
    }

    static getDivisionResult() {
        let a = document.getElementById("calc1").value;
        let b = document.getElementById("calc2").value;
        document.getElementById("errorMessage").innerHTML = "";

        if (a === "" || b === "") {
            document.getElementById("result").value = "";
            document.getElementById("errorMessage").innerHTML += "Ввведите цифру!";
        } else if (b == 0) {
            document.getElementById("result").value = "";
            document.getElementById("errorMessage").innerHTML += "На ноль делить нельзя!";
        } else {
            let res = Number(a) / Number(b);
            document.getElementById("result").value = res;
        }

    }
}

document.getElementById("plus").onclick = Calc.getAdditionResult;
document.getElementById("minus").onclick = Calc.getSubstractionResult;
document.getElementById("multi").onclick = Calc.getMultiplicationResult;
document.getElementById("divide").onclick = Calc.getDivisionResult;