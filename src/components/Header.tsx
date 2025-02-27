import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  hrLabLogo: string;
  hero: string;
  text: string;
  bgPosition: string;
};

export function Header({ hrLabLogo, hero, text, bgPosition }: HeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center mb-8">
      <Link href={`/`}>
        <Image
          className="mb-4 mt-4"
          src={hrLabLogo}
          width={150}
          height={150}
          alt="Logo"
        ></Image>
      </Link>
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: bgPosition,
        }}
        className={`px-6 sm:py-20 py-10 w-full min-h-full bg-cover bg-no-repeat`}
      >
        <div className="inline-block text-left text-blue bg-lightblue opacity-90 rounded-sm">
          <h1 className="text-5xl max-sm:text-xl font-bold p-3 uppercase">
            {text}
          </h1>
        </div>
      </div>
    </header>
  );
}
