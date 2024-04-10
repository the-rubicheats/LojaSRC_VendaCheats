import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-black">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="text-purple-600 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <div className="text-white flex flex-col gap-y-8 px-4 sm:px-0 lg:mt-0">
          <hr className="my-10" />
          <ProductList title="Relacionados" items={suggestedProducts} />
          </div>  
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;
