import React from "react";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <Carousel
      autoplay={true}
      interval={2000}
      startIndex={2}
      images={[
        "https://loremflickr.com/cache/resized/65535_52762952436_c3c6b46e79_300_200_nofilter.jpg",
        "https://loremflickr.com/cache/resized/65535_52636628437_c9406d0c11_n_300_200_nofilter.jpg",
        "https://loremflickr.com/cache/resized/65535_52625871074_907bb728af_300_200_nofilter.jpg",
      ]}
    />
  );
};

export default App;
