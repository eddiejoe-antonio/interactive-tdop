import { Card, Image, Text, Badge, Button, Group, Collapse, Accordion, AccordionItem, AccordionChevron } from '@mantine/core';


const CardTerms = ({img, altText, title, description}) => {
    return ( 
        <Card>
            <Card.Section>
                <Image src={img}
                height={160}
                alt={altText}
                />
            </Card.Section>
            <Accordion>
                <AccordionItem
                value={title}>
                    <Accordion.Control>{title}</Accordion.Control>
                    <Accordion.Panel>
                        {description}
                    </Accordion.Panel>
                </AccordionItem>
            </Accordion>
        </Card>
     );
}
 
export default CardTerms;