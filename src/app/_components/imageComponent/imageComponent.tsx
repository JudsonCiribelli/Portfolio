import Image from "next/image";

const ImageComponent = () => {
  return (
    <div>
      <Image
        src="/image.jpg"
        alt="developer image"
        width={400}
        height={200}
        quality={100}
        className="object-fill rounded-full"
      />
    </div>
  );
};

export default ImageComponent;
