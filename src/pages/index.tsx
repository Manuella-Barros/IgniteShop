import Image from 'next/image';
import shirt from "../assets/shirts/shirt1.png";
import * as Style from '@/styles/pages/app';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    
  })

  return (
    <Style.Main>
      <Style.SwipeArrow side={'left'}>
        <CaretLeft size={32}/>
      </Style.SwipeArrow>

      <Style.Carrousel ref={sliderRef} className='keen-slider'>
        <Style.Product className='keen-slider__slide'>
          <picture>
            <Image src={shirt} alt="" />
          </picture>
          <Style.ProductDescription>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
          </Style.ProductDescription>
        </Style.Product>
        
        <Style.Product className='keen-slider__slide'>
          <picture>
            <Image src={shirt} alt="" />
          </picture>
          <Style.ProductDescription>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
          </Style.ProductDescription>
        </Style.Product>

        <Style.Product className='keen-slider__slide'>
          <picture>
            <Image src={shirt} alt="" />
          </picture>
          <Style.ProductDescription>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
          </Style.ProductDescription>
        </Style.Product>

        <Style.Product className='keen-slider__slide'>
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
