import { createGlobalStyle } from 'styled-components'
import InterReg from '../assets/fonts/Inter/Inter-Regular.ttf'
import MontBold from '../assets/fonts/Montserrat/Montserrat-Bold.ttf'
import MontBoldItalic from '../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf'
import MontLight from '../assets/fonts/Montserrat/Montserrat-Light.ttf'
import MontReg from '../assets/fonts/Montserrat/Montserrat-Regular.ttf'
import RalBold from '../assets/fonts/Raleway/Raleway-Bold.ttf'
import RalReg from '../assets/fonts/Raleway/Raleway-Regular.ttf'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'InterReg';
        src: url(${InterReg});
    }
    @font-face {
        font-family: 'MontBold';
        src: url(${MontBold});
    }
    @font-face {
        font-family: 'MontBoldItalic';
        src: url(${MontBoldItalic});
    }
    @font-face {
        font-family: 'MontLight';
        src: url(${MontLight});
    }
    @font-face {
        font-family: 'MontReg';
        src: url(${MontReg});
    }
    @font-face {
        font-family: 'RalBold';
        src: url(${RalBold});
    }
    @font-face {
        font-family: 'RalReg';
        src: url(${RalReg});
    }
`
export default FontStyles