import React from "react";
import { SliderData } from "./SliderData";

const ImageSlider = () => {
  return (
    <>
      {SliderData.map(({ id, src, title, description }) => {
        return <img key={id} src={src} title={title} alt={description} />;
      })}
    </>
  );
};

export default ImageSlider;
