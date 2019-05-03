import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Образование</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Институт</h3>
                                <p className="info">Инженер-механик<span>•</span> <em className="date">2012</em></p>
                                <p>
                                    Получил образование в Первомайском политехническом институте Николаевского университета кораблестроения им. адмирала Макарова (Украина) по специальности "Инженер-механик двигателей внутреннего сгорания".
                                </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Веб-разработка</h3>
                                <p className="info">Начало самообразования <span>•</span> <em className="date">сентябрь 2017</em></p>
                                <p>
                                    Программирование начал изучать в сентябре 2017 года. В то же начал изучение вёрстки и популярных CMS. Продолжаю самообучение по сегодняшний день: по возможности изучаю JavaScript и популярные библиотеки вне рабочего времени.
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Работа</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Фриланс</h3>
                                <p className="info">Подработки на фрилансе<span>•</span> <em className="date">апрель 2018</em></p>
                                <p>
                                    Весной 2018 года начал брать мелкие заказы по вёсртке и настройке сайтов. В это же время брал заказы на фрилансе не связанные с разработкой, поэтому развитие в вебе было очень медленным. В связи с этим было принято решение найти удалённую вакансию, связанную с программированием или разработкой веб-сайтов.
                                </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Удалёнка</h3>
                                <p className="info">Веб-мастер <span>•</span> <em className="date">Август 2018</em></p>
                                <p>
                                    В августе 2018 года я устроился на первую свою удалённую работу в фирму, которая специализировалась по продвижению сайтов. Проработал я в ней 3 месяца, после чего владелец фирмы уехал из страны и прекратил свою деятельность. Получил бесценный опыт, который позволил продолжить поиски работы. Продолиж брать заказы на фрилансе по созданию сайтов на WordPress, ещё в одной фирме проходил тестовый период: мою вакансию закрыли, так и не взял никого на работу. С конца января 2019 года работаю веб-мастером в фирме по созданию и провижению сайтов.
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
      ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Навыки</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                            Верстаю сайты с помощью Gulp, JQuery, HTML5, SASS.
                        </p>
                        <p>
                            Сажаю вёрстку на различные CMS и фреймворки (Yii2, Django).
                        </p>
                        <p>
                            Изучаю ReactJS и необходимый стек для работы с ним.
                        </p>
                    </div> {/* main-col end */}
                </div> {/* End skills */}
            </section>
        );
    }
}