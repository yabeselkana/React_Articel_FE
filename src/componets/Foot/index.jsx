import React from "react";

import style from "./foot.module.css";

// import { Image } from "react-bootstrap";
import img from "../../assets/Auth/iconBlog.png";

const Foot = () => {
  return (
    <>
      <div className={style.Footer}>
        <div className="container">
          <div className="brand">
            <div className="row mb-3">
              <div className="col-md-8 col-12">
                <h1>Articel</h1>
              </div>
            </div>
            <div className="row description">
              <div className="col-md-8 col-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae eum quod dicta, blanditiis quidem, nulla fugit repellendus veritatis tempore ullam sint officia. Veritatis quibusdam quam sit! Laudantium, facilis,
                  odit debitis consequatur ut expedita aliquam, molestiae perferendis sunt distinctio asperiores quod magnam quas eum libero ratione quis hic maiores! Quis?
                </p>
              </div>
            </div>
            <hr style={{ border: "1.5px solid white" }} />
            <div className="row d-flex flex-column-reverse flex-sm-row justify-content-between">
              <div className="col-12 col-md-4 text-md-start text-center ">
                <p>2023 articel. All right reserved</p>
              </div>
              <div className="col-12">
                {/* <span className='me-5'>085832095871</span>
                        <span>dhimasswara08@gmail.com</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foot;
