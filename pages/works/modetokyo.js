import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Vocal Assistant <Badge>-2021</Badge>
      </Title>
      <P>A voice assistant allowing to open the song chosen by the user on youtube by voice command </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/moatazkrimchi/Assistant_Python/blob/master/Assistant_virtuel.py" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Pycharm, VisualStudioCode</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Speech_recognition, pyttsx3, pywhatkit</span>
        </ListItem>
       
      </List>

      <WorkImage src="/images/works/work/v2.png" alt="mode.tokyo" />
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/work/v3.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/work/v1.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
