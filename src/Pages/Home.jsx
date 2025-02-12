import { Text } from "@chakra-ui/react"
import { About } from "./About"
import { Skills } from "./Skills"
import { Project } from "./Project"
import { Contact } from "./Contact"

export const Home = () => {
    return (
        <>
          <Text>This is home</Text>
          <About />
          <Skills />
          <Project />
          <Contact />
        </>
      
    )
}