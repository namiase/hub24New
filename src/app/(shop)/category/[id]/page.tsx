import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';

import { notFound } from 'next/navigation';
const sedProducts = initialData.products;
interface Props {
  params: {
    id: Category;
  };
}
// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default function ({ params }: Props) {
  const { id } = params;

  const products = sedProducts.filter((product) => product.gender === id);
  if (products.length === 0) notFound();

  const labels: Record<Category, string> = {
    men: 'para hombres',
    women: 'para mujeres',
    kid: 'para niños',
    unisex: 'para todos',
  };

  return (
    <div>
      <Title
        title={`Artículos ${labels[id]}`}
        subTitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
}
