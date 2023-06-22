import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
      Prediction housing credit  <Badge>-2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/amembo_icon.png" alt="icon" />
      </Center>
      <P>
      The objective of this project is the realization of a web application allowing the prediction of the granting or refusal of a housing credit to a customer of a bank.
      </P>
     
      

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source WebApp</Meta>
          <Link href="https://github.com/moatazkrimchi/Projet_Integre_S5_Credit_Logement" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Prediction model</Meta>
          <Link href="https://github.com/moatazkrimchi/Machine_Learning/blob/main/Pr%C3%A9vision_credit_kaggle.ipynb" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab / Jupyter NoteBook / VisualStudioCode</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Sklearn, Pandas, Matplotlib, Numpy, Seaborn, pickle, Flask, MySQL, ReactJS</span>
        </ListItem>
       
      </List>

  
      <WorkImage src="/images/works/work/p4.png" alt="amembo" />
      <WorkImage src="/images/works/work/p2.jpg" alt="amembo" />

      <WorkImage src="/images/works/work/p3.jpg" alt="amembo" />
      <WorkImage src="/images/works/work/p1.jpg" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
