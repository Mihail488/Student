// 1. Создание объектов с символьными значениями
const bankClientId = Symbol("bankClientId");
const clinicEmployeeId = Symbol("clinicEmployeeId");
const citizenId = Symbol("citizenId");

const bankClient = {
    [bankClientId]: "BC1488",
    name: "Дмитрий Боровиков",
    accountNumber: "14885177101488",
    balance: 50000
};

const clinicEmployee = {
    [clinicEmployeeId]: "CE456",
    name: "Николай Наумов",
    position: "Врач",
    department: "Терапия"
};

const citizen = {
    [citizenId]: "RU789",
    name: "Сидоров Петр",
    passport: "4510 123456",
    birthDate: "01.01.1990"
};

// Вывод свойств объектов
console.log("Клиент банка:");
for (let key in bankClient) {
    console.log(`${key}: ${bankClient[key]}`);
}
console.log("Символьное свойство:", bankClient[bankClientId]);

// 2. Switch вместо if
function checkNumber(number) {
    switch (number) {
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
            alert('Вы ввели число 2');
            break;
        case 8:
        case 9:
            alert('Вы ввели число 8, а может и 9');
            break;
        default:
            alert('Другое число');
    }
}

// 3. Определение четверти часа
function getQuarter(min) {
    switch (true) {
        case min >= 0 && min < 15:
            return 'Первая четверть';
        case min >= 15 && min < 30:
            return 'Вторая четверть';
        case min >= 30 && min < 45:
            return 'Третья четверть';
        case min >= 45 && min < 60:
            return 'Четвертая четверть';
        default:
            return 'Некорректное значение';
    }
}

// 4. Проверка строки и номера телефона
function checkString(str, phoneNumber) {
    // Проверка первого символа
    let result = ['1', '2', '3'].includes(str[0]) 
        ? 'Первая цифра 1, 2 или 3' 
        : 'нет';
    
    // Проверка номера телефона
    let hasPhone = str.includes(phoneNumber) 
        ? 'Номер телефона найден' 
        : 'Номер телефона не найден';
    
    return { result, hasPhone };
}

// Пример использования
const phoneNumber = "9991234567";
const testString = "1234567890" + phoneNumber;
console.log(checkString(testString, phoneNumber)); 
