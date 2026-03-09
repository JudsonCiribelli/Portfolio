import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import Image from "next/image";

const imageStyle = {
  width: "1080px",
  height: "500px",
};

const SportCarsComponent = () => {
  return (
    <Carousel className="w-[45%] h-[600px]">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/SportCars/Desktop/HOME.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem>
          <Image
            src="/SportCars/Desktop/CAR.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="flex items-center justify-center">
          <Image
            src="/SportCars/Desktop/REGISTER-CAR.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem>
          <Image
            src="/SportCars/Desktop/DASHBOARD.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="flex items-center justify-center">
          <Image
            src="/SportCars/Desktop/SELLS.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SportCarsComponent;
