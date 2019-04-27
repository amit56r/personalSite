import React from "react";

class About extends React.Component {
  render() {
    return (
      <div id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* DETAILS */}
              <div id="about-card" className="card">
                <div className="card-content">
                  {/* ABOUT PARAGRAPH */}
                  <p>{this.props.body}</p>
                </div>
                {/* BUTTONS */}
                <div id="about-btn" className="card-action">
                  <div className="about-btn">
                    {/* DOWNLOAD CV BUTTON */}
                    <a href={this.props.cv} className="btn waves-effect">
                      Download CV
                    </a>
                    {/* CONTACT BUTTON */}
                    <a href="#contact" className="btn waves-effect">
                      Contact Me
                    </a>
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

export { About };
