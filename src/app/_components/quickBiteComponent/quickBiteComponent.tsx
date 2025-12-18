import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";

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
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Quick-Bite/Cart.png"
            alt="project image"
            width={900}
            height={900}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Quick-Bite/Menu.png"
            alt="project image"
            width={900}
            height={900}
            className=" rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Quick-Bite/Menu2.png"
            alt="project image"
            width={900}
            height={900}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Quick-Bite/Login.png"
            alt="project image"
            width={900}
            height={900}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem>
          <Image
            src="/Quick-Bite/Order.png"
            alt="project image"
            width={900}
            height={900}
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
