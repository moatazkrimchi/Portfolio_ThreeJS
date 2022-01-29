import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Data_Analyst <Badge>2022-</Badge>
      </Title>
      <P>
      The analysis of the data of a company to answer to : <br/>
What is the month in which we had the best sales? <br/>
In which city did we have the most orders?<br/>
When should we do an advertising campaign to get more sales? <br/>
Which product sells the most? <br/>
Which product combinations sell the most?
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/moatazkrimchi/Data-analyst/blob/main/Analyse%20des%20vendes%20d'une%20entreprise.ipynb">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab / Jupyter NoteBook</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>OS, Pandas, Matplotlib, Seaborn</span>
        </ListItem>
   
      </List>

      <WorkImage src="/images/works/work/data1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/work/data2.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
