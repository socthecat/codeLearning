import React from 'react';

export const notes = [[
    {
        title: "Всем привет",
        text: [
            {
                title: "Ты попал",
                text: "на крутой квест по функциональному программированию"
            },
            {
                title: "Квест",
                text: "находиться в стадии разработки, много что не доделано и много багов!"
            },
            {
                title: "Тебе будут давать",
                text: "очень сжатую и абстрактную теорию"
            },
            {
                title: "Если ты",
                text: "что то не понял или хочеш изучить главу поподробнее переходи по сылкам в журнале"
            },
            {
                title: "Tutorial part 1",
                text: <div><hr/><p>tutorial text</p>
                    <img src="https://mdn.mozillademos.org/files/12708/image-with-title.png"/>
                    <p>some tutorial text</p>
                </div>
            }
        ]
    },
    {
        title: "6 функциональных законов",
        text: [
        {
            title: "Не загрезняй функцию свою",
            text: `Функции как и вы люди, хотят быть чистыми. И если функция чуйствует что она стала грязной
            она обизательно закидает тебя ошыбками. Что же далает функцию грязной? Представте,
            что вы - функция, и вокруг вас коробка (область видимости), а вокруг нее куча глязи.
            Если вы хотите взять что-то из вне, вам нужно сходить за ним через грязь, и тоже самое
            если вы хотите что-то снаружы изменить. И ведь все го чего вы хотите в этой жызне,
            это просто жыть в коробке и никого не трогать. Когда вы кому то нужны, они закинули вам какие то вещи,
            вы что то там с ними сделали и выкинуть какой другой результат`,
        },
        {
            title: "Делай функцию свою или первокласной или высшей",
            text: `Запомни рас и навсегда, есть 2 типа функций : одни хотят править,
            а другие хотят что бы правили ими.`,
        },
        {
            title: "Весь мир это функция, а мы в ней константы",
            text: `Все вокруг константы: ты, твои друзья, родственники. Представь если бы
            все твои друзья постоянно меняли имена и места жытельства,
            смог бы ты запомнить все изменения? Нужен друг с другим именем?
            Не проблема, создай нового.`,
        },
        {
            title: "Лямбда всему голова",
            text: `Как я говорил ранее, весь мир єто функция, так вот я не шутил. Функции везде
            и они могут передвать друг другу значения, операция карирования. Так вот карирование 
            это как конвеер. По конвееру едут данные, и в каждой функции (каком нибуть станке или роботе)
            мы добавляем новые данные.`,
        },
        {
            title: "Рекурсия - лучшый друг программиста",
            text: `Забудь о цыклах вроде for и while!!! Зачем они тебе если можно все заменить на рекурсию,
            и возможностей больше, и побочных еффектов можно избежать`,
        },
        {
            title: "Артефакты спасут мир",
            text: `Только истинный последователь сможет овладеть артефактом, который поможет ему
            в выполнении тысяч вселенских задач и спасении от нарушения функциональных грехов.
            А за легендой, однажды придет герой, который соберет все 3 артефакта и разобьет оковы
            с вечных рабов преисподней и подарит миру свободу`,
        },
    ]
    },
    {
        title: "Чистые функции",
        text: [
        {
            title: "Определение ч.ф.",
            text: `Чистой называют функцию которая является детерминированой и не имеет побочных еффектов.
            https://github.com/MostlyAdequate/mostly-adequate-guide-ru/blob/master/ch3-ru.md`,
        },
        {
            title: "Детерминированая?",
            text: `Детерминированой называеться функция которая при одинаковом наборе входящих данных,
                   Вернет одно и тоже значение. Детерминированой является функция slice, в отличие от splice`,
        },
        {
            title: "Побочные еффекты?",
            text: `Побочными эффектами функции называют взаимодействие функции с окружающим миром. 
            Функция без побочных эффектов может обращаться и менять данные только внутри себя.`,
        }
    ]
    },
    {
        title: "Легенда об артефактах",
        text: [
        {
            title: "Истинный герой",
            text: `Однажды появиться в аду один человек, который будет отличаться от обычних обетателей преисподней.
             Будет он благороден, миролюбив и невероятно талантлив. Он сразу не понравиться Mephisto, ведь такие гости как он тут редкость.
             Очутиться он в типичной индуской деревушке где поможет жытелям с их проблемами. Станет он там своим, настоящей звездой в деревне.
             Очень герою будут по душе индусы, и будет у него 1 лучшый друг, с которым у них будет бизнес.
             Но прослишыт Mephisto про сей райский уголок, и отправить демонов разрушыть деревню. Демоны будут трощить и трощить, но
             никого не убивать, как приказал Mephisto. Все бы та ничего, вот только в той розрухе, привалило лучшего друга героя... каменным крестом, который индусы построили в честь героя.
             Не потерпит герой такого обращения, начнет он готовиться к войне, против Mephisto...`,
        },
        {
            title: "1 артефакт filter",
            text: ``,
        },
        {
            title: "2 артефакт map",
            text: ``,
        },
        {
            title: "3 артефакт reduse",
            text: ``,
        }
    ]
    }
    
]
]