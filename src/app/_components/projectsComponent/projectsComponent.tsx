import { BorderBeam } from "@/app/magicui/border-beam";
import InventoryDescription from "../Inventory-Description/inventoryDescription";
import InvetoryComponent from "../inventoryComponent/inventoryComponent";
import QuickBiteComponent from "../quickBiteComponent/quickBiteComponent";
import QuickBiteDescription from "../quickBiteDescription/quickBiteDescription";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import McProcessimComponent from "@/app/projects/_components/McProcessimComponent/mcProcessimComponent";
import McProcessimDescription from "@/app/projects/_components/McProcessimDescription/mcProcessimDescription";

const ProjectsComponents = () => {
  return (
    <>
      <Carousel className="flex flex-col w-full max-w-[1400px] max-h-[900px] p-4 rounded-lg">
        <CarouselContent>
          {Array.from({ length: 2 }).map((_, index) => (
            <>
              <CarouselItem>
                <div className="flex flex-col items-center justify-evenly xl:flex-row">
                  <QuickBiteComponent />

                  <div className="w-[40%] h-[600px] mb-12">
                    <QuickBiteDescription />
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem key={index}>
                <div className="flex items-center justify-evenly">
                  <InvetoryComponent />

                  <div className="w-[40%] h-[600px] mb-12">
                    <InventoryDescription />
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem key={index}>
                <div className="flex items-center justify-evenly">
                  <McProcessimComponent />

                  <div className="w-[40%] h-[600px] mb-12">
                    <McProcessimDescription />
                  </div>
                </div>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <BorderBeam duration={12} size={80} className="via-white" />
      </Carousel>
    </>
  );
};

export default ProjectsComponents;
