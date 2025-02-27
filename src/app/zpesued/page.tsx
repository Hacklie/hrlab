import { prisma } from "@/db";
import { FairMain } from "@/components/FairMain";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hrLabLogo from "../../../public/img/hrlab_logo.svg";

export function getSouthFair() {
  return prisma.fair.findFirst({
    where: { name: "ZPE Süd" },
    include: {
      address: true,
    },
  });
}

export default async function ZPESouth() {
  const fair = await getSouthFair();

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
          infoText="Die Zukunft Personal Süd ist der Branchentreff für People- Management in Süddeutschland – hier
        tauscht man sich konstruktiv aus, lernt voneinander, um die wegweisenden Impulse und Produkte in den eigenen Arbeitsalltag zu integrieren.
        Die Szene trifft sich an der Hauptschlagader des deutschen Mittelstands und der Automobilbranche, wo aktuell Innovationsfähigkeit bei
        gleichzeitiger Krisenfestigkeit zu den Kernqualitäten der ansässigen Unternehmen zählen. Genau darum richtet sich die Zukunft Personal
        in ihrem Jubiläumsjahr neu aus. Als Plattform für People und Organisational Performance. Denn es geht um Leistung. Nicht nur von HR- Abteilungen,
        sondern ganzen Organisationen. Time for new beginnings."
        />

        <Footer />
      </>
    );
}
