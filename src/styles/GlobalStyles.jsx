import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --color-primary: #ff0000;/*;/*#DF9A09;/*#08b2c9*/
        --color-secondary: linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(254,255,0,1) 100%);;/*#003079;/*#223F7D;/*#28527a*/
        --color-light: #93DDDD;
        --color-dark: #151515;
    }
    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background: var(--color-dark);
        color: var(--color-light);
        margin-bottom: 2rem;
    }
`