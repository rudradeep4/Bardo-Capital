import { Box } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import React from "react"
import ForexForm from "./ForexForm"
import StockSearch from "./StockSearch"


const InfoBar = () => {
    return (
        <Flex>
            <Box>
                <StockSearch />
                {/* <br />
                <br />
                <ForexForm /> */}
            </Box>
        </Flex>
    )
}

export default InfoBar