import { prisma } from "@/db";
import { FairMain } from "@/components/FairMain";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hrLabLogo from "../../../public/img/hrlab_logo.svg";

export function getCopetriFair() {
  return prisma.fair.findFirst({
    where: { name: "Copetri" },
    include: {
      address: true,
    },
  });
}

export default async function Copetri() {
  const fair = await getCopetriFair();

  if (fair)
    return (
      <>
        <Header
          hrLabLogo={hrLabLogo}
          hero={fair.fair_cover}
          text={fair.name}
          bgPosition="right 61%"
        />

        <FairMain
          fair={fair}
          infoText="COPETRI bietet als erste deutsch­sprachige Plattform ein einzigartiges Angebot an Austausch, Wissen und Lernen
          rund um die Schlüsselthemen People, Innovation, Transformation und ihre Wirk­zusammenhänge. Du bekommst bei COPETRI ganzjährig vielfältige
          Angebote wie Events, Content, Workshops u.v.m. – vor Ort und digital. Dabei verbinden sie mit ihrem „Bridging Perspectives“-Ansatz immer
          inhaltliche Tiefe, Praxisnähe und den Blick fürs große Ganze. Außerdem indest du umsetzbare und ganz­heitliche Lösungen sowie Inspiration.
          So bist du handlungsfähig und kannst die Zukunft erfolgreich gestalten."
        />

        <Footer />
      </>
    );
}
