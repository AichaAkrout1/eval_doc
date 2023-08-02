import React from "react";
import { useSelector } from "react-redux";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Scss/magazinelist.css";

function MagazineList({ ping, setping }) {
  const magazines = useSelector((state) => state.magazine?.magazineliste);
  console.log("magazines", magazines);
  return (
    <div className="container-cards">
      <h3 style={{ margin: "0 0 30px 18px", fontWeight: "900" }}>Magazines</h3>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {magazines
          // ?.filter((el) => el?.name?.toLowerCase().includes(text.toLowerCase()))
          ?.map((el) => (
            
              <SwiperSlide className="swipermagazine">
                <Link
              to={`/trailler/${el._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
                <div className="swiperimg">
                  <img src={el.image} alt="" />
                </div>
                <button
                  style={{
                    marginTop: "15px",
                    marginLeft: "18px",
                    background:
                      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.8183648459383753) 50%, rgba(252,176,69,1) 100%)",
                    borderRadius: "5px",
                    border: "none",
                    color: "#fff",
                    fontFamily: "serif",
                  }}
                >
                  {el.title}
                </button>
                <h6
                  style={{
                    margin: "20px 0 0 18px",
                    color: "#3073D7",
                    fontFamily: "serif",
                  }}
                >
                  {el.subtitle}
                </h6>
                <p style={{ margin: "20px 0 0 18px", fontFamily: "serif" }}>
                  {el.paragraph}
                </p>
                </Link>
              </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MagazineList;
