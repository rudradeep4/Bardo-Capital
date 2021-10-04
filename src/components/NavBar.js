import React from "react";
import {
    Box,
    VStack,
    HStack,
    Link,
    Image,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom'
import { useStyleLink } from "../hooks";

const NavBar = () => {

    const sl = useStyleLink()

    return (
        // <Box>
            <HStack spacing={50} >
                <Box w={100} bg="primary"></Box>
                <VStack spacing={10}>
                    <Link as={ReactLink} to="/"><Image src="BardoLogo.png" alt="Logo" boxSize="250px" /></Link>
                    <VStack>
                        <Link to="/about" {...sl.setStyle("/about")}>
                            About
                        </Link>
                        <br />
                        <Link to="/auth" {...sl.setStyle("/auth", "/register")}>
                            Register/Login
                        </Link>
                    </VStack>
                    <Box h={200}></Box>
                </VStack>
                <Box w={1} h={600} bg="accent" ></Box>
            </HStack>
        // </Box>
    )
}

export default NavBar