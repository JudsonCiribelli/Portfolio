import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";

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
    <Carousel className="h-[600px] w-[47%]">
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
              className="rounded-lg object-cover"
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
