import {
  ProductDetails,
  ProductImageContainer,
  ProductWrappper,
} from '@/styles/pages/product'
import ImageShirt1 from '../../assets/shirts/shirt1.png'
import Image from 'next/image'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'

interface ProductProps {
  product: IProduct & { description: string }
}

export default function Product({ product }: ProductProps) {
  return (
    <ProductWrappper>
      <ProductImageContainer>
        <Image src={ImageShirt1} alt={''} />
      </ProductImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Clique</button>
      </ProductDetails>
    </ProductWrappper>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const { id } = params!
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  if (!price.unit_amount) return { props: {} }

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageURL: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
