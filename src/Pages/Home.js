import React from "react";
import Wrapper from "../components/Wrapper";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import ProductCard1 from "../components/ProductCard1";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            <h1>Discover. Shop. Enjoy.</h1>
          </div>
          <div className="text-md md:text-xl">
          Uncover an exciting world of shopping and experience the joy of finding what you love.
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard1 />
          
        </div>
        {/* products grid end */}
      </Wrapper>
    </>
  );
};

export default Home;
