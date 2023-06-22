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

  const filePath = '/pdf/rapport.pdf';


  const Work = () => (
    
    <Layout title="mode.tokyo">
      <Container>
        <Title>
        SAS VIYA <Badge>-2023</Badge>
        </Title>
        <P>
        1- Data import: I imported the data from an Excel file containing information for the year 2022. I used SAS Viya to perform this import step and ensure that the data was correctly loaded into the system.
        <br /><br />
        2- Data preparation: This involved cleaning up the data by removing duplicates and dealing with missing values. I also performed transformations on the variables to make them compatible with the analysis. This step was important to ensure the quality of the data before using it.
        <br /><br />
        3- Data processing: I used SAS Viya tools to obtain descriptive statistics on the variables, visualize distributions and trends using graphs, and study the relationships between the different variables by performing correlation analyses.
        <br /><br />
        4- Data visualization: Create interactive graphs and dashboards. I chose from different types of graphs to visually represent the results of my analyses. These visualizations were useful for presenting my findings in a clear and convincing way.
        </P>
        
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/moatazkrimchi/SAS-VIYA/tree/main" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>SAS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>SAS Programming language, CASL, SAS VIYA</span>
          </ListItem>
         
        </List>
  
        <WorkImage src="/images/works/work/sasm.png" alt="mode.tokyo" />
        <SimpleGrid columns={1} gap={2}>
          <WorkImage src="/images/works/work/sas1.png" alt="mode.tokyo" />
        </SimpleGrid>
        <WorkImage src="/images/works/work/sas2.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/sas3.png" alt="mode.tokyo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  