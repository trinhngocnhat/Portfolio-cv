import Image from "next/image";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Body from "./Components/Body";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Header />
        <Body />
        <Footer />
      </main>
    </div>

  );
}
