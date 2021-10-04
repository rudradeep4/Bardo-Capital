import React, { useEffect, useState} from "react";
import {
    FormControl,
    Input,
    Button,
    Box,
    Text,
    Icon
} from '@chakra-ui/react';
import { Search2Icon } from "@chakra-ui/icons";
import { useButtonIcon } from "../hooks";
import axios from "axios";
import { BiMoney } from "react-icons/bi"
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti"
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi"
import { RiExchangeBoxLine } from "react-icons/ri"

const StockSearch = () => {

    const searchIcon = useButtonIcon()
    const [name, setName] = useState("")
    const [q, setQ] = useState([])
    const [res, setRes] = useState(false)

    useEffect(() => {
        if (name) {
            axios
                .get(`https://fmpcloud.io/api/v3/quote/${name.toUpperCase()}?apikey=${process.env.REACT_APP_FMP_KEY}`)
                .then(response => setQ(response.data))
        } else {
            return null
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [res])

    const showRes = () => {
        
        if (q.length === 0) {
            return null
        } else {
            return (
                <Box pt={5}>
                    <Text fontWeight="semibold">
                        {q[0].name} {q[0].change > 0 ? <Icon as={FiTrendingUp} color="green" /> : <Icon as={FiTrendingDown} color="red" />}
                    </Text>
                    <Text>
                        <Icon as={BiMoney}/> {q[0].price}
                    </Text>
                    <Text>
                        {q[0].change > 0 ? <Icon as={TiArrowSortedUp} color="green" /> : <Icon as={TiArrowSortedDown} color="red" />} {q[0].change}
                    </Text>
                    <Text>
                        <Icon as={RiExchangeBoxLine} /> {q[0].exchange}
                    </Text>
                </Box>
            )
        }
    }


    
    const handleSubmit = (event) => {
        event.preventDefault()
        setRes(!res)
    }

    return (
        <Box>
            <Text fontSize="2xl" pb={2}>Get stock quote</Text>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <Input 
                        id="ticker"
                        w={300}
                        placeholder="Search stock by ticker"
                        borderColor="accent"
                        size="sm"
                        focusBorderColor="accent"
                        _hover="accent"
                        variant="flushed"
                        onChange={event => setName(event.currentTarget.value)}
                    />
                </FormControl>
                <Button
                    mt={4}
                    type="submit"
                    variant="normal"
                    size="sm"
                    onMouseOver={searchIcon.showIcon}
                    onMouseOut={searchIcon.noIcon}
                    leftIcon={searchIcon.show ? <Search2Icon /> : null}
                >
                    Search
                </Button>
                <Box h={140} pt={2}>
                    {showRes()}
                </Box>
            </form>
        </Box>
    )
}

export default StockSearch