import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    chakra
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const filePath = '/pdf/rapport.pdf';

  const PinkLink = chakra(Link, {
    baseStyle: {
      color: 'pink.500',
      _hover: {
        textDecoration: 'underline',
      },
    },
  });

  const Work = () => (
    
    <Layout title="mode.tokyo">
      <Container>
        <Title>
        ANIA <Badge>-2022</Badge>
        </Title>
        <P>Our project went through several steps, first we started by analyzing the needs expressed in the 
specifications and determine the different KPIs responding to it, then the development of the 
data warehouse followed a method specific to business intelligence: the Ralph Kimball 
approach that allowed us from the Data Marts extracted by SSIS (ETL) to create a model of the 
Datawarehouse in snowflake, this structuring of data is done using the analysis tool SSAS 
which is based on the DAX language. Finally, once these data are structured in the form of a 
tabular model, they are directed to Power BI in order to create the dashboards and integrate 
them on the ANIA platform. </P>
  
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <PinkLink href={filePath} download>
            Download PDF Report <ExternalLinkIcon mx="2px" />
          </PinkLink>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>VisualStudio, VisualStudioCode, PowerBI, SSMS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>SSIS, SSAS, PowerBI, ReactJS, SQL</span>
          </ListItem>
         
        </List>
  
        <WorkImage src="/images/works/work/BI.png" alt="mode.tokyo" />
        <SimpleGrid columns={1} gap={2}>
          <WorkImage src="/images/works/work/bi_1.png" alt="mode.tokyo" />
        </SimpleGrid>
        <WorkImage src="/images/works/work/bi_2.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/bi_3.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/bi_4.png" alt="mode.tokyo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  