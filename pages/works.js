import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/work/data_analyst.jpg'
import thumbWalknote from '../public/images/works/work/scrapping.png'
import thumbFourPainters from '../public/images/works/work/ml3.png'
import thumbMenkiki from '../public/images/works/work/tweet.jpg'
import thumbModeTokyo from '../public/images/works/work/voice.jpg'
import thumbStyly from '../public/images/works/work/video.png'
import thumbPichu2 from '../public/images/works/work/logoo.png'
import thumbFreeDBTagger from '../public/images/works/work/emi.jpg'
import thumbAmembo from '../public/images/works/work/credit.jpg'
import insur from '../public/images/works/work/insur.png'
import sas from '../public/images/works/work/sas.jpg'
import django from '../public/images/works/work/django.png'
import shooter from '../public/images/works/work/shooter.png'
import py from '../public/images/works/work/pym.png'


const Works = () => (
  <Layout title="Works">
    <Container>
    <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
        Professional Experience

        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="BI"
            thumbnail={insur}
            title="BI project"
          >
          Implementation of a business intelligence solution for the 
ANIA health insurance platform
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sas" thumbnail={sas} title="SAS VIYA Project">
          Visualization of CDM agency completion rates to observe their performance           </WorkGridItem>
        </Section>
      </SimpleGrid>
      
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Data Project
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Data Analytics" thumbnail={thumbInkdrop}>
          Analyze company data to answer questions that help make the best decisions using Matplotlib, Seaborn, Pandas
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Web Scrapping"
            thumbnail={thumbWalknote}
          >
            This directory contains a set of projects related to web scrapping using Selenium, Beautifulsoup, Newspapers 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Machine Learning"
            thumbnail={thumbFourPainters}
          >
            Different machine learning project to predict anything categorical and numerical with labeled or unlabeled data using Sklearn, Pandas, Numpy
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Spark Sentiment">
          Extract tweets related to diabetes and analyze the sentiment of different tweets using TextBlob, Wordcloud, pyspark 
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Code Pyhton
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Voice assistant"
          >
            Realization of a voice assistant to communicate with the user and start a music of his choice 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Video with python ">
          A program that takes like enters a database of coronavirus and it will transmit it to a video summarizing the cumulative number of the cases. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
        Web Application 
        
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="ACAPS App">
          Realization of a web application for the management of stock and supply for the company ACAPS
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="EMI LOG"
          >
            Realization of a web application for the management of hosting within the mohammadia school of engineering
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Prediction">
          Realization of a housing credit prediction application for CIH, BCP, BMCI banks using a machine learning algorithm 
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="django"
            thumbnail={django}
            title="Django APP"
          >
CRM application for managing customers, products and orders in an e-commerce marketplace</WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
       Games
        
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="shooter" thumbnail={shooter} title="Shooter">
          Using the pygame library to create a 2D game using the python language
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="py"
            thumbnail={py}
            title="PyMoataz"
          >
           Create a 3-dimensional game like Pokémon, an imaginary space with characters
          </WorkGridItem>
        </Section>
       
      </SimpleGrid>



    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
