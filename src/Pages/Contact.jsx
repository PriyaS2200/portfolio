import { Text, Box, Heading, Flex, Grid } from "@chakra-ui/react"
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
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
                Contact Me!
            </Heading>
            <Grid
                templateColumns={"repeat(1,1fr)"}
                p={4}
                gap={6}
            >
                <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"2px solid gray"}
                    p={4}
                    borderRadius={8}
                    boxShadow={"5px 5px 10px white"}
                    backgroundColor={"lightblue"}
                    color={"teal"}
                    fontWeight={"bolder"}
                >
                    <RiPhoneFill size={80} />
                    <Heading
                        fontWeight={"bolder"}
                    >Contact</Heading>
                    <Heading
                        textAlign={"center"}
                        w={"50%"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >6266175487</Heading>
                </Flex>
                <Flex
                    p={4}
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
                    <MdEmail size={80} />
                    <Heading
                        fontWeight={"bolder"}
                    >Email</Heading>
                    <Heading
                        textAlign={"center"}
                        w={"50%"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >
                        sonkarpriya667@gmail.com
                    </Heading>
                </Flex>
            </Grid>
        </Box>
    )
}