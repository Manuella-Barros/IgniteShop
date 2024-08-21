import Image from 'next/image'
import * as Style from '@/styles/pages/app'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'

export interface IndexProps {
  products: IProduct[]
}

export default function Index({ products }: IndexProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <Style.Main>
      <Style.SwipeArrow side={'left'}>
        <CaretLeft size={32} />
      </Style.SwipeArrow>

      <Style.Carrousel ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link href={`/products/${product.id}`}>
              <Style.Product key={product.id} className="keen-slider__slide">
                <picture>
                  <Image
                    src={product.imageURL}
                    alt=""
                    width={500}
                    height={500}
                  />
                </picture>
                <Style.ProductDescription>
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </Style.ProductDescription>
              </Style.Product>
            </Link>
          )
        })}
      </Style.Carrousel>

      <Style.SwipeArrow side={'right'}>
        <CaretRight size={32} />
      </Style.SwipeArrow>
    </Style.Main>
  )
}

export const getStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((res) => {
    const price = res.default_price as Stripe.Price

    if (!price.unit_amount) return []

    return {
      id: res.id,
      name: res.name,
      imageURL: res.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
  }
}
