import { Card, Image, Accordion, AccordionItem } from '@mantine/core';


const CardTerms = ({img, altText, title, description}) => {
    return ( 
        <Card shadow="sm" padding="sm" radius="0">
            <Card.Section>
                <Image src={img}
                alt={altText}
                />
            </Card.Section>
            <Accordion>
                <AccordionItem
                value={title}>
                    <Accordion.Control className='text-bold'>{title}</Accordion.Control>
                    <Accordion.Panel>
                        {description}
                    </Accordion.Panel>
                </AccordionItem>
            </Accordion>
        </Card>
     );
}
 
export default CardTerms;