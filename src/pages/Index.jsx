import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaUserGraduate, FaBookOpen, FaChartLine, FaGamepad } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="xl">
            Career Quest
          </Heading>
          <Button colorScheme="teal" leftIcon={<FaUserGraduate />}>
            Start Your Journey
          </Button>
        </Flex>
        <Text fontSize="lg">Embark on your career journey with the excitement and strategy of an MMORPG. Level up your skills, explore career paths, and unlock your full potential!</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading size="md" mb={4}>
              Create Your Character
            </Heading>
            <Text>Start by creating a character that represents your professional persona. Choose your career class, customize your skills, and set your initial goals.</Text>
            <Image src="https://images.unsplash.com/photo-1610389051254-64849803c8fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNTU9SUEclMjBjaGFyYWN0ZXIlMjBjcmVhdGlvbiUyMHNjcmVlbnxlbnwwfHx8fDE3MTUyMTU1ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Character Creation" />
          </Box>
          <Box>
            <Heading size="md" mb={4}>
              Skill Development
            </Heading>
            <Text>Gain experience points by completing courses, attending workshops, and finishing projects. Level up your skills as you progress in your career.</Text>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxza2lsbCUyMGRldmVsb3BtZW50JTIwaW4lMjBnYW1lfGVufDB8fHx8MTcxNTIxNTU4NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Skill Development" />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading size="md" mb={4}>
              Career Path Visualization
            </Heading>
            <Text>Visualize your career path like a game map. See possible future roles and the skills needed to achieve them.</Text>
            <Image src="https://images.unsplash.com/photo-1445711005973-54fe2a103826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBwYXRoJTIwbWFwfGVufDB8fHx8MTcxNTIxNTU4NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Career Path Map" />
          </Box>
          <Box>
            <Heading size="md" mb={4}>
              Access Learning Resources
            </Heading>
            <Text>Unlock learning resources as you progress. Each level provides access to more advanced materials tailored to your career goals.</Text>
            <Image src="https://images.unsplash.com/photo-1620065865072-6eb90f4df05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHJlc291cmNlc3xlbnwwfHx8fDE3MTUyMTU1ODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Learning Resources" />
          </Box>
        </SimpleGrid>
        <Flex justifyContent="center">
          <Button rightIcon={<FaChartLine />} colorScheme="purple" size="lg">
            Plan Your Future
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
