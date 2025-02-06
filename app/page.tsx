import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2">
      <Link href="/book"><span className="dark:text-light-text text-button-text">Read</span></Link>
    </main>
  );
}
