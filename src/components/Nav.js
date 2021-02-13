import React, { useState } from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../img/logo.svg";
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/gamesAction';

function Nav() {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
    }

    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="search"/>
                <button type="submit" onClick={submitSearch}>Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align:center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding:0.5rem;
        border: none;
        margin-top:1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
    }
    button{
        font-size:1.5rem;
        border:none;
        padding:0.5rem 2rem;
        cursor: pointer;
        background: #333;
        color:#fff;
    }
`;

const Logo = styled(motion.div)`
    display:flex;
    justify-content:center;
    padding:1rem;
    cursor: pointer;
    img{
        height:2rem;
        width:2rem;
    }
`;

export default Nav;
