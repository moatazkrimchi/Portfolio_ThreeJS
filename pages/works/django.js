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
        CRM APP <Badge>-2022</Badge>
        </Title>
        <P>
        The CRM application manages customers, products and orders for an electronic marketplace. It offers simple add, modify and delete functions. It enables customer information and product details to be entered, and associated orders to be created and managed. This solution centralizes data and optimizes online sales operations. It improves efficiency and customer satisfaction, while offering practical management of sales activities.
         </P>
        
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/moatazkrimchi/App-CRM-Django" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Pycharm</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Django, Python</span>
          </ListItem>
         
        </List>
  
        <WorkImage src="/images/works/work/django1.png" alt="mode.tokyo" />
        <SimpleGrid columns={1} gap={2}>
          <WorkImage src="/images/works/work/django2.png" alt="mode.tokyo" />
        </SimpleGrid>
        <WorkImage src="/images/works/work/django3.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/django4.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/django5.png" alt="mode.tokyo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  