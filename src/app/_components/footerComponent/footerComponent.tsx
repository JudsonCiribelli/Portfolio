import ContactComponent from "../contactComponent/contactComponent";

const FooterComponent = () => {
  return (
    <footer className="h-[450px] w-full  xl:h-[400px]  bg-black ">
      <h1 className="text-white text-center text-2xl xl:text-7xl">Contato</h1>
      <div>
        <ContactComponent />
      </div>
    </footer>
  );
};

export default FooterComponent;
