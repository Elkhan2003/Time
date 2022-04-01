// let clook = () => {
//     alert('salam')
// }

// clook()

// let date = new Date()

// console.log(date)

////////////////////////////////////////////////////////////

// let clook = () => {

//     let date = new Date()
//     let month_num = date.getMonth()
//     let day = date.getDay()
//     console.log(day)
// }

// clook()

////////////////////////////////////////////////////////////


// let clook = () => {

//     let date = new Date()
//     let month_num = date.getMonth()
//     let day = date.getDay()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     let mounth = [
//         'Январь',
//         'Февраль',
//         'Март',
//         'Апрель',
//         'Май',
//         'Июнь',
//         'Июль',
//         'Август',
//         'Сентябрь',
//         'Октябрь',
//         'Ноябрь',
//         'Декабрь'
//     ]
//     console.log(mounth[month_num])
// }

// clook()

////////////////////////////////////////////////////////////

let clock = () => {

    let date = new Date()
    let month_num = date.getMonth()
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (day <= 9) day = '0' + day
    if (hours <= 9) hours = '0' + hours
    if (minutes <= 9) minutes = '0' + minutes
    if (seconds <= 9) seconds = '0' + seconds

    console.log(seconds);

    let mounth = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];

    // let date_time = "Сегодня" + ' ' + day + " " + hours + " " + minutes + " " + seconds + " "
    let date_time = `Сегодня - ${mounth[month_num]} ${day}<br> час - ${hours}:${minutes}:${seconds}`

    // let element = document.getElementById('time')
    let element = document.querySelector('#time')
    element.innerHTML = date_time

    setTimeout("clock()", 1000)

}

clock()

////////////////////////////////////////////////////////////