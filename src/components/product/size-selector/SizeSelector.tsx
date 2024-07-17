import { Size } from '@/interfaces';
import clsx from 'clsx';
import React from 'react';

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4 text-sm">Tallas disponibles</h3>
      <div className="flex">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx('mx-2 hover:underline text-sm', {
              'underline font-bold': selectedSize === size,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
