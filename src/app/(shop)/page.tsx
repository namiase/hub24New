import { titleFont } from '@/config/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <h1 className={titleFont.className}>Hola Mundo</h1>
    </div>
  );
}
