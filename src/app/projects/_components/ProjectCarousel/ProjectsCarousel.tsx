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

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  images: CarouselImage[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  return (
    <Carousel className="w-[47%] h-[600px]">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="text-white">
            <Image
              src={image.src}
              alt={image.alt}
              width={1280}
              height={720}
              style={imageStyle}
              quality={100}
              className="object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
