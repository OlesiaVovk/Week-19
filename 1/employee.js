class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        let res = this.rate * this.days;
        return res;
    }
}

let worker1 = new Worker("Иван", "Иванов", "10", "31");
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());