import ContactComponent from "../contactComponent/contactComponent";

const FooterComponent = () => {
  return (
    <footer
      className="mt-12 h-[450px] w-full bg-black xl:h-[450px]"
      id="contact"
    >
      <h1 className="text-center text-2xl text-white xl:text-7xl">Contato</h1>
      <div>
        <ContactComponent />
      </div>
    </footer>
  );
};

export default FooterComponent;
