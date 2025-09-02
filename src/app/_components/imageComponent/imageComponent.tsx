import Image from "next/image";

const ImageComponent = () => {
  return (
    <div>
      <Image
        src="/image.jpg"
        alt="developer image"
        width={400}
        height={300}
        quality={100}
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default ImageComponent;
