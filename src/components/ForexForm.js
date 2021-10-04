import React, { useState, useEffect } from "react";
import {
    Box,
    Select,
    Text
} from '@chakra-ui/react';
import axios from "axios";

const ForexForm = () => {

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [fx, setFx] = useState([])
    const [res, setRes] = useState(false)

    useEffect(() => {
        axios
            .get(`https://fmpcloud.io/api/v3/fx?apikey=${process.env.REACT_APP_FMP_KEY}`)
            .then(response => setFx(fx.concat(response.data)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        showRes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [res])

    const showRes = () => {

        if (from && to) {
            const sf = fx.filter(el => el.ticker === `${from}/${to}`)

            if (sf.length !== 0) {
                return (
                    <Box pt={5}>
                        <Text fontWeight="semibold">{sf[0].ticker}</Text>
                        <Text>Ask: {sf[0].ask}</Text>
                        <Text>High: {sf[0].high}</Text>
                        <Text>Low: {sf[0].low}</Text>
                    </Box>
                )
            } else {
                return (<Text>Not found</Text>)
            }
        } else {
            return null
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setRes(!res)
    }

    const handleChange1 = (event) => {
        setFrom(document.getElementById("from").selectedOptions[0].label)
    }

    const handleChange2 = (event) => {
        setTo(document.getElementById("to").selectedOptions[0].label)
    }

    return (
        <Box sx={{".option": {bg: "#F8D5DD"}}}>
            <Text fontSize="2xl" pb={2}>Get forex rates</Text>
            <form onSubmit={handleSubmit}>
                <Select id="from" placeholder="" focusBorderColor="accent" variant="flushed" borderColor="accent"  size="sm" onChange={handleChange1}>
                    <option style={{"background-color": "#F8D5DD"}} value="usd">USD</option>
                    <option style={{"background-color": "#F8D5DD"}} value="eur">EUR</option>
                    <option style={{"background-color": "#F8D5DD"}} value="gbp">GBP</option>
                    <option style={{"background-color": "#F8D5DD"}} value="inr">INR</option>
                    <option style={{"background-color": "#F8D5DD"}} value="chf">CHF</option>
                    <option style={{"background-color": "#F8D5DD"}} value="cad">CAD</option>
                    <option style={{"background-color": "#F8D5DD"}} value="jpy">JPY</option>
                    <option style={{"background-color": "#F8D5DD"}} value="aud">AUD</option>
                </Select>
                <Select id="to" placeholder=""  focusBorderColor="accent" variant="flushed" borderColor="accent" size="sm" onChange={handleChange2}>
                    <option style={{"background-color": "#F8D5DD"}} value="eur">EUR</option>
                    <option style={{"background-color": "#F8D5DD"}} value="usd">USD</option>
                    <option style={{"background-color": "#F8D5DD"}} value="gbp">GBP</option>
                    <option style={{"background-color": "#F8D5DD"}} value="inr">INR</option>
                    <option style={{"background-color": "#F8D5DD"}} value="chf">CHF</option>
                    <option style={{"background-color": "#F8D5DD"}} value="cad">CAD</option>
                    <option style={{"background-color": "#F8D5DD"}} value="jpy">JPY</option>
                    <option style={{"background-color": "#F8D5DD"}} value="aud">AUD</option>
                </Select>
                <Box h={100} pt={2}>
                    {showRes()}
                </Box>
            </form>
        </Box>
    )
}

export default ForexForm