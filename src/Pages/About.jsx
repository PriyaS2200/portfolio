import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react"

export const About = () => {
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
                About Me!
            </Heading>
            <Flex
                justifyContent={"space-around"}
                alignItems={"center"}
                p={5}
                mt={10}
            >
                <Image
                    boxShadow={"2px 5px 10px wheat"}
                    borderRadius={10}
                    border={"none"}
                    src="/passportPhoto.png" />
                <Text
                    textAlign={"center"}
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
        </Box>
    )
}