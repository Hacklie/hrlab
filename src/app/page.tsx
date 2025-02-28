import { prisma } from "@/db";
import { FairItem } from "@/components/FairItem";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hrLabLogo from "../../public/img/hrlab_logo.svg";
import FairsJSON from "../data/fairs.mock.json";

/**
 * Seeds the database with fair data from the JSON file
 * Uses image paths from the public/img folder
 */
async function seedFairs() {
  try {
    type FairName = "ZPE Nord" | "ZPE Süd" | "ZPE Europe" | "Copetri";

    const fairImagePaths: Record<FairName, { logo: string; cover: string }> = {
      "ZPE Nord": {
        logo: "/img/zp-nord-logo.png",
        cover: "/img/zp-nord-cover.jpg",
      },
      "ZPE Süd": {
        logo: "/img/zp-sued-logo.png",
        cover: "/img/zp-sued-cover.jpg",
      },
      "ZPE Europe": {
        logo: "/img/zp-europe-logo.png",
        cover: "/img/zp-europe-cover.png",
      },
      Copetri: {
        logo: "/img/copetri-logo.png",
        cover: "/img/copetri-cover.jpg",
      },
    };

    const existingFairs = await prisma.fair.findMany();
    if (existingFairs.length > 0) {
      console.log("Database already seeded. Skipping seed operation.");
      return;
    }

    for (let i = 0; i < FairsJSON.fairs.length; i++) {
      const fairData = FairsJSON.fairs[i];
      const imagePaths = fairImagePaths[fairData.name as FairName] || {
        logo: "/img/zp-nord-logo.png",
        cover: "/img/hero.jpg",
      };

      await prisma.fair.create({
        data: {
          name: fairData.name,
          booth_number: fairData.booth_number,
          start_date: new Date(fairData.start_date),
          end_date: new Date(fairData.end_date),
          website: fairData.website,
          fair_logo: imagePaths.logo,
          fair_cover: imagePaths.cover,
          address: {
            create: {
              street: fairData.address.street,
              house_number: fairData.address.house_number,
              city: fairData.address.city,
              zip: fairData.address.zip,
              state: fairData.address.state,
            },
          },
        },
      });
      console.log(`Created fair: ${fairData.name}`);
    }
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

/**
 * Retrieves all fairs from the database including their address information
 * @returns Promise resolving to an array of fair objects with addresses
 */
function getFairs() {
  return prisma.fair.findMany({
    include: {
      address: true,
    },
  });
}

/**
 * Main page component that displays a list of upcoming fairs
 * Seeds the database if empty and renders the fair items
 */
export default async function Home() {
  const existingFairs = await prisma.fair.count();
  if (existingFairs === 0) {
    await seedFairs();
  }

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
