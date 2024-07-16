import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/*Logo*/}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
        </Link>
      </div>

      {/* CenterMenu */}
      <div className="">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={'/category/men'}
        >
          Hombre
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={'/category/woman'}
        >
          Mujer
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={'/category/kids'}
        >
          Niños
        </Link>
      </div>
    </nav>
  );
};
