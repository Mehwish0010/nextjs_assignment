
import Hero from "@/components/hero"
import Services from "@/components/services";
import Promotions from "@/components/promotion";
import Categories from "@/components/categories";

import Best_Sellers from "@/components/hot_sellers";

export default function Home() {
  return (
    <div  className="">  
    
    <Hero/>
    
    <Services/>
    <Promotions/>
    <Categories/>
    <Best_Sellers/>
    </div>
  );
}
