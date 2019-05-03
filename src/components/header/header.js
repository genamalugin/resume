import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (

                    <header id="home">
                        <nav id="nav-wrap">
                            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                            <ul id="nav" className="nav">
                                <li className="current"><a className="smoothscroll" href="#home">Главная</a></li>
                                <li><a className="smoothscroll" href="#about">Обо мне</a></li>
                                <li><a className="smoothscroll" href="#resume">Резюме</a></li>
                                <li><a className="smoothscroll" href="#portfolio">Работы</a></li>
                                <li><a className="smoothscroll" href="#testimonials">Рекомендации</a></li>
                                <li><a className="smoothscroll" href="#contact">Контакты</a></li>
                            </ul>
                        </nav>

                        <div className="row banner">
                            <div className="banner-text">
                                <h1 className="responsive-headline">{resumeData.name}</h1>
                                <h3>{resumeData.role}</h3>
                                <hr />
                                <ul className="social">
                                    <li><a href="https://www.facebook.com/profile.php?id=100010844162434" target="_blank"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="https://vk.com/id156408179" target="_blank"><i className="fa fa-vk" /></a></li>
                                    <li><a href="skype:gennka_89?chat" target="_blank"><i className="fa fa-skype" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="scrolldown">
                            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                        </p>
                    </header>
        );
    }
}