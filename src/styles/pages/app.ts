import { styled } from "..";

export const Header = styled('header', {
  width: '75rem',
  margin: '2.5rem auto',
  marginBottom: '2rem',
})

export const Main = styled('main', {
  //paddingInline: '5rem', // 80px
  height: '72vh',
  display: 'flex',
  gap: '48px',
  position: 'relative',
})

export const Product = styled('section', {
  display: 'flex',
  backgroundImage: 'linear-gradient(0deg, rgba(116,101,212,1) 0%, rgba(30,164,131,1) 100%);',
  width: '41.25rem', // 660px
  borderRadius: '10px',

  'picture': {
    margin: 'auto',

    'img': {
      width:'100%', 
      height:'100%',
    }
  }
})

export const SwipeArrow = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translate(50%)',
})