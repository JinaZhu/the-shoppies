import React, { useState } from "react";
import { useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";

import { StackContainer } from "./styled";
import Poster from "./Poster";
import NoNomination from "./NoNomination";

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const NominationStack = () => {
  const [nominations, setNominations] = useState(
    JSON.parse(localStorage.getItem("nominations"))
  );
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(Object.keys(nominations).length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);

      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;

        if (isGone && dir > 0) {
          const removeMovieID = Object.values(nominations)[i].imdbID;
          const updatedNominations = { ...nominations };
          delete updatedNominations[removeMovieID];
          localStorage.setItem(
            "nominations",
            JSON.stringify(updatedNominations)
          );
        }

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === Object.keys(nominations).length) {
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
        setNominations(JSON.parse(localStorage.getItem("nominations")));
      }
    }
  );

  if (!Object.keys(nominations).length) {
    return <NoNomination />;
  }

  return (
    <StackContainer>
      {props.map((springProps, i) => (
        <Poster
          key={i}
          i={i}
          springProps={springProps}
          trans={trans}
          nominations={Object.values(nominations)}
          bind={bind}
        />
      ))}
    </StackContainer>
  );
};

export default NominationStack;
