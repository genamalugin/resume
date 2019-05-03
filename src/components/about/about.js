import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt />
                    </div>
                    <div className="nine columns main-col">
                        <h2>Обо мне</h2>
                        <p>Я в web-разработке относительно недавно: начал изучение в средине 2017 года. В средине 2018 года устроился на первую работу. До сегодняшнего дня сменил несколько мест работы. Сейчас занимаю позицию web-мастера в небольшой компании, где поддерживаю сайты на CMS: WordPress, OpenCart, UMI, Joomla и т.д. Также верстаю: Gulp, Sass, JQuery. Вне работы развиваюсь по направлению ReactJS и GraphQL. Данное портфолио разработано именно под эту тему. В планах расширять знания в строну Python Django в качестве backend.</p>
                        {/*<div className="row">*/}
                            {/*<div className="columns contact-details">*/}
                                {/*<h2>Мои контакты</h2>*/}
                                {/*<p className="address">*/}
                                    {/*<span>Малюгин Геннадий</span><br />*/}
                                    {/*<span>Проживаю на территории<br />*/}
                    {/*Республики Крым, РФ*/}
                  {/*</span><br />*/}
                                    {/*<span>genamalugin@gmail.com</span>*/}
                                {/*</p>*/}
                            {/*</div>*/}
                            {/*<div className="columns download">*/}
                                {/*<p>*/}
                                    {/*<a href="https://sevastopol.hh.ru/applicant/resumes/view?resume=951cfae1ff045fc6110039ed1f483361334131" target="_blank" className="button"><i className="fa fa-external-link" />Ссылка на HeadHunter (hh.ru)</a>*/}
                                {/*</p>*/}
                            {/*</div>*/}
                        {/*</div> /!* end row *!/*/}
                    </div> {/* end .main-col */}
                </div>
            </section>
        );
    }
}