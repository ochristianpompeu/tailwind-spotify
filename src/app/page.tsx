import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Playlists from "@/components/Playlists";
import Albuns from "@/components/Albuns";
import ScreenNavigation from "@/components/ScreenNavigation";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-6">
          <ScreenNavigation />
          <Albuns />
          <Playlists />
        </main>
      </div>
      <Footer />
    </div>
  );
}
