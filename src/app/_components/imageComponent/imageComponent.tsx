import Image from "next/image";

const ImageComponent = () => {
  return (
    <div className="mb-12 xl:mb-0">
      <Image
        src="/ASL_4347.jpg"
        alt="developer image"
        width={300}
        height={300}
        quality={100}
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default ImageComponent;
