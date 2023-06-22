import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Machine Learning <Badge>2020</Badge>
      </Title>
      <P>
      I have worked on various prediction projects including : <br/>
housing credit <br/>
iris flower <br/>
main equipment
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/moatazkrimchi/Machine_Learning" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      <ListItem>
          <Meta>Stack</Meta>
          <span>Sklearn, Pandas, Matplotlib, Seaborn</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab / Jupyter NoteBook</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/work/mll1.png"
        alt="walknote"
      />
      <WorkImage src="/images/works/work/mll2.png" alt="walknote" />
      <WorkImage src="/images/works/work/mll3.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
