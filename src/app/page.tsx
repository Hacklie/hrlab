import { prisma } from "@/db";
import { FairItem } from "@/components/FairItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hrLabLogo from "../../public/img/hrlab_logo.svg";

// import FairsJSON from "../data/fairs.mock.json";

function getFairs() {
  return prisma.fair.findMany({
    include: {
      address: true,
    },
  });
}

export default async function Home() {
  // seedFairs();

  const fairs = await getFairs();
  return (
    <>
      <Header
        hrLabLogo={hrLabLogo}
        hero="/img/hero.jpg"
        text="Bevorstehende Events"
        bgPosition="center"
      />

      <main className="container mx-auto px-40 max-sm:px-4 max-xl:px-8 text-center flex-1">
        <p className="mb-4">
          Hier finden Sie alle Messen, an denen wir teilnehmen. Wir freuen uns
          darauf, Sie an unseren Ständen begrüßen zu dürfen und Ihnen unsere
          neuesten Produkte und Dienstleistungen vorzustellen. Besuchen Sie uns
          und erfahren Sie mehr über unsere Angebote und wie wir Ihnen helfen
          können, Ihre Ziele zu erreichen.
        </p>
        <h2 className="text-3xl max-sm:text-2xl font-bold mb-6 text-blue uppercase">
          Events:
        </h2>
        <ul className="flex justify-center gap-16 flex-wrap">
          {fairs.map((fair) => (
            <FairItem
              key={fair.id}
              id={fair.id}
              name={fair.name}
              logo={fair.fair_logo}
              start_date={fair.start_date}
              end_date={fair.end_date}
            />
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}

// async function seedFairs() {
//   await prisma.fair.create({
//     data: {
//       name: FairsJSON.fairs[0].name,
//       booth_number: FairsJSON.fairs[0].booth_number,
//       start_date: new Date(FairsJSON.fairs[0].start_date),
//       end_date: new Date(FairsJSON.fairs[0].end_date),
//       website: FairsJSON.fairs[0].website,
//       fair_logo: "/img/zp-nord-logo.png",
//       fair_cover: "/img/zp-nord-cover.jpg",
//       address: {
//         create: {
//           street: FairsJSON.fairs[0].address.street,
//           house_number: FairsJSON.fairs[0].address.house_number,
//           city: FairsJSON.fairs[0].address.city,
//           zip: FairsJSON.fairs[0].address.zip,
//           state: FairsJSON.fairs[0].address.state,
//         },
//       },
//     },
//   });

//   await prisma.fair.create({
//     data: {
//       name: FairsJSON.fairs[1].name,
//       booth_number: FairsJSON.fairs[1].booth_number,
//       start_date: new Date(FairsJSON.fairs[1].start_date),
//       end_date: new Date(FairsJSON.fairs[1].end_date),
//       website: FairsJSON.fairs[1].website,
//       fair_logo: "/img/zp-sued-logo.png",
//       fair_cover: "/img/zp-sued-cover.jpg",
//       address: {
//         create: {
//           street: FairsJSON.fairs[1].address.street,
//           house_number: FairsJSON.fairs[1].address.house_number,
//           city: FairsJSON.fairs[1].address.city,
//           zip: FairsJSON.fairs[1].address.zip,
//           state: FairsJSON.fairs[1].address.state,
//         },
//       },
//     },
//   });

//   await prisma.fair.create({
//     data: {
//       name: FairsJSON.fairs[2].name,
//       booth_number: FairsJSON.fairs[2].booth_number,
//       start_date: new Date(FairsJSON.fairs[2].start_date),
//       end_date: new Date(FairsJSON.fairs[2].end_date),
//       website: FairsJSON.fairs[2].website,
//       fair_logo: "/img/zp-europe-logo.png",
//       fair_cover: "/img/zp-europe-cover.png",
//       address: {
//         create: {
//           street: FairsJSON.fairs[2].address.street,
//           house_number: FairsJSON.fairs[2].address.house_number,
//           city: FairsJSON.fairs[2].address.city,
//           zip: FairsJSON.fairs[2].address.zip,
//           state: FairsJSON.fairs[2].address.state,
//         },
//       },
//     },
//   });

//   await prisma.fair.create({
//     data: {
//       name: FairsJSON.fairs[3].name,
//       booth_number: FairsJSON.fairs[3].booth_number,
//       start_date: new Date(FairsJSON.fairs[3].start_date),
//       end_date: new Date(FairsJSON.fairs[3].end_date),
//       website: FairsJSON.fairs[3].website,
//       fair_logo: "/img/copetri-logo.png",
//       fair_cover: "/img/copetri-cover.jpg",
//       address: {
//         create: {
//           street: FairsJSON.fairs[3].address.street,
//           house_number: FairsJSON.fairs[3].address.house_number,
//           city: FairsJSON.fairs[3].address.city,
//           zip: FairsJSON.fairs[3].address.zip,
//           state: FairsJSON.fairs[3].address.state,
//         },
//       },
//     },
//   });
// }
