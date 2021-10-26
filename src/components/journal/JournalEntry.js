import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 

        className="journal__entry-picture"
        style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://m.media-amazon.com/images/I/71An-c9UxXS._AC_SX679_.jpg)'
        }}
        >
      </div>
      <div className="journal__entry-body">
          <p className="journal__entry-title">
              Un nuevo dia
          </p>
          <p className="journal__entry-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sit?
          </p>
      </div>
      <div className="journal__entry-date-box">
          <span>
              Monday
          </span>
          <h4>28</h4>
      </div>
    </div>
  );
};
