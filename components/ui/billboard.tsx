import { Billboard } from "@/types";
import React from "react";

interface BillboardProps {
  data: Billboard | null;
}

const BillboardComponent: React.FC<BillboardProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
      </div>
    </div>
  );
};

export default BillboardComponent;
