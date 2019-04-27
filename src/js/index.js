
import React from "react";
import ReactDOM from "react-dom";

// dist css
import "font-awesome/css/font-awesome.css";
//import "magnific-popup/dist/magnific-popup.css";
//import "swiper/dist/css/swiper.css";
import "materialize-css/dist/css/materialize.css"
import "bootstrap/dist/css/bootstrap.css"

//css 
import "../scss/style.scss"

// dist js
//import "animate"
//import "jquery"
//import "swiper"
//import "magnific-popup"
//import "react-materialize"
//import "materialize-css"

//import "bootstrap/dist/js/bootstrap.bundle.js"
//import "font-awesome"

import "animate.css"
import ScrollReveal from 'scrollreveal'

// Components

import { Loader } from "./loader";
import { Header } from "./header"
import { Vcard } from "./vcard";
import { About } from "./about";
import { Timeline, InfoBlock, EmptyBlock } from "./timeline"
import { Skills, SkillSection, SkillBar } from "./skills"




var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title img';


var me = {
  name: "Amit Roy",
  title: "Software Engineer",
  info: {
    work: "Google",
    location: "SF Bay area"
  },
  links:{
    linkedin: "",
    github: "",
    twitter: ""
  }
}


class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState(
      {loading: false}
    );
    let sr = ScrollReveal();
    sr.reveal(commonCards, {duration: 1100, scale: 0.85});
    sr.reveal('#about-card,.map-label', {duration: 1400, delay: 500});
    sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});
    sr.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});
  }


  render() {
    return (
        <div>
            <Loader
              name={me.name}
              title= {me.title}
              loading={this.state.loading}
            />
            <Header/>
            <Vcard
              name={me.name}
              title={me.title}
              info={me.info}
              links={me.links}
            />
            <About
              body="test test tetst"
            />
            <Timeline
              title="Experience & Education"
            >
              <InfoBlock
              category="work"
              company="Google"
              position="Sotware Engineer"
              start="Feburary 2019"
              end="present"
              summary="test tes tes test"
              logo={require("../images/logos/google_logo.png")}
              />
              <InfoBlock
              category="work"
              company="drchrono"
              position="Senior Sotware Engineer"
              start="Feburary 2019"
              end="present"
              summary="test tes tes test"
              logo={require("../images/logos/drchrono_logo.png")}
              />
              <InfoBlock
              category="work"
              company="Argonne Nation Lab"
              position="Research Intern"
              start="Feburary 2019"
              end="present"
              summary="test tes tes test"
              logo={require("../images/logos/argonne_logo.png")}
              />
              <InfoBlock
              category="work"
              company="University of Utah"
              position="Research Assistant"
              start="Feburary 2019"
              end="present"
              summary="test tes tes test"
              logo={require("../images/logos/uou_work_logo.png")}
              />
              <InfoBlock
              category="edu"
              company="University of Utah"
              position="Research Assistant"
              start="Feburary 2019"
              end="present"
              summary="test tes tes test"
              logo={require("../images/logos/uou_logo.png")}
              />
              <InfoBlock
              category="edu"
              company="Ohio Wesleyan University"
              position="Research Assistant"
              start="Feburary 2019"
              end="present"
              summary="test tes tes test"
              logo={require("../images/logos/owu_logo.png")}
              />
            </Timeline>
            <Skills/>
        </div>
    );
  }
}





ReactDOM.render(
  <Index />,
  document.getElementById('root')
);