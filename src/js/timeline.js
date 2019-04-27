import React from "react";




class InfoBlock extends React.Component {

    constructor(props) {
        super(props);

        var dot_class = "fa fa-circle";
        switch(this.props.category){
          case "work":
            dot_class = "fa fa-briefcase";
            break;
          case "edu":
            dot_class = "fa fa-graduation-cap";
            break;
          default:
            dot_class = "fa fa-circle"
        }

        this.state = {
          dot_class: dot_class,
        }



    }

    render() {
        return (
            <div className="timeline-block">
              {/* DOT */}
              <div className="timeline-dot">
                <i className={this.state.dot_class}></i>
              </div>
              {/* TIMELINE CONTENT */}
              <div className="card timeline-content">
                <div className="card-content">
                  {/* TIMELINE LOGO */}
                  <div>
                  <img className="timeline-logo" src={this.props.logo} />
                  </div>
                  {/* TIMELINE TITLE */}
                  <h6 className="timeline-title">{this.props.company}</h6>
                  {/* TIMELINE TITLE INFO */}
                  <div className="timeline-info">
                    <h6>
                      <small>{this.props.position}</small>
                    </h6>
                    <h6>
                      <small>{this.props.start} - {this.props.end}</small>
                    </h6>
                  </div>
                  {/* TIMELINE PARAGRAPH */}
                  <p>
                    {this.props.summary}
                  </p>
                </div>
              </div>
            </div>
        );
    }
}


class EmptyBlock extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timeline-block">
              {/* DOT */}
              <div className="timeline-dot">
                <i class="fa fa-briefcase"></i>
              </div>
              {/* TIMELINE CONTENT */}
              <div className="card timeline-content">
                <div className="card-content">
                  {/* TIMELINE TITLE */}
                  <h6 className="timeline-title">{this.props.title}</h6>
                  {/* TIMELINE TITLE INFO */}
                  <div className="timeline-info">
                    <h6>
                      <small>RulerSoft</small>
                    </h6>
                    <h6>
                      <small>Jan 2010 - Mar 2012</small>
                    </h6>
                  </div>
                  {/* TIMELINE PARAGRAPH */}
                  <p>
                    I started my designing carrier here, spent tow years learning and working
                    in various designing aspects..
                  </p>
                  {/* BUTTON TRIGGER MODAL */}
                  <a href="#" className="modal-dot" data-toggle="modal" data-target="#myModal-4">
                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
        );
    }
}


class Timeline extends React.Component {

    constructor(props) {
        super(props);
    }


    render(){
        return (
          <section id={this.props.id} className="section">
             <div className="container">
              {/* SECTION TITLE */}
              <div className="section-title">
                <h4 className="text-uppercase text-center">{this.props.title}</h4>
              </div>
              <div id="timeline-body">
                {this.props.children}
              </div>
            </div>
          </section>

        );
    }

}





export { Timeline, InfoBlock, EmptyBlock }