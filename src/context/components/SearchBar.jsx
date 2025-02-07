import React,{useContext} from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext'
import { MainDiv,SearchDiv,SearchInput,SearchIcon,CrossIcon } from './SearchBar_styles';




const SearchBar = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const [visible,setVisible]=useState(false);
    const location= useLocation();
    const navigate= useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/collection`);
    }

    useEffect(()=>{
        // console.log(location.pathname); 
        if(location.pathname.includes('collection')|| location.pathname === '/'){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
        }
    ,[location])
  return  showSearch && visible?(
    <MainDiv>
        <SearchDiv>
            <SearchInput value={search} onChange={(e) =>setSearch(e.target.value)}    type='text' placeholder='Search' />
            <SearchIcon src={assets.search_icon} alt=" " onClick={handleSubmit} />
        </SearchDiv>
        <CrossIcon onClick ={() =>setShowSearch(false)} src={assets.cross_icon} alt=" " />
        
    </MainDiv>
  ) : null
}

export default SearchBar