import React from "react";

const About = () => {
  return (
    <section className="about" data-section="about">
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="heading">Who Am I?</h2>
                  <p>
                    <strong>Hi I'm Marie Knowlton-Hotchkiss</strong> A
                    Hard-working web developer with a flair for web design,
                    testing and maintaining elegant, user-friendly web
                    applications in the least amount of time. Developed some
                    projects and fully-functional websites while attending Bloom
                    Instiute for Web Development.
                  </p>
                  <p>
                    Well-organised person, with high attention to detail. When
                    I'm not coding, you'll find me cooking, exploring places and
                    hanging out with friends.
                  </p>
                  <p>
                    Interested in working on ambitious projects with positive
                    people.
                  </p>
                  <p>
                    Current Focus:
                    <span className="current-focus">
                      Front End Development / Full Stack Web Development
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
