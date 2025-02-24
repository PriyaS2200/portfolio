import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import { IoLogoHtml5 } from "react-icons/io";
import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export const Skills = () => {
    return (
        <Box
            p={5}
        >

            <Heading
                color={"blackAlpha.600"}
                fontWeight={"bolder"}
                fontFamily={"sans-serif"}
                fontSize={"3xl"}
                textShadow={"2px 2px 5px wheat"}
                textAlign={"center"}
                p={5}
            >
                My Skills!
            </Heading>
            <Grid
                templateColumns={"repeat(2,1fr)"}
                p={4}
                gap={6}
            >
                <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"2px solid gray"}
                    p={2}
                    borderRadius={8}
                    boxShadow={"5px 5px 10px white"}
                    backgroundColor={"lightblue"}
                    color={"teal"}
                    fontWeight={"bolder"}
                >
                    <IoLogoHtml5 size={80} />
                    <Heading
                        fontWeight={"bolder"}
                    >HTML</Heading>
                    <Text
                        textAlign={"center"}
                        w={"50%"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >
                        HTML is the standard markup language for Web pages.
                    </Text>
                </Flex>
                <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"2px solid gray"}
                    borderRadius={8}
                    boxShadow={"5px 5px 10px white"}
                    backgroundColor={"lightblue"}
                    color={"teal"}
                    fontWeight={"bolder"}
                >
                    <TbBrandCss3 size={90} />
                    <Heading
                        fontWeight={"bolder"}
                    >CSS</Heading>
                    <Text
                        textAlign={"center"}
                        w={"50%"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >
                        CSS describes how HTML elements should be displayed.
                    </Text>
                </Flex>
                <Flex
                    p={2}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"2px solid gray"}
                    borderRadius={8}
                    boxShadow={"5px 5px 10px white"}
                    backgroundColor={"lightblue"}
                    color={"teal"}
                    fontWeight={"bolder"}
                >
                    <TbBrandJavascript size={80} />
                    <Heading
                        fontWeight={"bolder"}
                    >JAVASCRIPT</Heading>
                    <Text
                        textAlign={"center"}
                        w={"50%"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >
                        JavaScript is the programming language of the Web.
                    </Text>
                </Flex>
                <Flex
                    p={2}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"2px solid gray"}
                    borderRadius={8}
                    boxShadow={"5px 5px 10px white"}
                    backgroundColor={"lightblue"}
                    color={"teal"}
                    fontWeight={"bolder"}
                >
                    <FaReact size={80} />
                    <Heading
                        fontWeight={"bolder"}
                    >REACT</Heading>
                    <Text
                        textAlign={"center"}
                        w={"50%"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >
                        React is a JavaScript library for building user interfaces.
                    </Text>
                </Flex>
            </Grid>
        </Box>
    )
}