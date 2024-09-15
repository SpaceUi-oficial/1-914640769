"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Image from "next/image";
interface ImageSwiperProps {
  imageSrcs: string[]; // Array de URLs de las imágenes
  texts: { title: string; description1: string }[];
}
export default function CarouselSection({
  imageSrcs,
  texts,
}: ImageSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full h-[85vh] p-2 bg-white">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20} // Espacio entre slides
        slidesPerView={1.5} // Ver 1 slide completo y parte de otros
        centeredSlides={true} // Centra el slide activo
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Actualiza el índice activo
        className="h-full " // Ajusta la altura del swiper
        modules={[Pagination]}
      >
        {imageSrcs.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative h-[95%] w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              {index !== activeIndex && (
                <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>
              )}
              {index === activeIndex && (
                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                  <div className="flex flex-col items-center justify-between w-full">
                    <div className="flex items-center  w-full absolute bottom-16 pl-16 gap-5">
                      <button className="bg-white text-black py-3 px-6 rounded-full">
                        Ver ahora
                      </button>
                      <div className="flex  gap-5  items-center">
                        <p className="text-white mb-1 text-xl font-semibold">
                          {texts[index]?.title || "Texto 1"}
                        </p>
                        <p className="text-white text-lg">
                          {texts[index]?.description1 || "Texto 2"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}
