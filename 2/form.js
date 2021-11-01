function makeCatObject(event) {
    event.preventDefault();
    class Cat {
        constructor(ownername, phonenumber, email, petname, breed, food, sex) {
            this.ownername = ownername;
            this.phonenumber = phonenumber;
            this.email = email;
            this.petname = petname;
            this.breed = breed;
            this.food = food;
            this.sex = sex;
        }
    }

    let ownername = document.getElementById("ownername").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;
    let petname = document.getElementById("petname").value;
    let breed = document.getElementById("breed").value;

    let food = "";
    let foodList = document.querySelectorAll('input[name="food"]');
    for (let item of foodList) {
        if (item.checked) {
            food += `${item.value} `;
        }
    }

    const sexList = document.querySelectorAll('input[name="sex"]');
    let sex;
    for (let item of sexList) {
        if (item.checked) {
            sex = item.value;
            break;
        }
    }

    let myCat = new Cat(ownername, phonenumber, email, petname, breed, food, sex);
    console.log(`
    Владелец: ${myCat.ownername}
    Телефон владельца: ${myCat.phonenumber}
    E-mail владельца: ${myCat.email}
    Котенька:
    Кличка: ${myCat.petname}
    Порода: ${myCat.breed}
    Питание: ${myCat.food}
    Пол: ${myCat.sex}`);
}

document.getElementById("btn").onclick = makeCatObject;