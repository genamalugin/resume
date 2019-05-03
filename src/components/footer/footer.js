import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://www.facebook.com/profile.php?id=100010844162434" target="_blank"><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://vk.com/id156408179" target="_blank"><i className="fa fa-vk" /></a></li>
                            <li><a href="skype:gennka_89?chat" target="_blank"><i className="fa fa-skype" /></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright {new Date().getFullYear()}</li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}