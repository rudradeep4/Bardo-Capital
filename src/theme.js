import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Courier Prime", 
        body: "Courier Prime"
    },
    colors: {
        primary: "#FAC8C3",
        accent: "#4A4A4A"
    },
    components: {
        Link: {
            sizes: {
                small: {
                    fontSize:"18px",
                },
                large: {
                    fontSize: "22px"
                }
            },
            variants: {
                "inline": {
                    pl:"0",
                    pr:"0"
                },
                "normal": {
                    textColor:"accent",
                    pl:"3",
                    pr:"3",
                }
            }
        },
        Button: {
            baseStyle: {
                bgColor:"accent",
                textColor:"primary",
                fontSize:"md",
                borderColor:"accent"
            },
            variants: {
                "normal": {
                    _hover:{bg:"accent", textColor:"primary"},
                    _active:{bg:"primary", textColor:"accent"}
                }
            }
        }
    }
})

export default theme