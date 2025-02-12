import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
        <Flex justifyContent={"space-between"}
         p={4}
         backgroundColor={"gray.400"}
         boxShadow={"lg"}
         >
        <Text color={"crimson"} fontWeight={"bold"} textShadow={"lg"}>Priya Sonkar</Text>
        <Flex gap={4} color={"blue.200"} fontWeight={"bold"} fontFamily={"cursive"}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Flex>
        </Flex>
        </>
    )
}