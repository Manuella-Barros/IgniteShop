import { GlobalStyle } from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import logoSVG from '../assets/logo.svg';
import * as Style from '@/styles/pages/app';
import Image from 'next/image';

GlobalStyle();

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      <Style.Header>
        <picture>
          <Image width={129.74} height={52} src={logoSVG.src} alt="" />
        </picture>
      <picture>
        <img src="../assets/logo.svg" alt="" />
      </picture>
      </Style.Header>

      <Component {...pageProps} />
    </div>
  )
}
