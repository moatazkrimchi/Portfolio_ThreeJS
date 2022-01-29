import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="freeDBTagger">
    <Container>
      <Title>
        Emi Log <Badge>2019</Badge>
      </Title>
      
      <P>Application of rent management within the mohammadia school of engineering with an algorithm of assignment of the students to the rooms by taking as criteria their classification and their option in the common national competition</P>
      

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/moatazkrimchi/EMILOG">
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

      <WorkImage src="/images/works/work/emi1.jpg" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
