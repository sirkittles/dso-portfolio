import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.nav`
   ul {
        display: flex;
        position: relative;
        width: 100%;
        flex-wrap: wrap;
        list-style: none;
        margin-bottom: 32px;

        a{    
            color: var(--bg-white);
            display: flex;
            align-items: center;
            text-decoration: none;
            margin-right: 48px;
            font-size: 18px;
            font-weight: 700;
            background-color: #133b1c;
            padding: 0px 10px;
            border-radius: 5px;

            &:hover {
            color: #133b1c;
            background-color: white;
            }

            svg {
                width: 20px;
                height: 20px;
                margin-right: 12px;
            }
        }
   }
  
   
   ${media.lessThan("large")`
       ul {
           a {
                margin-right: 18px;
                font-size: 14px;
           }
       }
       
    `}


`
