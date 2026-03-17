import Image from "next/image";

const ImageComponent = () => {
  return (
    <Image
      src="/ASL_4347.jpg"
      alt="developer image"
      width={300}
      height={300}
      quality={100}
      className="rounded-full object-cover"
    />
  );
};

export default ImageComponent;
