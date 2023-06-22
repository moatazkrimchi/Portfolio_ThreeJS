import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="STYLY">
    <Container>
      <Title>
        Video with Python <Badge>2021</Badge>
      </Title>
      <P>
      A python program that receives as input a database of covid cases between 2019 and 2020 and transforms this input into a video of accumulated cases 
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/moatazkrimchi/Video_python/blob/main/Video_avec_python_COVID.ipynb" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab / Jupyter NoteBook</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Pandas, Matplotlib, Bar-Chart-Race</span>
        </ListItem>
       
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/images/works/work/video.mp4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/work/vi2.png" alt="STYLY" />
      <WorkImage src="/images/works/work/vi1.png" alt="STYLY" />
      <WorkImage src="/images/works/work/vi3.png" alt="STYLY" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
