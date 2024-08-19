import Header3 from "@/components/headers/Header3";
import Header1 from "@/components/headers/Header1";
import Header2 from "@/components/headers/Header2";
import Header from "@/components/headers/Header";

export default function Home() {
  return (
    <div className="w-max-[1440px]">
      <Header />
      <Header1 />
      <Header2 />
      {/* <Header3 /> */}
    </div>
  );
}
