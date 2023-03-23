import { clsx } from "clsx";
import React from "react";

const Card = React.forwardRef(function CardV2(props: any, ref: any) {
  return (
    <div
      ref={ref}
      className={clsx(
        props.className,
        "flex flex-auto rounded-lg py-2 shadow bg-white"
      )}
    >
      {props.children}
    </div>
  );
});

export default Card;
