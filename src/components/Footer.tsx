import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-100 text-center py-4 mt-8 flex justify-center gap-6">
      <p>&copy; {new Date().getFullYear()}, HRlab</p>
      <Link href="https://www.hrlab.de/impressum">Impressum</Link>
      <Link href="https://www.hrlab.de/datenschutzerklaerung">Datenschutz</Link>
    </footer>
  );
}
