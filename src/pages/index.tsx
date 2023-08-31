import Image from 'next/image';
import shirt from "../assets/shirts/shirt1.png";
import * as Style from '@/styles/pages/app';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export default function Home() {
  return (
    <Style.Main>
      <Style.SwipeArrow side={'left'}>
        <CaretLeft size={32} />
      </Style.SwipeArrow>

      <Style.Product>
        <picture>
          <Image src={shirt} alt="" />
        </picture>
      </Style.Product>

      <Style.Product>
        <picture>
          <Image src={shirt} alt="" />
        </picture>
      </Style.Product>
      
      <Style.SwipeArrow side={'rigth'}>
        <CaretRight size={32} />
      </Style.SwipeArrow>
    </Style.Main>
  )
}
