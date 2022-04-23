import { Box, Text, Button, Container, Img, Flex, background } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Jokes = () => {
    const api = "https://candaan-api.vercel.app";
    const [candaan, setCandaan] = useState([]);

    // get API using axios
    const getCandaan = async () => {
        try {
            let response = await axios.get(`${api}/api/text/random`);
            setCandaan(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCandaan();
    }, [])

    const jokesText = {
        jokes: {
            color: "#F59F9F"
        }
    }

    // copy function
    const copy = () => {
        const newTextArea = document.createElement("textarea");
        newTextArea.innerText = candaan.data;

        document.body.appendChild(newTextArea);
        newTextArea.select();
        document.execCommand("copy");
        newTextArea.remove();
    }

    return (
        <Flex
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            px={"6"}
        >
            <Box mt={"12"}>
                <Text
                    fontSize={{base: "4xl", md: "5xl" }}
                    textColor={"#9F72EA"}
                    fontWeight={"bold"}
                >
                    <span style={jokesText.jokes}>
                        Jokes
                    </span>
                    .Generator
                </Text>
            </Box>

            <Flex mt={"6"}>
                <Button
                    fontSize={"2xl"}
                    textColor={"white"}
                    backgroundColor={"#9F72EA"}
                    _hover={""}
                    onClick={getCandaan}>
                    Generate
                </Button>
                <Button
                    fontSize={"2xl"}
                    ml={"5"}
                    onClick={copy}
                >
                    Copy
                </Button>
            </Flex>

            <Text
                marginTop={"14"} 
                fontSize={"2xl"}
                fontWeight={"medium"}
                textColor={"white"}
            >
                {candaan.data}
            </Text>
        </Flex>
    )
}

export default Jokes; 