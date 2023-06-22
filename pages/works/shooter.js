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
        SHOOTER <Badge>-2022</Badge>
        </Title>
        <P>
        The game is called shooter, it&apos;s an RPG where you have a tree that can shoot projectiles to kill monsters without inflicting attacks on it, and after a while firefalls activate to make the game more difficult, the goal is to survive by earning as many points as possible (score).
Once a player has run out of life points, the game ends.
         </P>
        
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/moatazkrimchi/Game_Python" target="_blank">
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
          <WorkImage src="/images/works/work/shooter5.png" alt="mode.tokyo" />
        </SimpleGrid>
        <WorkImage src="/images/works/work/shooter1.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/shooter2.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/work/shooter3.png" alt="mode.tokyo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  