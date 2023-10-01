import React, { useEffect, useState } from "react";
import Style from "./details.module.css";
import { useParams } from "react-router-dom";
// import { getArticelDetail } from "../../config/redux/actions/articelActions";
import { useDispatch } from "react-redux";
import { getDetailArticel } from "../../config/redux/actions/articelActions";
import Moment from "react-moment";
import Skeleton from "react-loading-skeleton";

const Details = ({}) => {
  let [data, setData] = useState([]);
  let { id } = useParams();
  let dispatch = useDispatch();
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    dispatch(getDetailArticel(setData, id, isLoading));
  }, [id]);

  return (
    <>
      <section className="container">
        {loading ? (
          <div>
            <Skeleton count={5} />
          </div>
        ) : (
          <div>
            <div className={`image ${Style.image} `}>
              <img className={`imageTitle  ${Style.imageTitle}`} src={data.image} alt="images" />
              <h1 className={`title ${Style.title}`}>{data.title}</h1>
            </div>
            <div className={` ${Style.time} time`}>
              <p>By {data.writer}</p>
              <p>
                <Moment format="MMM, DD YYYY" withTitle>
                  {data.created_on}
                </Moment>
              </p>
            </div>
            <hr />
            <div className="">
              <p className="text-justify">{data.content}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Details;
