import { SizeSelector } from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';
import { Size } from '../../../../interfaces/product.interface';

interface Props {
  params: {
    slug: string;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) notFound();

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">asda </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-md`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        {/* Selector de cantidad */}

        {/* Botton */}
        <button className="btn-primary my-5 text-sm">Agregar al carrito</button>

        {/* Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light text-justify">{product.description}</p>
      </div>
    </div>
  );
}
