'use server';

import prisma from '@/lib/prisma';
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.tuservicio.com', // Reemplaza con la URL de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPaginatedProductsWithImages = async () => {
  try {
    try {
      const response = await api.get('/productos');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }

    const products = await prisma.product.findMany({
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    console.log(products);
  } catch (error) {}
};
