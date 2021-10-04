import {
    VStack,
    Link,
    Box,
    Grid,
    Center,
    HStack,
    Image,
} from '@chakra-ui/react'
import {
    Link as ReactLink
} from 'react-router-dom'
import ParticleBg from '../components/ParticleBg'
import '../App.css'


const LandingPage = () => {
    return (
        <Box bgColor="primary" zIndex={1}>
            <ParticleBg />
            <Grid minH="100vh" p={3}>
                <Center zIndex={3}>
                    <HStack spacing={100}>
                        <Image src="BardoLogo.png" alt="Logo" boxSize="300px"/>
                        <Box w={1} h={300} bg="accent"></Box>
                        <VStack spacing={10} pr={10}>
                            <Link as={ReactLink} to="/about" _hover={{background:"accent", color:"primary"}} size="large" variant="normal">About</Link>
                            <Link as={ReactLink} to="/auth" _hover={{background:"accent", color:"primary"}} size="large" variant="normal">Register/Login</Link>
                        </VStack>
                    </HStack>
                </Center>
            </Grid>
        </Box>
    )
}

export default LandingPage