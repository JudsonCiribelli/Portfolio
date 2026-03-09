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

const BarberProComponent = () => {
  return (
    <Carousel className="w-[45%] h-[600px]">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/Barber-Pro/Desktop/Dashboard.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Barber-Pro/Desktop/book.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Barber-Pro/Desktop/Barber.png"
            alt="project image"
            width={900}
            height={900}
            style={imageStyle}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Barber-Pro/Desktop/Login.png"
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

export default BarberProComponent;
