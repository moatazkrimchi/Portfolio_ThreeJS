import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  Link
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import thumbFishWorkflow from '../public/images/works/work/ibm.png'
import thumbMyDeskSetup from '../public/images/works/work/ai.png'
import thumb500PaidUsers from '../public/images/works/work/scrum.png'
import thumbFinancialGoal from '../public/images/works/work/power.png'
import thumbHowToPriceYourself from '../public/images/works/work/prince.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Certification
      </Heading>
      <br/>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
           <GridItem
            title="HCIA-AI Course "
            thumbnail={thumbMyDeskSetup}
            href="https://talent.huaweiuniversity.com/portal/courses/HuaweiX+EBG2020CCHW1100087/about"
          />
          <Paragraph>
          <Link> January 20, 2022 </Link> <br/> <br/>
         Through this course you will get familiar with the different techniques of artificial intelligence, especially machine learning, artificial neural networks and Deep Learning. <br/><br/> Through practical work you will master the essentials of the TensorFlow framework via the Python language.
          </Paragraph>
        
          <GridItem
            title="Scrum Foundation Professional Certificate SFPC "
            thumbnail={thumb500PaidUsers}
            href="https://certiprof.com/pages/scrum-foundation-professional-certificate-sfpc-english"
          />
          <Paragraph>
          <Link> January 14, 2022 </Link> <br/> <br/>
          Scrum Foundation Professional Certificate holders have developed the entry-level skills in Scrum that endorses their fundamental knowledge in this framework. 
          </Paragraph>
        </SimpleGrid>
      </Section>
      <br/>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="IBM IoT Cloud Developer "
            thumbnail={thumbFishWorkflow}
            href="https://www.ibm.com/skills/topics/internet-of-things/"
          />
         <Paragraph>
          <Link> January 26, 2021 </Link> <br/> <br/>
          The Internet of Things (IoT) is the concept of connecting any device (so long as it has an on/off switch) to the internet and to other connected devices.
          </Paragraph>
          <GridItem
            title="Microsoft Power BI"
            thumbnail={thumbFinancialGoal}
            href="https://docs.microsoft.com/en-us/learn/certifications/exams/da-100"
          />
          <Paragraph>
          <Link>  In Progress </Link> <br/> <br/>
          Aimed at candidates wishing to build a career in data analysis on Power BI. This exam ensures that the candidate has the fundamental knowledge required to prove competency in Microsoft BI
          </Paragraph>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="PRINCE2"
            thumbnail={thumbHowToPriceYourself}
            href="https://www.globalknowledge.com/fr-fr/certifications/certification-professionnelle/axelos/prince2/prince2#:~:text=Le%20programme%20de%20certification%20PRINCE2,de%20Project%20In%20Control%20Environments*.&text=Elle%20d%C3%A9finit%20les%20responsabilit%C3%A9s%20de,autres%20au%20sein%20du%20projet."
          />
          <Paragraph>
          <Link>  In Progress </Link> <br/> <br/>
          The PRINCE2® certification program is designed for project managers and professionals involved in a project management team.
          </Paragraph>
          
         
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
