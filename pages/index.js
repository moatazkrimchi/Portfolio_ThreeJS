import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbgit from '../public/images/links/gith.png'
import thumbold from '../public/images/works/work/old.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Data Analyst / Developer based in Morocco !
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Krimchi Moataz
          </Heading>
          <p>Digital Data ( Analyst / Scientist / Engineer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="120px"
            display="inline-block"
            borderRadius="full"
            src="/images/moatazkr.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Student engineer in third year of computer engineering option information system at the Mohammadia School of Engineering. 
        Very passionate about data science and data analyst, I have already done a lot of data project and even web development
         project with ReactJS Professional experience : application internship{' '}
          <NextLink href="https://www.acaps.ma/">
            <Link href="https://www.acaps.ma/">Acaps</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Works
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2017</BioYear>
          Obtaining my bachelors degree.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Passed the national common exam after two years of preparatory class 
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Third year at Mohammadia School of Engineering, information engineering option information system 
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Internship BI a insurBT 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Football, Music,{' '}
          <Link href="https://app.powerbi.com/groups/b1acb94d-ab03-4c36-bf44-80705b00fbbf/reports/ce00de22-2278-4a01-ab0c-30f956c2dd51/ReportSection?redirectedFromSignup=1" target="_blank">
            BI
          </Link>
          , Video Games,{' '}
          <Link href="https://drive.google.com/drive/folders/1_Xtr16T_PA3HWFByb4kZZIvXyrbjyKz6?fbclid=IwAR1Dn3MYrQc9LEUxdD4YrO7zdUgKBrQ1k3ZQtG4liVbGQb4p79anCncdmc4" target="_blank">
            Machine Learning 
          </Link>
          , NLP, Deep Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/moatazkrimchi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @KRIMCHI_Moataz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/KrimchiMoataz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Moataz Krimchi
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://www.instagram.com/moataz_gk/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @Moataz_gk
              </Button>
            </Link>
          </ListItem>
          
        </List>
        <br/>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://github.com/moatazkrimchi"
            title="Data as Life"
            thumbnail={thumbgit}
          >
            My github account
          </GridItem>
  
          <GridItem
            href="https://mkrimchi.me/"
            title=" Web Site "
            thumbnail={thumbold}
          >
             Old portfolio
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              More
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
