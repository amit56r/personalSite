import React from "react";

import { CSSTransitionGroup } from 'react-transition-group';

class Loader extends React.Component{
    render() {
        return (
    <CSSTransitionGroup
        transitionName="react-loading"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
    >
    {this.props.loading && 
          <div id="loading" key="loader">
            <div id="loading-center">
              <div id="loading-center-absolute">
                <div className="box-holder animated bounceInDown">
                  <span className="load-box"><span className="box-inner" /></span>
                </div>
                {/* NAME & STATUS */}
                <div className="text-holder text-center">
                  <h2>{this.props.name}</h2>
                  <h6>{this.props.title}</h6>
                </div>
              </div>
            </div>
          </div>
    }
    </CSSTransitionGroup>
    );

    }
}

export { Loader }