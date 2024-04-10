import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("0e12e5cf-29ab-4529-b8d5-c5371dae1f7b");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="text-white flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {/* Aumente o valor de mt-x conforme necessário para ajustar o espaço acima do título "Em destaque" */}
          <div className="mt-2">
            <ProductList title="Em destaque" items={products} />
            </div>
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
