import { Card, Accordion, AccordionItem, Grid, Text, Box } from '@mantine/core';

const CollapsibleCard = ({ goalNumber, taskNumber, color, goalTitle, description, leftPanelContent, rightPanelContent }) => {

    return (
        <Card shadow="sm" padding="0" radius="0" style={{background: '#FFFDF6'}} className='my-2'>
            <Accordion>
                <AccordionItem value={`goal-${goalNumber}`}>
                    <Accordion.Control style={{ display: 'flex', alignItems: 'center', background: '#ececec', border: 'none'}}>
                        <Grid className='uppercase font-sans' >
                            <Grid.Col span={2} style={{ display: 'flex', background: `${color}`}}>
                                <Grid.Col span={7} style={{color: '#B9B9B9' }}>
                                    <Text size="xs" weight={300}>GOAL NO.{goalNumber} | </Text>
                                </Grid.Col>
                                <Grid.Col span={6} style={{color: '#FFF' }}>
                                    <Text size="xs" weight={700}>Task {taskNumber}</Text>
                                </Grid.Col>
                            </Grid.Col>
                            <Grid.Col span={10} style={{ display: 'flex', alignItems: 'center', background: '#ececec'}}>
                                <Text size="xs" weight={700}>{goalTitle}</Text>
                            </Grid.Col>
                        </Grid>
                    </Accordion.Control>
                    <Accordion.Panel className='mx-2'>
                        <Grid className='font-sans my-6'>
                            <Grid.Col span={2} style={{ display: 'flex', alignContent: 'center'}}>
                                <Text className='font-bold text-4xl'>{taskNumber}</Text>
                            </Grid.Col>
                            <Grid.Col span={10} style={{ display: 'flex', alignItems: 'center'}}>
                                <Text className='font-bold text-xl'>{goalTitle}</Text>
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <Text className='text-xs mb-8'>{description}</Text>
                                <h1 className='my-2 text-xs uppercase font-bold'>2030 Target</h1>
                                <hr></hr>
                                <Text className='text-xs mb-8 w-[50%]'>{description}</Text>
                                {/* Left panel content, can be a React component */}
                                {leftPanelContent}
                                <Text className='text-xs'>{description}</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                {/* Right panel content, can be a React component */}
                                {rightPanelContent}
                            </Grid.Col>
                        </Grid>
                    </Accordion.Panel>
                </AccordionItem>
            </Accordion>
        </Card>
    );
};

export default CollapsibleCard;
