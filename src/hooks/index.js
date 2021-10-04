import { useState, useEffect } from "react"
import { useRouteMatch } from "react-router"
import { Link as ReactLink } from "react-router-dom"
import axios from "axios"

export const useButtonIcon = () => {
    const [show, setShow] = useState(false)

    const showIcon = () => {
        setShow(true)
    }
    const noIcon = () => {
        setShow(false)
    }
    return {
        show,
        showIcon,
        noIcon
    }
}

export const useStyleLink = () => {
    const match = useRouteMatch()

    const setStyle = (path, optionalPath) => {
        return (
            {
                as:ReactLink,
                _hover:{background:"accent", color:"primary"},
                size:"small",
                variant:"normal",
                bg: match.path === path || match.path === optionalPath ? "accent" : null,
                textColor: match.path === path || match.path === optionalPath ? "primary" : null
            }
        )
    }

    return {
        setStyle
    }
}

export const useGetStocks = (direction) => {

    const [stocks, setStocks] = useState([])

    useEffect(() => {
        axios
            .get(direction === "g" ? process.env.REACT_APP_GAINERS_URL : process.env.REACT_APP_LOSERS_URL)
            .then(response => setStocks(stocks.concat(response.data)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return stocks
}