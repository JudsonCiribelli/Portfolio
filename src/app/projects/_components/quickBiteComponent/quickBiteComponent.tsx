import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
} from "../../../_components/ui/carousel";
import Image from "next/image";

const imageStyle = {
  width: "1080px",
  height: "500px",
};

const QuickBiteComponent = () => {
  return (
    <Carousel className="w-[45%] h-[600px]">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/Quick-Bite/Dashboard.png"
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
            src="/Quick-Bite/Cart.png"
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
            src="/Quick-Bite/Product.png"
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
            src="/Quick-Bite/Order.png"
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

export default QuickBiteComponent;
