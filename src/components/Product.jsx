import { FavoriteBorderRounded, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height:350px;
`;

const Circle = styled.div`

`;

const Image = styled.img`
    height: 75%;
`;

const Info = styled.div`
    
`;

const Icon = styled.div`
    
`;

const Product = ({item}) => {
    return (
        <Container>
           <Circle/>
           <Image src={item.img}/>
           <Info>
               <Icon>
                   <ShoppingCartOutlined/>
               </Icon>

               <Icon>
                   <SearchOutlined/>
               </Icon>

               <Icon>
                   <FavoriteBorderRounded/>
               </Icon>
           </Info>
        </Container>
    )
}

export default Product