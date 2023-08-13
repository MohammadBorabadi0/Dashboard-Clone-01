import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { ordersData } from "../data/data";

const CustomerSlider = () => {
  const settings = {
    grabCursor: true,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 5 },
      768: { slidesPerView: 2, spaceBetween: 5 },
      1024: { slidesPerView: 3, spaceBetween: 5 },
      1280: { slidesPerView: 4, spaceBetween: 5 },
    },
  };

  return (
    <section className="flex flex-col gap-3 my-6 ml-2 sm:ml-0 sm:mr-2 max-w-7xl">
      <h2 className="font-semibold text-2xl">Latest Sales</h2>
      <div className="flex gap-4">
        <Swiper {...settings}>
          {ordersData.map((order) => (
            <SwiperSlide key={order.id}>
              <section className="flex flex-col justify-center items-center mr-2 gap-4 bg-white rounded-md overflow-hidden">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full h-[350px] object-cover object-center rounded-sm"
                />
                <div className="flex flex-col gap-3 p-4">
                  <h2 className="text-xl font-semibold">{order.name}</h2>
                  <div className="flex justify-between items-center">
                    <span>{order.bought}</span>
                    <span>{order.date}</span>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerSlider;
