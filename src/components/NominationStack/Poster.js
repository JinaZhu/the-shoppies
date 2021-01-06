import React from "react";

import { animated, interpolate } from "react-spring";

const Poster = ({ i, springProps, trans, bind, nominations }) => {
  const { x, y, rot, scale } = springProps;
  const image = nominations[i]["Poster"];
  const Title = nominations[i]["Title"];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        {image !== "N/A" ? (
          <img src={image} alt="poster" />
        ) : (
          <div>
            <p>{Title}</p>
            <p>Poster Not Available</p>
          </div>
        )}
      </animated.div>
    </animated.div>
  );
};

export default Poster;
