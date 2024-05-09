import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

function HomePage() {
  return (
    <VStack spacing={8}>
      <Box>
        <Image src="hero-image.jpg" alt="Hero Image" />
        <Heading>Welcome to Your Micro-World</Heading>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Addressing Your Career Pain Points</Heading>
        <Text>Stagnated growth? Feeling like you're on the wrong path? Explore interactive ways to network and showcase your skills.</Text>
      </Box>
    </VStack>
  );
}

export default HomePage;