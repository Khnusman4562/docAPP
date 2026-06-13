import Fourth from "../../components/Fourth";
import Hero from "../../components/Hero";
import Second from "../../components/second";
import Third from "../../components/Third";

export default function Home() {
  return (
    <div className="flex flex-col gap-20" >
      <Hero />
      <Second />
       <Third />
     <Fourth/>
    </div>
  );
}
