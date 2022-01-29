import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        Acaps Supplies and inventory  <Badge>2020</Badge>
      </Title>
      <P>
      Web application of stock and supply management where a collaborator sends a request for supply, this last one is validated or refused by the responsible <br/>
The manager even has access to a stock management platform in order to manage the different articles 
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source FrontEnd</Meta>
          <Link href="https://github.com/moatazkrimchi/frontend-acaps">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source BackEnd</Meta>
          <Link href="https://github.com/moatazkrimchi/backend-acaps">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>VisualStudioCode</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React JS, Node JS, MySQL</span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/work/acaps1.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/work/acaps2.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
