import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,500,600,700&display=swap');

   :root{

   *{
       font-family: 'Source Sans Pro';
       -webkit-font-smoothing: antialiased !important;
       
       ::-webkit-scrollbar {
            width: 0.75vw;
        }

        ::-webkit-scrollbar-track-piece {
            background-color: var(--background);
        }

        ::-webkit-scrollbar-thumb:vertical {
            background-color: lightgrey;
        }
   }

   html, body, #root
   {
       display: flex;
       height: 100%;
       overflow: unset;
       background-color: #fff;
       margin: 0 !important;
   }

   form
   {
     height: 100%;
   }

   body
   {
        background: #fff;
        
        overflow: unset;
   }
}
`;