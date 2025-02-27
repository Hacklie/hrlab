import { prisma } from "@/db";
import { FairMain } from "@/components/FairMain";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hrLabLogo from "../../../public/img/hrlab_logo.svg";

export function getNorthFair() {
  return prisma.fair.findFirst({
    where: { name: "ZPE Nord" },
    include: {
      address: true,
    },
  });
}

export default async function ZPENorth() {
  const fair = await getNorthFair();

  if (fair)
    return (
      <>
        <Header
          hrLabLogo={hrLabLogo}
          hero={fair.fair_cover}
          text={fair.name}
          bgPosition="center"
        />

        <FairMain
          fair={fair}
          infoText="Die Zukunft Personal Nord ist das Networking-Event für die People-Community im Norden Deutschlands.
          Im Mittelpunkt der Hamburger Veranstaltung stehen die Entwicklungen der gesamten Arbeitswelt von morgen – Entscheider:innen,
          Führungskräfte und HR-Verantwortliche treffen sich auf der Fachmesse zum Austausch und Networking. Inspirierende Programminhalte,
          Best Cases, innovative Produkte und Life- Trainings bieten den Besuchenden hochwertigen Wissenstransfer und konkrete Lösungen.
          Was zeichnet die Zukunft Personal in Hamburg aus? Die vibrierende Atmosphäre der Hansestadt, ihre Modernität und Weltoffenheit.
          Und damit ist es der perfekte Ort für die Veranstaltung."
        />

        <Footer />
      </>
    );
}
