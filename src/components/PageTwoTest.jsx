import React from 'react'
import heroImg from '../assets/hero.jpg'
import { Card, Image, Text, Badge, Button, Group, Collapse, Accordion, AccordionItem, AccordionChevron } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import img1 from '../assets/1.jpg'
import CardTerms from './CardTerms';
import IntroCard from './introCard';

const PageTwoText = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='max-w-[1240px] grid md:grid-cols-12'>
            <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 md:pb-20'>
                <p className=''>
                There are many factors that will help the state achieve progress on digital opportunity. Each introduces a new concept that can be challenging to understand.
                <br />  
                <br />
                Click on the images to see a definition of each of the key terms and topics in the BDO’s vision for digital opportunity or scroll down to continue.
                </p>
            </div>
        </div>
        <CardTerms img={IntroCard.Availability.img} altText={IntroCard.Availability.altText} title={IntroCard.Availability.title} description={IntroCard.Availability.description} />
        <CardTerms img={IntroCard.Adoption.img} altText={IntroCard.Adoption.altText} title={IntroCard.Adoption.title} description={IntroCard.Adoption.description} />
        {/* <div className='block max-w-[1240px] md:grid md:grid-cols-12 gap-2.5'>
                <div className='flex flex-col col-start-4 col-span-2'>
                <Card shadow="sm" padding="lg" radius="0" withBorder className='col-span-1 '>
                  <Card.Section>
                    <Image
                      src={img1}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Accordion>
                    <AccordionItem value='Availability'>
                      <Accordion.Control>Availability</Accordion.Control>
                      <Accordion.Panel>Availability Lorem ipsum dolor sit amet.</Accordion.Panel>
                    </AccordionItem>
                  </Accordion>
                </Card>
                </div>
                <div className='flex flex-col col-start-6 col-span-2'>
                <Card shadow="sm" padding="lg" radius="0" withBorder className='col-span-4 '>
                  <Card.Section>
                    <Image
                      src={img1}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Accordion>
                    <AccordionItem value='Availability'>
                      <Accordion.Control>Affordability</Accordion.Control>
                      <Accordion.Panel>Availability Lorem ipsum dolor sit amet.</Accordion.Panel>
                    </AccordionItem>
                  </Accordion>
                </Card>
                </div>
                <div className='flex flex-col col-start-8 col-span-2'>
                <Card shadow="sm" padding="lg" radius="0" withBorder className='col-span-4 '>
                  <Card.Section>
                    <Image
                      src={img1}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Accordion>
                    <AccordionItem value='Availability'>
                      <Accordion.Control>Digital Literacy</Accordion.Control>
                      <Accordion.Panel>Availability Lorem ipsum dolor sit amet.</Accordion.Panel>
                    </AccordionItem>
                  </Accordion>
                </Card>
                </div>
        </div>
        <div className='block max-w-[1240px] md:grid md:grid-cols-12 gap-2.5'>
          <div className='flex flex-col col-start-4 col-span-2'>
                <Card shadow="sm" padding="lg" radius="0" withBorder className='col-span-1 '>
                  <Card.Section>
                    <Image
                      src={img1}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Accordion>
                    <AccordionItem value='Availability'>
                      <Accordion.Control>Availability</Accordion.Control>
                      <Accordion.Panel>Availability Lorem ipsum dolor sit amet.</Accordion.Panel>
                    </AccordionItem>
                  </Accordion>
                </Card>
                </div>
                <div className='flex flex-col col-start-6 col-span-2'>
                <Card shadow="sm" padding="lg" radius="0" withBorder className='col-span-4 '>
                  <Card.Section>
                    <Image
                      src={img1}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Accordion>
                    <AccordionItem value='Availability'>
                      <Accordion.Control>Affordability</Accordion.Control>
                      <Accordion.Panel>Availability Lorem ipsum dolor sit amet.</Accordion.Panel>
                    </AccordionItem>
                  </Accordion>
                </Card>
                </div>
                <div className='flex flex-col col-start-8 col-span-2'>
                <Card shadow="sm" padding="lg" radius="0" withBorder className='col-span-4 '>
                  <Card.Section>
                    <Image
                      src={img1}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Accordion>
                    <AccordionItem value='Availability'>
                      <Accordion.Control>Digital Literacy</Accordion.Control>
                      <Accordion.Panel>Availability Lorem ipsum dolor sit amet.</Accordion.Panel>
                    </AccordionItem>
                  </Accordion>
                </Card>
                </div>
        </div> */}
    </div>
  )
}

export default PageTwoText;
