import React from "react";
import "../Cards/Cards.css";
import { GoKebabVertical } from "react-icons/go";
import { Link } from "react-router-dom";

const Cards = ({ _id, title, creator, profile }) => {
  return (
    <div>
      <div className="card-vertical">
        <Link to={`/video/${_id}`}>
        <img
          className="card-image"
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
          alt={_id}
        />
        </Link>

        <div className="card-info">
          <div className="card-heading">
            <div></div>
            <h3 className="card-title-header">{title}</h3>
          </div>
          <div className="video-desc">
            <img
              className="disc creator-avator avator-xs-size"
              src={profile}
              alt={title}
            />
            <p className="disc">{creator}</p>
            <GoKebabVertical className="disc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cards };
