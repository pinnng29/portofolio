import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white">
          <FloatingNav
            navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
          />
          <Hero />
        </h1>
      </div>
    </main>
  );
}
