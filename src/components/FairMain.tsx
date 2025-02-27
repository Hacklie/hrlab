import Image from "next/image";

type FairProps = {
  id: number;
  name: string;
  booth_number: string;
  start_date: Date;
  end_date: Date;
  website: string;
  fair_logo: string;
  fair_cover: string;
  address: {
    street: string;
    house_number: string;
    zip: string;
    city: string;
    state: string;
  } | null;
};

export function FairMain({
  fair,
  infoText,
}: {
  fair: FairProps;
  infoText: string;
}) {
  const countdownTimer = (function () {
    const now = new Date();
    const diff = fair.start_date.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return [days, hours];
  })();

  return (
    <main className="container mx-auto px-40 max-sm:px-4 max-xl:px-8 text-center flex-1">
      <h2 className="text-3xl max-sm:text-2xl font-bold mb-6 text-blue uppercase">
        Infos
      </h2>
      <div className="flex justify-center items-center gap-14 text-left max-xl:flex-col max-xl:text-center max-xl:gap-0 mb-10">
        <div className="left shrink-0">
          <a
            href={fair.website}
            target="_blank"
            className="flex justify-center"
          >
            <Image
              className="rounded-md hover:scale-110 transition-all duration-500 max-xl:mb-6"
              src={fair.fair_logo}
              width={300}
              height={300}
              alt={fair.name}
            />
          </a>
        </div>
        <div className="flex gap-14 items-center max-xl:flex-col max-xl:gap-0">
          <div>
            <div className="flex flex-col mb-6 justify-center">
              <p className="mb-1 font-bold">Stand: {fair.booth_number}</p>
              <p className="mb-1 font-bold">
                {fair.start_date.getDate()}. – {fair.end_date.getDate()}.{" "}
                {fair.start_date.toLocaleString("de-DE", { month: "long" })}{" "}
                {fair.start_date.getFullYear()}
              </p>
              {fair.address && (
                <address>
                  Adresse: <br />
                  {fair.address.street} {fair.address.house_number} <br />
                  {fair.address.zip} {fair.address.city} <br />
                  {fair.address.state === fair.address.city
                    ? ""
                    : fair.address.state}
                </address>
              )}
            </div>
            <div className="max-xl:mb-6">
              <h3 className="text-2xl font-bold mb-2 text-blue uppercase">
                Beginnt in:
              </h3>
              <div className="flex gap-6">
                <div className="bg-blue text-white py-3 rounded-md font-bold uppercase text-center w-20">
                  <p className="text-4xl">{countdownTimer[0]}</p>
                  <p className="text-xs">
                    {countdownTimer[0] === 1 ? "Tag" : "Tagen"}
                  </p>
                </div>
                <div className="bg-blue text-white py-3 rounded-md font-bold uppercase text-center w-20">
                  <p className="text-4xl">{countdownTimer[1]}</p>
                  <p className="text-xs">
                    {countdownTimer[1] === 1 ? "Stunde" : "Stunden"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-left">{infoText}</p>
        </div>
      </div>
      <a
        href={fair.website}
        target="_blank"
        className="bg-orange text-white py-3 px-5 mb-6 inline-block rounded-md font-bold uppercase hover:bg-orangehov"
      >
        » Website «
      </a>
    </main>
  );
}
