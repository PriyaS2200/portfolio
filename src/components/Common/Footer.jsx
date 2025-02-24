import { Flex, Text } from "@chakra-ui/react"
export const Footer = () => {
    return (
        <>
            <Flex justifyContent={"center"}
                alignItems={"center"}
                p={4}
                backgroundColor={"gray.400"}
                boxShadow={"lg"}
            >
                <Text color={"crimson"}
                    fontWeight={"bold"}
                    textShadow={"2px 2px 5px white"}>Made with sincerity by Priya Sonkar💖</Text>
            </Flex>
        </>
    )
}