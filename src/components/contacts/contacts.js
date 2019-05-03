import React, { Component } from 'react';
export default class Contacts extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row">
                    <div className="columns contact-details">
                        <h2>Мои контакты</h2>
                        <p className="address">
                            <span>Малюгин Геннадий</span><br />
                            <span>Проживаю на территории<br />
                    Республики Крым, РФ
                  </span><br />
                            <span>genamalugin@gmail.com</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                            <a href="https://sevastopol.hh.ru/applicant/resumes/view?resume=951cfae1ff045fc6110039ed1f483361334131" target="_blank" className="button"><i className="fa fa-external-link" />Ссылка на HeadHunter (hh.ru)</a>
                        </p>
                    </div>
                </div> {/* end row */}
            </section>
        );
    }
}