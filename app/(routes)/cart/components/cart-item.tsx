import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";


interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return ( 
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-white">
              {data.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="border-l border-gray-200 pl-4 text-purple-600">Key {data.size.name}</p>
            </div>
          <div className="text-purple-600"> {/* Adicionado um div para envolver o Currency */}
            <Currency value={data.price} />
          </div>
          </div>
      </div>
    </li>
  );
}
 
export default CartItem;
