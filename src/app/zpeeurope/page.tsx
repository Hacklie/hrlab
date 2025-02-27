import { prisma } from "@/db";
import { FairMain } from "@/components/FairMain";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hrLabLogo from "../../../public/img/hrlab_logo.svg";

function getEuropeFair() {
  return prisma.fair.findFirst({
    where: { name: "ZPE Europe" },
    include: {
      address: true,
    },
  });
}

export default async function ZPEEurope() {
  const fair = await getEuropeFair();

  if (fair)
    return (
      <>
        <Header
          hrLabLogo={hrLabLogo}
          hero={fair.fair_cover}
          text={fair.name}
          bgPosition="right 75%"
        />

        <FairMain
          fair={fair}
          infoText="Die ZP Europe ist anders als die anderen HR Expo-Veranstaltungen. Die ZP ist die Nummer 1 in Europa.
          Fixstern und etabliertes Zentrum im gesamten HR-Kosmos. Mit exzellenter Branchenkompetenz, einem Gespür für Trends und Potenziale.
          Und einer klaren Mission. Wie keine andere Messe schafft die ZPE vor allem eines: aktiven Zugang zum gesamten Themencluster der HR-Welt.
          Zu den Big Playern und innovativen Start-ups. Zu ihren neuen Ideen, Lösungen und Tools. Vor allem aber öffnet die ZPE Raum für offenen
          Austausch, kreative Vernetzung und interdisziplinären Transfer. Für überraschende Synergien, die komplexe Personalarbeit überschaubar machen.
          Und ganzheitlich. 360° wertschöpfend und nachhaltig, damit die Mitarbeiter ihr Potenzial voll entfalten können. Eine lebendige, kollaborative
          Plattform für integrierte People-Transformation."
        />

        <Footer />
      </>
    );
}
