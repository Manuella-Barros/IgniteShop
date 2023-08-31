import Image from 'next/image';
import shirt from "../assets/shirts/shirt1.png";
import * as Style from '@/styles/pages/app';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export default function Home() {
  return (
    <Style.Main>
      <Style.SwipeArrow side={'left'}>
        <CaretLeft size={32}/>
      </Style.SwipeArrow>

      <Style.Carrousel>
        <Style.Product>
          <picture>
            <Image src={shirt} alt="" />
          </picture>
          <Style.ProductDescription>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
          </Style.ProductDescription>
        </Style.Product>
        
        <Style.Product>
          <picture>
            <Image src={shirt} alt="" />
          </picture>
          <Style.ProductDescription>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
          </Style.ProductDescription>
        </Style.Product>

        <Style.Product>
          <picture>
            <Image src={shirt} alt="" />
          </picture>
          <Style.ProductDescription>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
          </Style.ProductDescription>
        </Style.Product>

        <Style.Product>
          <picture>
            <Image src={shirt} alt="" />
          </picture>
          <Style.ProductDescription>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
          </Style.ProductDescription>
        </Style.Product>
      </Style.Carrousel>

      <Style.SwipeArrow side={'right'}>
        <CaretRight size={32}/>
      </Style.SwipeArrow>
    </Style.Main>
  )
}
