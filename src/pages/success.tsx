import React from 'react'
import { ImageContainer, SuccessContainer } from '@/styles/pages/success'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageURL: string
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada!</h1>

        <ImageContainer>
          <Image src={product.imageURL} alt={''} width={100} height={100} />
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href={'/'}>Voltar ao catáogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  if (
    !session.customer_details ||
    !session ||
    !session.line_items ||
    !session.line_items.data[0].price
  )
    return {
      props: {},
    }

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageURL: product.images[0],
      },
    },
  }
}
