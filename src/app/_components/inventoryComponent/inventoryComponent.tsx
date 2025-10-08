import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";

const InvetoryComponent = () => {
  return (
    <Carousel className="w-[45%] h-[400px]">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/Inventory-Manager/Dashboard.png"
            alt="project image"
            width={900}
            height={900}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Inventory-Manager/Products.png"
            alt="project image"
            width={900}
            height={900}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Inventory-Manager/newProduct.png"
            alt="project image"
            width={900}
            height={900}
            className=" rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Inventory-Manager/Sales.png"
            alt="project image"
            width={900}
            height={900}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem className="text-white">
          <Image
            src="/Inventory-Manager/newSale.png"
            alt="project image"
            width={900}
            height={900}
            className="object-cover rounded-lg"
          />
        </CarouselItem>

        <CarouselItem>
          <Image
            src="/Inventory-Manager/deleteSale.png"
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

export default InvetoryComponent;
