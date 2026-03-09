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

const InvetoryComponent = () => {
  return (
    <Carousel className="w-[45%] h-[600px]">
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/Inventory-Manager/Desktop/DASHBOARD.png"
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
            src="/Inventory-Manager/Desktop/PRODUCT.png"
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
            src="/Inventory-Manager/Desktop/ADD-PRODUCT.png"
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
            src="/Inventory-Manager/Desktop/DELETE-PRODUCT.png"
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
            src="/Inventory-Manager/Desktop/EDIT-PRODUCT.png"
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
            src="/Inventory-Manager/Desktop/SALES.png"
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
            src="/Inventory-Manager/Desktop/NEW-SALES.png"
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

export default InvetoryComponent;
