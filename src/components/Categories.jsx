import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import gslobal from '../global.css'
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding:"0px", flexDirection:"Column"})}
`;


const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/> 
            ))}
        </Container>
    )
}

export default Categories
