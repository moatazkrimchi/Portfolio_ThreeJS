import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Web Scrapping <Badge>-2022</Badge>
      </Title>
      <P>
      The art of extracting data from a website has a name: it is web scraping, also called harvesting. This technique allows you to retrieve information from a site, thanks to a program or a software and to reuse it later.
I have worked on different web sites such as : <br/>
NBA data <br/>
BBC News <br/>
youtube channel 
      </P>
      <P>
        
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/moatazkrimchi/Web_scrapping">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab / Jupyter NoteBook</span>
        </ListItem>
       
        <ListItem>
          <Meta>Stack</Meta>
          <span>Beautifulsoup, Selenium, Newspapers</span>
        </ListItem>
      </List>

     

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/work/scp1.png" alt="walknote" />
        <WorkImage src="/images/works/work/scp2.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/works/work/scp3.png" alt="walknote" />
      <WorkImage src="/images/works/work/scp4.png" alt="walknote" />
      <WorkImage src="/images/works/work/scp5.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
