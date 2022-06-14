import React from "react";
import "../Cards/Cards.css";

export default function Cards({ _id, title, creator }) {
  return (
    <div>
      <div class="card-vertical">
        <img
          class="card-image"
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
          alt=" "
        />
        <span class="card-badge">Trending</span>
        <div class="card-info">
          <div class="card-title">
            <div>
              <h3 class="card-title-header">{title}</h3>
            </div>

            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </div>
        </div>
        <div class="card-creator">{creator}</div>
      </div>
    </div>
  );
}
