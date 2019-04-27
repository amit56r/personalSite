import React from "react";
import { ProgressBar } from "react-bootstrap";

class SkillSection extends React.Component {}

class SkillBar extends React.Component {
  render() {
    return (
      <div classname="skillbar" data-percent="90%">
        <div classname="skillbar-title">
          <span>HTML5</span>
        </div>
        <progressbar now="{60}">
          ;<div classname="skill-bar-percent">90%</div>
        </progressbar>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <section id="skills" className="section">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="section-title">
            <h4 className="text-uppercase text-center">Skills</h4>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div id="skills-card" className="card">
                <div className="card-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      {/* FIRST SKILL SECTION */}
                      <div className="skills-title">
                        <h6 className="text-center">Professional</h6>
                      </div>
                      {/* FIRST SKILL BAR */}
                      <div className="skillbar" data-percent="90%">
                        <div className="skillbar-title">
                          <span>HTML5</span>
                        </div>
                        <ProgressBar now={60} />;
                        <div className="skill-bar-percent">90%</div>
                      </div>
                      {/* SECOND SKILL BAR  */}
                      <div className="skillbar" data-percent="90%">
                        <div className="skillbar-title">
                          <span>CSS3</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">90%</div>
                      </div>
                      {/* THIRD SKILL BAR  */}
                      <div className="skillbar" data-percent="70%">
                        <div className="skillbar-title">
                          <span>jQuery</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">70%</div>
                      </div>
                      {/* FOURTH SKILL BAR  */}
                      <div className="skillbar" data-percent="68%">
                        <div className="skillbar-title">
                          <span>PHP</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">68%</div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      {/* SECOND SKILL SECTION */}
                      <div className="skills-title">
                        <h6 className="text-center">Personal</h6>
                      </div>
                      {/* FIRST SKILL BAR */}
                      <div className="skillbar" data-percent="80%">
                        <div className="skillbar-title">
                          <span>Communication</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">80%</div>
                      </div>
                      {/* SECOND SKILL BAR  */}
                      <div className="skillbar" data-percent="60%">
                        <div className="skillbar-title">
                          <span>Teamwork</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">60%</div>
                      </div>
                      {/* THIRD SKILL BAR  */}
                      <div className="skillbar" data-percent="70%">
                        <div className="skillbar-title">
                          <span>Creativity</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">70%</div>
                      </div>
                      {/* FOURTH SKILL BAR  */}
                      <div className="skillbar" data-percent="70%">
                        <div className="skillbar-title">
                          <span>Dedication</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">70%</div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      {/* THIRD SKILL SECTION */}
                      <div className="skills-title">
                        <h6 className="text-center">Software</h6>
                      </div>
                      {/* FIRST SKILL BAR */}
                      <div className="skillbar" data-percent="80%">
                        <div className="skillbar-title">
                          <span>Adobe Illustrator</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">80%</div>
                      </div>
                      {/* SECOND SKILL BAR  */}
                      <div className="skillbar" data-percent="70%">
                        <div className="skillbar-title">
                          <span>Adobe InDesign</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">70%</div>
                      </div>
                      {/* THIRD SKILL BAR  */}
                      <div className="skillbar" data-percent="60%">
                        <div className="skillbar-title">
                          <span>PHP Storm</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">60%</div>
                      </div>
                      {/* FOURTH SKILL BAR  */}
                      <div className="skillbar" data-percent="80%">
                        <div className="skillbar-title">
                          <span>Dev Console</span>
                        </div>
                        <div className="skillbar-bar" />
                        <div className="skill-bar-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { Skills, SkillSection, SkillBar };
