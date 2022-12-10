import React from 'react';

import HeroMain from "./Sections/Hero/Main";
import ProductMain from "./Sections/Product/Main";

const HomeMain:React.FC = () => {
  return (
    <div>
      <HeroMain />
      <ProductMain />
    </div>
  );
};

export default HomeMain;