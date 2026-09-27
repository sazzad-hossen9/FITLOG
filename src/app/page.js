import Image from "next/image";
import BannerPage from "./components/home/banner";
import LibraryCart from "./exercise/page";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <LibraryCart />
    </div>
  );
}
