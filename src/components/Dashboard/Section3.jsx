import { channels } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Section3 = () => {
  const windowScreen = window.outerWidth;

  return (
    <section className="bg-white my-4 p-4 pb-8 ml-2 sm:ml-0 mr-2 rounded-xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Channels</h2>
        <p className="text-sm font-semibold text-gray-500">
          Your statistics for 1 week period.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={
          windowScreen > 1024
            ? 4
            : windowScreen > 768
            ? 3
            : windowScreen > 400
            ? 2
            : 1
        }
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {channels.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-between items-center font-semibold bg-red-50 min-w-[180px] h-48 py-6 mt-4 rounded-lg">
              <img src={item.icon} className="w-12 h-12 rounded-full" />
              <h4 className="text-xl">{item.name}</h4>
              <span
                className={`text-lg ${
                  item.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.amount > 0 ? `+${item.amount}` : `${item.amount}`}%
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section3;
