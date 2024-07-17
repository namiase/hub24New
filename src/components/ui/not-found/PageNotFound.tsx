import { titleFont } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
  code: string;
  title: string;
}
export const PageNotFound = ({ code, title }: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="px-5 mx-5">
        <Image
          src="/imgs/404NotFount.png"
          alt="StarMan"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        ></Image>
      </div>
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>
          {code}
        </h2>
        <p className="font-semibold text-xl">{title}</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link href="/" className="font-normal hover:underline transition-all">
            Inicio
          </Link>
        </p>
      </div>
    </div>
  );
};
