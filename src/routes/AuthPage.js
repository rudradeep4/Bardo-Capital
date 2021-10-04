import React from "react";
import {
    Box,
    Grid,
    HStack,
    Link,
    Text,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom'
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RegisterForm from "../components/RegisterForm";
import ParticleBg from "../components/ParticleBg";

const AuthPage = ({p}) => {
    const showForm = () => {
        if (p === "/auth") {
            return (
                <Box w={500}>
                    <Text fontSize="5xl">Login</Text>
                    <br />
                    <LoginForm />
                    <Link as={ReactLink} to="/register" _hover={{bg:"accent", color:"primary"}} variant="inline">
                        Register for a new account <ArrowForwardIcon/>
                    </Link>      
                </Box>
            )
        }
        else {
            return(
                <Box w={500}>
                    <Text fontSize="5xl">Register</Text>
                    <br />
                    <RegisterForm /> 
                </Box>
            )
        }
    }

    return (
        <Box bgColor="primary">
            <ParticleBg />
            <Grid minH="100vh">
                <HStack spacing={100} zIndex={2}>
                    <NavBar />
                    {showForm()}
                    {/* <InfoBar /> */}
                </HStack>
            </Grid>
        </Box>
    )
}

export default AuthPage