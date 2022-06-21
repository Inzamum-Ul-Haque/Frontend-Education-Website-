import React from "react";
import Title from "../../common/title/Title";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              sint, nam autem officiis laudantium, corrupti quis cumque adipisci
              iusto mollitia deserunt incidunt ducimus error. Vel asperiores
              possimus numquam accusantium totam tempore eligendi aperiam.
              Quisquam deleniti sequi hic accusantium consequuntur. Possimus
              unde deleniti non mollitia a dolorem voluptate iure numquam optio.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
