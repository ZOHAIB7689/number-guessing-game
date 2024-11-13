import React from "react";
import NumberGuessing from "@/components/number-guessing";


export default function Home() {
  return (
    <div>
      <img src="/bg.jpg" alt="no alt" className="absolute z-10 h-screen w-full" />
      <div style={{ position: 'relative', zIndex: 50 }}>
        <NumberGuessing />
      </div>
    </div>
  );
}
