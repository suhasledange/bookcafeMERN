import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HomeSliderBlock from "./HomeSliderBlock";
import { HomeSlideImg1, HomeSlideImg2 } from "../../assets";
import Autoplay from 'embla-carousel-autoplay'
import { useState } from "react";
import { useEffect } from "react";
import Container from "../Container";

const HomeSliderData = [
  {
    id: 1,
    title: "Feed Your Mind Rent Read Repeat!",
    description: "Start Readig with BookCafe",
    image: HomeSlideImg1,
  },
  {
    id: 2,
    title: "Your Campus Library on Demand",
    description: "Rent Books at BookCafe",
    image: HomeSlideImg2,
  },
];

export default function HomeSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  },
  [Autoplay({
  delay: 3000, // 4 seconds between slides
//   stopOnInteraction: false, // keep sliding even after user clicks
//   stopOnMouseEnter: true,   // pause if mouse is over
})]
);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <Container>

    <div className="relative w-full px-10 py-6">

    {/*------------- slider content ---------------- */}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {HomeSliderData.map((data) => (
            <div key={data.id} className="min-w-full flex-shrink-0">
              <HomeSliderBlock
                title={data.title}
                description={data.description}
                image={data.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/*-------------- prev next buttons --------------- */}

      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* ----------------Dots for paginations ------------- */}
      
      <div className="flex justify-center mt-4 gap-2">
        {HomeSliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              selectedIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
    </Container>
  );
}
