import { styled } from '..'

export const Header = styled('header', {
  // width: '75rem',
  // width: '80%',
  paddingInline: '6vw',
  margin: '2.5rem auto',
  marginBottom: '2rem',
})

export const Main = styled('main', {
  // paddingInline: '5rem', // 80px
  display: 'flex',
  justifyContent: 'center',
  height: '72vh',
})

export const Carrousel = styled('div', {
  overflow: 'scroll',
  display: 'flex',
  // gap: '48px',
  position: 'relative',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const Product = styled('section', {
  display: 'flex',
  backgroundImage:
    'linear-gradient(0deg, rgba(116,101,212,1) 0%, rgba(30,164,131,1) 100%);',
  minWidth: '41.25rem', // 660px
  borderRadius: '10px',
  position: 'relative',
  overflow: 'hidden',

  picture: {
    margin: 'auto',

    img: {
      width: '100%',
      height: '100%',
    },
  },

  '&:hover': {
    div: {
      transition: 'bottom 0.3s, opacity 0.5s',
      // transition: 'opacity 0.3s',
      bottom: '4px',
      opacity: '0.9',
    },
  },
})

export const SwipeArrow = styled('div', {
  position: 'absolute',
  height: '100vh',
  width: '9vw',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'none',
  transition: '5s',
  top: '0',
  zIndex: '10',

  variants: {
    side: {
      left: {
        left: '0px',
        paddingLeft: '1.1vw',
        '&:hover': {
          backgroundImage:
            'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);',
        },
      },
      right: {
        right: '0px',
        paddingRight: '1.1vw',
        justifyContent: 'right',

        '&:hover': {
          backgroundImage:
            'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);',
        },
      },
    },
  },
})

export const ProductDescription = styled('div', {
  position: 'absolute',
  width: 'calc(100% - 8px)',
  display: 'flex',
  opacity: '0',
  bottom: 'calc(-1 * 40px + 1ch + 4px)',
  left: `4px`,
  backgroundColor: '$gray800',
  justifyContent: 'space-between',
  borderRadius: `calc(10px - 4px)`,
  padding: 'calc(2rem + 1ch)',

  span: {
    color: '$green300',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

  h3: {
    fontWeight: 'bold',
  },
})
