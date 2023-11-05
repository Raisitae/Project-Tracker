import { useEffect } from "react";
import { useProjectContext } from "../../hooks/useProjectContext.jsx";
import { useTimerContext } from "../../hooks/useTimerContext.jsx";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  AccordionIcon,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";

export function NavbarContainer() {
  const { loading, selectProject, projects, getProjects } = useProjectContext();
  const { setProject } = useTimerContext();

  useEffect(() => {
    if (!loading) {
      getProjects();
      console.log(projects);
    }
  }, [loading]);

  const handleClick = (e) => {
    selectProject(e);
  };

  return (
    <Flex
      direction="column"
      bg="#7928CA"
      h="100%"
      w="15rem"
      p="7"
      overflow="hidden">
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton bg="" _hover={{ bg: "#FFFFFF20" }}>
            <Box as="span" flex="1" textAlign="left">
              <Text color="white">Active Projects</Text>
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {projects == undefined ? (
              <Box>You have no projects yet</Box>
            ) : (
              <div>
                {projects.map((project) => {
                  return (
                    <Box
                      key={projects.indexOf(project)}
                      onClick={() => {
                        handleClick(project.title);
                      }}>
                      <Text align="initial">
                        <Link>
                          {project.title ? project.title : "Sin titulo"}
                        </Link>
                      </Text>
                    </Box>
                  );
                })}
              </div>
            )}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton bg="" _hover={{ bg: "#FFFFFF20" }}>
            <Box as="span" flex="1" textAlign="left">
              <Text color="white">Archived Projects</Text>
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton
            onClick={() => {
              setProject("");
            }}
            bg=""
            _hover={{ bg: "#FFFFFF20" }}>
            <Box as="span" flex="1" textAlign="left">
              <Text color="white">Add a project</Text>
            </Box>
          </AccordionButton>
        </AccordionItem>
      </Accordion>

      {/* <button className="btn-primary bg-blue-500" onClick={getProjects}>
        get projects
      </button> */}
    </Flex>
  );
}
