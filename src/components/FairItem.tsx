import Image from "next/image";
import Link from "next/link";

type FairItemProps = {
  id: number;
  name: string;
  logo: string;
  start_date: Date;
  end_date: Date;
};

export function FairItem({
  id,
  name,
  logo,
  start_date,
  end_date,
}: FairItemProps) {
  return (
    <li className="text-center" key={id}>
      <h3 className="font-bold text-2xl mb-2">{name}</h3>
      <Link
        className="flex justify-center"
        href={`/${name.toLowerCase().replace(/\s/g, "").replace(/ü/g, "ue")}`}
      >
        <Image
          className="mb-2 rounded-md hover:scale-105 transition-all duration-500"
          src={logo}
          width={250}
          height={250}
          alt={name}
        />
      </Link>
      <p className="mb-6 font-bold">
        {start_date.getDate()}. – {end_date.getDate()}.{" "}
        {start_date.toLocaleString("de-DE", { month: "long" })}{" "}
        {start_date.getFullYear()}
      </p>
      <Link
        className="bg-orange text-white py-3 px-5 rounded-md font-bold uppercase hover:bg-orangehov"
        href={`/${name.toLowerCase().replace(/\s/g, "").replace(/ü/g, "ue")}`}
      >
        » Mehr erfahren «
      </Link>
    </li>
  );
}
