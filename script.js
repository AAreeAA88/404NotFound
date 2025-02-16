function invisible() {
    let info = []
    function NewUser(name, surname, city, age, login, password) {
        this.userName = name;
        this.userSurname = surname;
        this.userCity = city;
        this.userAge = age;
        this.userLogin = login;
        this.userPassword = password;
        let fullInfo = `Имя -  ${this.userName}\nФамилия - ${this.userSurname}\nГород - ${this.userCity}\nВозраст - ${this.userAge}\nЛогин - ${this.userLogin}\nПароль - ${this.userPassword}`
        return fullInfo
    }



    function forma(){{
        let name = prompt("Введи имя: ")
        let surname = prompt("Введи фамилию: ")
        let city = prompt("Введи город проживания: ")
        let age = +prompt("Введи свой возраст: ")
        let login = prompt("Введи логин: ")
        let password = prompt("Введи пароль: ")
    }
    }
    forma()
    let user1 = new NewUser(forma.name, forma.surname)
    alert(user1)
}

function inv() {
    let element = document.getElementById("my")
    if (element.style.display == "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}


// let man1 = { name: "Jogny", surname: "Drofa", age: 33, city: "Novosibirsk", id: 1 }
// let man2 = { name: "Maga", surname: "Nekrasov", age: 13, city: "Novosibirsk", id: 2 }
// let man3 = { name: "Kaka", surname: "Drofa", age: 7, city: "Moscow", id: 3 }

// let mans = [man1, man2, man3] // нужно получить fullName, Age, City, Id

// let info = mans.map(user => (
//     {
//         fullName: `${user.name} ${user.surname}`,
//         age: user.age,
//         city: user.city,
//         id: user.id
//     }
// ))


// alert("Зачем ты нажал на кнопку? Теперь мы всё о тебе знаем!!!")

// function all(a){
//     alert(`Полное имя - ${info[a].fullName}`)
//     alert(`Возраст - ${info[a].age}`)
//     alert(`Город проживания - ${info[a].city}`)
//     alert(`Id - ${info[a].id}`)
// }
// let a = +prompt("Введи число")
// all(a)