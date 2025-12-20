import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
} from "../../../_components/ui/carousel";
import Image from "next/image";

const McProcessimComponent = () => {
  return (
    <Carousel className="w-[45%] h-[400px]">
      <CarouselContent className="gap-10">
        <CarouselItem>
          <Image
            src="/McProcessim/imageMcProcessim.png"
            alt="project image"
            width={900}
            height={900}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/McProcessim/TelaDoPedido.png"
            alt="project image"
            width={500}
            height={900}
            quality={100}
            className="object-cover rounded-lg ml-10"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/McProcessim/TelaDoProduto.png"
            alt="project image"
            width={900}
            height={900}
            quality={100}
            className=" rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/McProcessim/TelaInicial.png"
            alt="project image"
            width={500}
            height={900}
            quality={100}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/McProcessim/DataAndOrder.png"
            alt="project image"
            width={500}
            height={900}
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

export default McProcessimComponent;
