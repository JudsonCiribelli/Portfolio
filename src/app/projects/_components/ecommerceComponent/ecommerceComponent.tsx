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

const EcommerceComponent = () => {
  return (
    <Carousel className="w-[45%] h-[600px]">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/Ecommerce/Desktop/HOME.png"
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
            src="/Ecommerce/Desktop/HAT.png"
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
            src="/Ecommerce/Desktop/CART.png"
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
            src="/Ecommerce/Desktop/LOGIN.png"
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
            src="/Ecommerce/Desktop/REGISTER.png"
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

export default EcommerceComponent;
