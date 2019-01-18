import React, { Component } from 'react';

class HellRules extends Component {

    render() {
        return (
            <div className="hell-rules">
                <h1 className="hell-heading">6 функциональных заповедей</h1>
                <div className="rules-wrapper">
                    <div><h3>Не загрезняй функцию свою</h3>Функции как и вы люди, хотят быть чистыми. И если функция чуйствует что она стала грязной
                        она обизательно закидает тебя ошыбками. Что же далает функцию грязной? Представте,
                        что вы - функция, и вокруг вас коробка (область видимости), а вокруг нее куча глязи.
                        Если вы хотите взять что-то из вне, вам нужно сходить за ним через грязь, и тоже самое
                        если вы хотите что-то снаружы изменить. И ведь все го чего вы хотите в этой жызне,
                        это просто жыть в коробке и никого не трогать. Когда вы кому то нужны, они закинули вам какие то вещи,
                        вы что то там с ними сделали и выкинули их обратно.</div>
                    <div><h3>Делай функцию свою или первокласной или высшей</h3>Запомни рас и навсегда, есть 2 типа функций : одни хотят править,
                        а другие хотят что бы правили ими.</div>
                    <div><h3>Весь мир это функция, а мы в ней константы</h3>Все вокруг константы: ты, твои друзья, родственники. Представь если бы
                        все твои друзья постоянно меняли имена и места жытельства,
                        смог бы ты запомнить все изменения? Нужен друг с другим именем?
                        Не проблема, создай нового.</div>
                    <div><h3>Лямбда всему голова</h3>Как я говорил ранее, весь мир єто функция, так вот я не шутил. Функции везде
                        и они могут передвать друг другу значения, операция карирования. Так вот карирование
                        это как конвеер. По конвееру едут данные, и в каждой функции (каком нибуть станке или роботе)
                        мы добавляем новые данные.</div>
                    <div><h3>Рекурсия - лучшый друг программиста</h3>Забудь о цыклах вроде for и while!!! Зачем они тебе если можно все заменить на рекурсию,
                        и возможностей больше, и побочных еффектов можно избежать.</div>
                    <div><h3>Артефакты спасут мир</h3>Только истинный последователь сможет овладеть артефактом, который поможет ему
                        в выполнении тысяч вселенских задач и спасении от нарушения функциональных грехов.
                        А за легендой, однажды придет герой, который соберет все 3 артефакта и разобьет оковы
                        с вечных рабов преисподней и подарит миру просвитление.</div>
                </div>
            </div>
        );
    }
}
export default HellRules;