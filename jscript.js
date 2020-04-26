let money = + prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

// let i=0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = + prompt("Сколько это будет стоить?");
//     if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//         appData.expenses[a] = b;
//         console.log("New expense added (" + (i+1) + ")");
//     } else {
//         alert("Статья расходов указана неверно. Попробуйте ещё раз.");
//         i--;
//     }
//     i++;
// }

// let i=0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = + prompt("Сколько это будет стоить?");
//     if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//         appData.expenses[a] = b;
//         console.log("New expense added (" + (i+1) + ")");
//     } else {
//         alert("Статья расходов указана неверно. Попробуйте ещё раз.");
//         i--;
//     }
//     i++;
// }
// while (i<2);

for (let i=0; i<2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = + prompt("Сколько это будет стоить?");
    if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        appData.expenses[a] = b;
        console.log("New expense added (" + (i+1) + ")");
    } else {
        alert("Статья расходов указана неверно. Попробуйте ещё раз.");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на один день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minial wage");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
    console.log("Medium wage");
} else if (appData.moneyPerDay > 2000) {
    console.log("High wage");
} else {
    console.log("Error occured...");
}