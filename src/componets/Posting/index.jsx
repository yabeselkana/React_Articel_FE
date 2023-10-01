import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getArticel } from "../../config/redux/actions/articelActions";

import Style from "./postingan.module.css";
import Moment from "react-moment";
import Skeleton from "react-loading-skeleton";

const Posting = () => {
  let [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticel(setData, isLoading));
  }, []);

  return (
    <section>
      <div className="container mt-4">
        <h3>All Post</h3>
        <div className="row">
          {loading ? (
            <div>
              <Skeleton count={5} />
            </div>
          ) : (
            <div className="row">
              {data?.map((item, index) => (
                <div className="col-md-3 col-sm-6 mb-5">
                  <Link to={`/Detail/${item.id}`} key={index.toString()} style={{ color: "black" }}>
                    <div className="border rounded product">
                      <img className="w-100" src={item.image} crossOrigin="Anonymous" alt="cloth" />
                      <div className="p-2">
                        <div className={`title ${Style.title}`}>
                          <h5 className="card-title">{item.title}</h5>
                          <p className="font-weight-bold">{item.writer}</p>
                        </div>

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
                        <div>
                          <Link className="" to={`/Detail/${item.id}`}>
                            <span className="text-dark"> Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Posting;
