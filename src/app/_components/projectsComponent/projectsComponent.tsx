import { BorderBeam } from "@/app/magicui/border-beam";
import InventoryDescription from "../../projects/_components/Inventory-Description/inventoryDescription";
import QuickBiteComponent from "@/app/projects/_components/quickBiteComponent/quickBiteComponent";
import QuickBiteDescription from "@/app/projects/_components/quickBiteDescription/quickBiteDescription";
import InvetoryComponent from "@/app/projects/_components/inventoryComponent/inventoryComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import SportCarsComponent from "@/app/projects/_components/sportCarsComponent/sportCarsComponent";
import SportCarsDescription from "@/app/projects/_components/sportCarsDescription/sportCarsDescription";
import BarberProComponent from "@/app/projects/_components/barberProComponent/barberProComponent";
import BarberProDescription from "@/app/projects/_components/barberProDescription/barberProDescription";
import McProcessimComponent from "@/app/projects/_components/McProcessimComponent/mcProcessimComponent";
import McProcessimDescription from "@/app/projects/_components/McProcessimDescription/mcProcessimDescription";
import EcommerceComponent from "@/app/projects/_components/ecommerceComponent/ecommerceComponent";
import EcommerceDescription from "@/app/projects/_components/ecommerceDescription/ecommerceDescription";

const ProjectsComponents = () => {
  return (
    <>
      <Carousel className="flex flex-col w-full max-w-[1400px] max-h-[900px] p-4 rounded-lg">
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <QuickBiteComponent />

              <div className="w-[40%] h-[600px] mb-12">
                <QuickBiteDescription />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <SportCarsComponent />

              <div className="w-[40%] h-[600px] mb-12">
                <SportCarsDescription />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <InvetoryComponent />

              <div className="w-[40%] h-[600px] mb-12">
                <InventoryDescription />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <BarberProComponent />

              <div className="w-[40%] h-[600px] mb-12">
                <BarberProDescription />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <McProcessimComponent />

              <div className="w-[40%] h-[600px] mb-12">
                <McProcessimDescription />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex items-center justify-evenly">
              <EcommerceComponent />

              <div className="w-[40%] h-[600px] mb-12">
                <EcommerceDescription />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <BorderBeam duration={12} size={80} className="via-white" />
      </Carousel>
    </>
  );
};

export default ProjectsComponents;
