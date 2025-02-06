import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2">
      <Link href="/book">
        <h1 className="dark:text-light-text text-button-text text-3xl">
          Read me
        </h1>
      </Link>
    </main>
  );
}
