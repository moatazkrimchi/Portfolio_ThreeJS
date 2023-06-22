import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Analyse Sentiment <Badge>-2020</Badge>
      </Title>
      <P>
      This project allows to extract the tweets related to the diabetic disease then cleaning these tweets in order to analyze the dentiments of the different texts 
      </P>
     
      

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/moatazkrimchi/Spark/blob/main/tweets_sentiment.ipynb" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab / Jupyter NoteBook</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Tweepy, TextBlob, WordCloud, PySpark</span>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://github.com/moatazkrimchi/Spark"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/work/spark.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/work/spark3.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/work/spark2.png" alt="menkiki" />
        <WorkImage src="/images/works/work/spark1.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
