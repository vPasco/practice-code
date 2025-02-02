import Image from "next/image";

export default function registerImage() {
  return (
    <div className="relative w-full bg-blue-500 hidden md:block">
      <Image
        src="/dice.jpg"
        alt="Register Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
