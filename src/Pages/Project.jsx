import { Text, Box, Heading, Flex, Image, Grid, Link } from "@chakra-ui/react"
import project from '/projectPic.png'
import { FaGithub } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export const Project = () => {
    return (
        <Box
            p={2}
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
                Project!
            </Heading>
            <Grid
                templateColumns={"repeat(2,1fr)"}
                p={4}
                gap={10}
            >

                <Image
                    boxShadow={"2px 5px 10px wheat"}
                    borderRadius={10}
                    border={"none"}
                    src={project} />
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
                    <Text
                        textAlign={"center"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >   This project is an E-commerce website built using HTML, CSS, and JavaScript.
                        The site provides a platform for users to browse products and add items to a shopping cart.
                    </Text>
                </Flex>
            </Grid>
                <Flex
                justifyContent={"space-evenly"}
                alignItems={"center"}
                p={4}
                >
                <Link href='https://github.com/PriyaS2200/weCare' target='_blank'
                textAlign={"center"}
                fontFamily={"cursive"}
                fontWeight={"bolder"}
                color={"gray.600"}
                textShadow={"2px 5px 5px white"}
                textDecoration={"underline"}
                ><FaGithub size={50} />Github</Link>
                <Link href='https://priyas2200.github.io/weCare' target='_blank'
                textAlign={"center"}
                fontFamily={"cursive"}
                fontWeight={"bolder"}
                color={"gray.600"}
                textShadow={"2px 5px 5px white"}
                textDecoration={"underline"}
                ><GrFormNextLink size={50}/>Demo Link</Link>
                </Flex>
        </Box>
    )
}