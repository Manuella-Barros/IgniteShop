import {
  ProductDetails,
  ProductImageContainer,
  ProductWrappper,
} from '@/styles/pages/product'
import ImageShirt1 from '../../assets/shirts/shirt1.png'
import Image from 'next/image'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'

interface ProductProps {
  product: IProduct & { description: string; defaultPriceId: string }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) return <p>carregando.. aaaa</p>

  async function handleBuy() {
    const response = await axios.post(`/api/checkout`, {
      priceId: product.defaultPriceId,
    })

    const { checkoutSession } = response.data

    window.location.href = checkoutSession
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductWrappper>
        <ProductImageContainer>
          <Image src={ImageShirt1} alt={''} />
        </ProductImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={handleBuy}>Clique</button>
        </ProductDetails>
      </ProductWrappper>
    </>
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
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [{ params: { id: 'prod_QhQ6QH2YK3PbMz' } }],
    fallback: true,
  }
}
