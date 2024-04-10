interface CartItemInfoProps {
  product: Record<string, any>;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({
  product
}) => {
  return ( 
    <div>
      <div className="flex justify-between">
        <p className=" text-sm font-semibold text-black">
          {product.name}
        </p>
      </div>

      <div className="mt-1 flex text-sm">
        <p className="text-purple-600">{product.color}</p>
        <p className="ml-4 border-l border-gray-200 pl-4 text-purple-600">{product.size}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-purple-600">{product.price}</p>
    </div>
  );
}
 
export default CartItemInfo;
