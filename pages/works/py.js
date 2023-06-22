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
        PyMoataz <Badge>-2022</Badge>
        </Title>
        <P>
        The game developed with Python (Pygame) is a 3D game similar to Pokemon, set in a virtual world. Players can explore an immersive forest, interact with non-player characters (NPCs) through dialogues, enter houses and even explore a mysterious dungeon.<br/>
The game offers an immersive experience with 3D graphics and detailed environments. Players can move freely through the forest using intuitive controls, meeting NPCs with whom they can engage in dialogues to obtain quests, tips or information about the game world.
         </P>
        
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/moatazkrimchi/Game_PYMOATAZ" target="_blank">
            Notebook GitHub <ExternalLinkIcon mx="2px" />
          </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Pycharm</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Pygame, Python</span>
          </ListItem>
         
        </List>
  
        <WorkImage src="/images/works/work/shooter4.png" alt="mode.tokyo" />
        <SimpleGrid columns={1} gap={2}>
          <WorkImage src="/images/works/work/py5.png" alt="mode.tokyo" />
        </SimpleGrid>
        <WorkImage src="/images/works/work/py1.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/py2.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/py3.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/py4.png" alt="mode.tokyo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  