import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const HTML = 95;
const CSS = 80;
const JavaScript = 85;
const ReactJS = 88;
const NodeJS = 60;
const SQL = 80;
const CSharp = 10;
const Angular = 10;
const ASPDotNetCore = 5;

const Skills = () => {
  return (
    <>
      <div id="skill" className="section">
        <div className="section__container">
          <h1>Skills</h1>
          <h2>Skills & Attributes</h2>
          <p>
            Experience with all phases of the software life-cycle. Passion for
            learning new technologies. Capable of working within a team
            environment and independently. Ability to plan and time schedule,
            work under strict time pressure and adapt quickly when needed.
          </p>
          <div className="skillset">
            <div className="skillset__left">
              <h3 className="skillset__title">Skills</h3>

              <div className="skill">
                <div className="skill__description">
                  <span>HTML</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={HTML}
                      label={`${HTML}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>CSS</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={CSS}
                      label={`${CSS}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>JavaScript</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={JavaScript}
                      label={`${JavaScript}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>ReactJS</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={ReactJS}
                      label={`${ReactJS}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>NodeJS</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={NodeJS}
                      label={`${NodeJS}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>SQL</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={SQL}
                      label={`${SQL}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>C#</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={CSharp}
                      label={`${CSharp}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>Angular</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={Angular}
                      label={`${Angular}%`}
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skill__description">
                  <span>ASP.NET Core</span>
                  <div className="skill__bar">
                    <ProgressBar
                      variant="warning"
                      now={ASPDotNetCore}
                      label={`${ASPDotNetCore}%`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="skillset__right">
              <div className="tools">
                <h3 className="sillset__title">Tools</h3>
                <ul className="tools__list">
                  <li>
                    <span>Visual Studio Code</span>
                  </li>
                  <li>
                    <span>Visual Studio</span>
                  </li>
                  <li>
                    <span>Adobe XD</span>
                  </li>
                  <li>
                    <span>Eclipse</span>
                  </li>
                  <li>
                    <span>Netbean</span>
                  </li>
                </ul>
              </div>

              <div className="etc">
                <h3 className="sillset__title">ETC</h3>
                <ul className="etc__list">
                  <li>
                    <span>Git</span>
                  </li>
                  <li>
                    <span>GitHub</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
