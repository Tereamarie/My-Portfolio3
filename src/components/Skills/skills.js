import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <div class="skills-top">
        <h2> Languages Implemented in all projects</h2>
        <div class="col-4 col-6-medium col-12-small">
          <section id="box-style1">
            <i class="fab fa-html"></i>
            <h3>HTML</h3>
            <div class="meter">
              <span style={{ width: "100%" }}></span>
            </div>
          </section>
        </div>

        <div class="col-4 col-6-medium col-12-small">
          <div className="box-style1">
            <h3>CSS</h3>
            <div class="meter orange nostripes">
              <span style={{ width: "100%" }}></span>
            </div>
          </div>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <section id="box-style1">
            <h3>React</h3>
            <div class="meter red">
              <span style={{ width: " 80%" }}></span>
            </div>
          </section>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <section id="box-style1">
            <h3>Redux</h3>
            <div class="meter animate">
              <span style={{ width: "100%" }}>
                <span></span>
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
