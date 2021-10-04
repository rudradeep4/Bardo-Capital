import React from "react";
import {
    Box,
    Grid,
    Text,
    HStack,
} from '@chakra-ui/react';
import NavBar from "../components/NavBar";
import ParticleBg from "../components/ParticleBg";

const p1 = "Bardo Capital is a value-oriented money manager focused on responsible stewardship and capital preservation. The firm invests across a spectrum of asset classes on an opportunistic basis to capture value with a primary geographic focus on India."
const p2 = "The firm takes its name from the Tibetan term ‘Bardo’, literally meaning ‘intermediate state’, but more generally taken to reference a state in which old realities no longer hold true. The firm considers ‘Bardo’ to be an apt metaphor for financial markets as well as an apt mindset with which to approach financial markets."
const p3 = "Our investment strategy is geared towards exploiting value gaps, if and when they appear, in an aggressive fashion. We believe all opportunities are created equal and it ill behoves us as responsible stewards of capital to be exclusionary of certain opportunities. We may, from time to time, hold a significant portion of the portfolio in cash to maintain optionality with regards to future investments."
const p4 = "As a firm we take pride in ensuring positive outcomes and maintaining long, fruitful relationships with our stakeholders."

const About = () => {
    return (
        <Box bgColor="primary">
            <ParticleBg />
            <Grid minH="100vh">
                <HStack spacing={100} zIndex={2}>
                    <NavBar />
                    <Box w={800}>
                        <Text fontSize="5xl">About</Text>
                        <br />
                        <br />
                        <Text fontSize="md">{p1}</Text>
                        <br />
                        <Text fontSize="md">{p2}</Text>
                        <br />
                        <Text fontSize="md">{p3}</Text>
                        <br />
                        <Text fontSize="md">{p4}</Text>
                    </Box>
                </HStack>
            </Grid>
        </Box>
    )
}

export default About