import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react"
import profile from '/passportPhoto.png'

export const About = () => {
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
                About Me!
            </Heading>
            <Flex
                justifyContent={"space-around"}
                alignItems={"center"}
                p={5}
                mt={10}
                gap={20}
            >
                <Image
                    boxShadow={"2px 5px 10px wheat"}
                    borderRadius={10}
                    border={"none"}
                    src={profile} />
                <Flex
                    p={4}
                    width={800}
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
                        w={"50%"}
                        fontFamily={"cursive"}
                        fontWeight={"bolder"}
                        color={"gray.600"}
                        textShadow={"2px 5px 5px white"}
                    >   I’m a Computer Science Engineering graduate with a strong foundation
                        in programming and problem-solving. I’m currently learning frontend development,
                        where I’m focusing on tools and frameworks like HTML, CSS, JavaScript, and React.
                        During my time at university, I worked on several software development projects,
                        and in my final year, I developed a small website, which ignited my interest in frontend
                        technologies. I’m passionate about creating clean, responsive, and user-friendly web interfaces.
                        My goal is to continue improving my skills, build a strong portfolio,
                        and eventually contribute to building innovative digital products as a frontend developer.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}