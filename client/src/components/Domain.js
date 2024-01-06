import React from "react";
import "../styles/domain.css";

export default function Domain() {
  return(
  <div className="domains ">
  <div className="heading flex items-center justify-center h-32 sm:h-48 bg-slate-950">
  </div>

      <div className="sub-domain flex items-center justify-center h-16 sm:h-24 md:h-32 lg:h-40 bg-slate-900">
        <div className="technical-text text-white text-2xl sm:text-4xl font-bold">
          <h1
            className="head text-center"
            data-text="&nbsp;TECHNICAL DOMAINS&nbsp;"
          >
            &nbsp;TECHNICAL DOMAINS&nbsp;
          </h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="domain-conatiner-one flex flex-wrap justify-center bg-slate-950">
        <div className="containerrr">
          <div className="serviceBox">
            <div className="icon">
              <i className="img_heading">
                <img
                  className="domain-img"
                  src={require("../domain_images/webdev.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>WEB DEVELOPMENT</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>WEB DEVELOPMENT</h2> */}
              </div>

              <p>
                Web development is the work involved in developing a Web site
                for the Internet or an intranet. PCSB has it's own website
                developed by the members itself. We also put in efforts for
                developing websites for various events conducted throughout the
                year.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-search">
                <img
                  className="domain-img"
                  src={require("../domain_images/appdev.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>APP DEVELOPMENT</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>APP DEVELOPMENT</h2> */}
              </div>
              <p>
                Mobile app development is the act or process by which a mobile
                app is developed for mobile devices, such as personal digital
                assistants, enterprise digital assistants or mobile phones. Our
                PCSB team has made our own app for the event Xenia.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-chart-bar">
                <img
                  className="domain-img"
                  src={require("../domain_images/machinelearning.svg").default}
                  alt="domain-img"
                  height="10px"
                />
              </i>
              <h3>MACHINE LEARNING</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>MACHINE LEARNING</h2> */}
              </div>
              <p>
                Machine learning is the study of computer algorithms that can
                improve automatically through experience and by the use of data.
                It is seen as a part of artificial intelligence.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-video">
                <img
                  className="domain-img"
                  src={require("../domain_images/blockchain.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>BLOCK CHAIN</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>BLOCK CHAIN</h2> */}
              </div>
              <p>
                Blockchain is a cryptocurrency blockchain explorer service, as
                well as a cryptocurrency wallet and a cryptocurrency exchange
                supporting Bitcoin, Bitcoin Cash, and Ethereum. They also
                provide Bitcoin data charts, statistics, and market information.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-gamepad">
                <img
                  className="domain-img"
                  src={require("../domain_images/cybersecurity.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>CYBER SECURITY</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>CYBER SECURITY</h2> */}
              </div>
              <p>
                Cybersecurity or information technology security is the
                protection of computer systems and networks from information
                disclosure, theft of or damage to their hardware, software, or
                electronic data, as well as from the disruption or misdirection
                of the services they provide.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-gamepad">
                <img
                  className="domain-img"
                  src={require("../domain_images/cp.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>COMPETITIVE PROGRAMMING</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>COMPETITIVE PROGRAMMING</h2> */}
              </div>
              <p>
                Competitive programming is a mind sport usually held over the
                Internet or a local network, involving participants trying to
                program according to provided specifications.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-gamepad">
                <img
                  className="domain-img"
                  src={require("../domain_images/cp.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>CODING CIRCLE</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>CODING CIRCLE</h2> */}
              </div>
              <p>
                Coding Circle is a collaborative community and intellectual
                endeavor, typically conducted online or within a local group,
                where enthusiasts come together to code in alignment with given
                directives and challenges.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-gamepad">
                <img
                  className="domain-img"
                  src={require("../domain_images/cloudcomputing.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>CLOUD COMPUTING</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>CLOUD COMPUTING</h2> */}
              </div>
              <p>
                Cloud computing is the on-demand availability of computer system
                resources, especially data storage and computing power, without
                direct active management by the user.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-domain flex items-center justify-center h-16 sm:h-24 md:h-32 lg:h-40 bg-slate-900">
        <div className="technical-text text-white text-2xl sm:text-4xl font-bold">
          <h1
            className="head text-center"
            data-text="&nbsp;NON-TECHNICAL DOMAINS&nbsp;"
          >
            &nbsp;NON-TECHNICAL DOMAINS&nbsp;
          </h1>
        </div>
      </div>

      <div className="domain-conatiner-one flex flex-wrap justify-center bg-slate-950">
        <div className="containerrr ">
          <div className="serviceBox">
            <div className="icon">
              <i className="img_heading">
                <img
                  className="domain-img"
                  src={require("../domain_images/finance.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>FINANCE</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>FINANCE</h2> */}
              </div>

              <p>
                Finance is a term for matters regarding the management,
                creation, and study of money and investments. Specifically, it
                deals with the questions of how an individual, company or
                government acquires money called capital in the context of a
                business and how they spend or invest that money.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-search">
                <img
                  className="domain-img"
                  src={require("../domain_images/bussiness.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>BUSINESS</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>BUSINESS</h2> */}
              </div>
              <p>
                Business administration is the administration of a commercial
                enterprise. It includes all aspects of overseeing and
                supervising business operations.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-chart-bar">
                <img
                  className="domain-img"
                  src={require("../domain_images/design.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>DESIGN</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>DESIGN</h2> */}
              </div>
              <p>
                Graphic design is the profession and academic discipline whose
                activity consists in projecting visual communications intended
                to transmit specific messages to social groups, with specific
                objectives.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-video">
                <img
                  className="domain-img"
                  src={require("../domain_images/content.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>CONTENT</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>CONTENT</h2> */}
              </div>
              <p>
                In publishing, art, and communication, contenters is the
                information and experiences that are directed toward an end-user
                or audience. contenters is "something that is to be expressed
                through some medium, as speech, writing or any of various arts
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-gamepad">
                <img
                  className="domain-img"
                  src={require("../domain_images/marketing.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>MARKETING</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>MARKETING</h2> */}
              </div>
              <p>
                Marketing refers to the process an organization undertakes to
                engage its target audience, build strong relationships to create
                value in order to capture value in return. It is one of the
                primary components of business management and commerce.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-gamepad">
                <img
                  className="domain-img"
                  src={require("../domain_images/eventmanagement.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>EVENT MANAGEMENT</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>EVENT MANAGEMENT</h2> */}
              </div>
              <p>
                Event management is the application of project management to the
                creation and development of small and/or large-scale personal or
                corporate events such as festivals, conferences, ceremonies,
                weddings, formal parties, concerts, or conventions.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
              <i className="fas fa-gamepad">
                <img
                  className="domain-img"
                  src={require("../domain_images/socialworks.svg").default}
                  alt="domain-img"
                />
              </i>
              <h3>LEADERSHIP</h3>
            </div>
            <div className="contenters">
              <div className="heading">
                {/* <h2>LEADERSHIP</h2> */}
              </div>
              <p>
                Leadership is a multifaceted concept and a practical skillset
                that revolves around guiding individuals, teams, organizations,
                and societies towards achieving common goals while fostering
                personal growth, shared accountability, effective
                decision-making, and the overall prosperity of the collective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
