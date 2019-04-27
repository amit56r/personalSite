import React from "react";

import Logo from "../images/profile/john.png";
import classNames from "classnames"


class Button extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      }
    }

    handleClick(){
      this.state = this.setState({
        toggle: !this.state.toggle
      });
      this.props.handle();
    }

  render() {
    return (
      <div id="menuToggle" onClick={() => this.handleClick()}>
        <div className="toggle-normal">
          <i className="material-icons main-bar">{this.state.toggle? "close": "menu"}</i>
        </div>
      </div>
    );
  }

}


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  toggle() {
    this.state = this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {

    var classes = {
      menu: classNames({
        "menu": true,
        "menu-open": this.state.toggle
      })
    }

    return (
      <nav id="theMenu" className={classes.menu}>
        {/*MENU*/}
        <div id="menu-options" className="menu-wrap">
          {/*PERSONAL LOGO*/}
          <div className="logo-flat">
            <img alt="personal-logo" className="img-responsive" src={Logo} />
          </div>
          <br />
          {/*OPTIONS*/}
          <a href="#home"><i className="title-icon fa fa-user" />Home</a>
          <a href="#about"><i className="title-icon fa fa-dashboard" />About</a>
          <a href="#education"><i className="title-icon fa fa-graduation-cap" />Education</a>
          <a href="#skills"><i className="title-icon fa fa-sliders" />Skills</a>
          <a href="#experience"><i className="title-icon fa fa-suitcase" />Experience</a>
          <a href="#portfolios"><i className="title-icon fa fa-archive" />Portfolios</a>
          <a href="#interest"><i className="title-icon fa fa-heart" />Interest</a>
          <a href="#testimonials"><i className="title-icon fa fa-users" />Testimonials</a>
          <a href="#pricing-table"><i className="title-icon fa fa-money" />Pricing</a>
          <a href="#blog"><i className="title-icon fa fa-pencil-square" />Blog</a>
          <a href="#contact"><i className="title-icon fa fa-envelope" />Contact</a>
        </div>
        {/* MENU BUTTON */}
        <Button
          handle={() => this.toggle()}
        />  
      </nav>

    );
  }
}


class Header extends React.Component {
    render() {
        return (

      <header id="home">
        <Menu/>
        {/*HEADER BACKGROUND*/}
        <div className="header-background section" />
      </header>
    );
    }
}

export { Header }