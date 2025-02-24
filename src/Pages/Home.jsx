import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { About } from "./About"
import { Skills } from "./Skills"
import { Project } from "./Project"
import { Contact } from "./Contact"
import homeLogo from '/home.png'

export const Home = () => {
  return (
    <>
      <Box
      p={5}
      h={550}
      >
        <Flex 
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        mt={4}
        >
          <Heading
          color={"blackAlpha.600"}
          fontWeight={"bolder"}
          fontFamily={"sans-serif"}
          fontSize={"3xl"}
          textShadow={"2px 2px 5px wheat"}
          >Hello! 🤝</Heading>
          <Text
          color={"gray.600"}
          fontFamily={"-moz-initial"}
          fontWeight={"bold"}
          fontSize={"3xl"}
          textShadow={"2px 2px 5px wheat"}
          p={4}
          >I am Priya Sonkar 👩🏻‍💻</Text>
          <Image
          boxShadow={"2px 5px 10px wheat"}
          borderRadius={10}
          border={"none"}
          src={homeLogo} /> 
        </Flex>
      </Box>
      <About />
      <Skills />
      <Project />
      <Contact />
    </>

  )
}