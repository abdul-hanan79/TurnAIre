import Image from "next/image";


interface LoadingImageProps {
  src: string;
  alt: string;
}

export const LoadingImage: React.FC<LoadingImageProps> = ({ src, alt }) => {
  return (
    <section className="bg-primary  hero-section flex justify-center items-center h-full">
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        width={200}
        height={200}
        // className="object-contain w-full aspect-[0.46]"
      />
    </section>
  );
}

export default LoadingImage;