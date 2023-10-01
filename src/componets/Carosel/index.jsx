import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// exp

import Style from "./carosel.module.css";

import img from "../../assets/carousel/JF-Yogyakarta-v1.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getArticel } from "../../config/redux/actions/articelActions";
import Moment from "react-moment";

const Carousel = () => {
  const [loading, isLoading] = useState(false);
  let [data, setData] = useState([]);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticel(setData, isLoading));
  }, []);

  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data?.map((item) => (
          <SwiperSlide className={`pt-4 ${Style.SwiperContent} SwiperContent`}>
            <div className={` content ${Style.content}`}>
              <div className={`${Style.content1} content1`}>
                <div className={` border ${Style.content_text} content_text`}>
                  <p>{item.writer}</p>
                  <h1 className="title"> {item.title}</h1>
                  <hr />
                  <div className={` ${Style.time} time`}>
                    <p>
                      <Moment format="MMM, DD YYYY" withTitle>
                        {item.created_on}
                      </Moment>
                    </p>
                    <p className="font-weight-bold">
                      <Moment toNow>{item.created_on}</Moment>
                    </p>
                  </div>

                  <p className={`text-justify ${Style.text} text`}>{item.content}</p>
                  <div>
                    <Link className="btn btn-info" to={`/Detail/${item.id}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className={` ${Style.cover} cover`}>
                <img className={`${Style.imgCarousel} imgCarousel`} src={item.image} alt="image cotoh" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
