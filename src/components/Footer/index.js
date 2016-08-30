import React from 'react';

const Footer = () => (
  <footer className="mdl-mini-footer">
    <div className="mdl-mini-footer__left-section">
      <div className="mdl-logo">
        更多信息
      </div>
      <ul className="mdl-mini-footer__link-list">
        <li><a href="#">帮助</a></li>
        <li><a href="#">隐私条款</a></li>
        <li><a href="#">用户协议</a></li>
      </ul>
    </div>
    <div className="mdl-mini-footer__right-section">
      <button className="mdl-button mdl-js-button mdl-button--icon">
        <i className="fa fa-weixin" aria-hidden="true"></i>
      </button>
      <button className="mdl-button mdl-js-button mdl-button--icon">
        <i className="fa fa-weibo" aria-hidden="true"></i>
      </button>
      <button className="mdl-button mdl-js-button mdl-button--icon">
        <i className="fa fa-qq" aria-hidden="true"></i>
      </button>
    </div>
  </footer>
);

export default Footer;
