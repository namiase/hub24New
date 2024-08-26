import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export default async function Home() {
  const productTemp = await getPaginatedProductsWithImages();

  return (
    <>
      <Title title="Tienda" subTitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
