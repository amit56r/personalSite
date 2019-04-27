import React from "react";

import ProfileImage from "../images/profile/profile.png"

class Vcard extends React.Component {
    render() {
        return (

      <div id="v-card-holder" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              {/* V-CARD */}
              <div id="v-card" className="card">
                {/* PROFILE PICTURE */}
                <div id="profile" className="right">
                  <img alt="profile-image" className="img-responsive" src={ProfileImage} />
                  <div className="slant" />
                </div>
                <div className="card-content">
                  {/* NAME & STATUS */}
                  <div className="info-headings">
                    <h4 className="text-uppercase left">{this.props.name}</h4>
                    <h6 className="text-capitalize left">{this.props.title}</h6>
                  </div>
                  {/* CONTACT INFO */}
                  <div className="infos">
                    <ul className="profile-list">
                        <li className="clearfix">
                            <span className="title"><i className="material-icons">work</i></span>
                            <span className="content">{this.props.info.work}</span>
                        </li>
                        <li className="clearfix">
                            <span className="title"><i className="material-icons">place</i></span>
                            <span className="content">{this.props.info.location}</span>
                        </li>
                    </ul>
                  </div>
                  {/*LINKS*/}
                  <div className="links">
                    {/* GITHUB*/}
                    <a href={this.props.links.github} className="social  btn-floating black"><i className="fa fa-github fa-3x" /></a>
                    {/* LINKEDIN*/}
                    <a href={this.props.links.linkedin} className="social  btn-floating blue darken-3"><i className="fa fa-linkedin" /></a>
                    {/* TWITTER*/}
                    <a href={this.props.links.twitter} className="social  btn-floating blue"><i className="fa fa-twitter" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }
}


export { Vcard }