import React from 'react'
import { useDisclosure } from '@mantine/hooks';

const NeedsTwo = () => {
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptas eos excepturi inventore, quidem asperiores porro cupiditate quae, accusamus sapiente quisquam, quam ipsa cumque culpa. Iure, voluptatem temporibus? Velit facilis doloremque nulla, voluptas obcaecati voluptate eos voluptatibus quo dignissimos praesentium laudantium officiis hic veritatis soluta maxime pariatur dolores magni eius, harum quos ad explicabo. Optio culpa hic tempora fuga doloribus minima repudiandae! Voluptate tenetur illum perspiciatis doloribus architecto minus repudiandae, ex ipsa dolore ipsum eaque dolorem dicta quod voluptas distinctio similique et blanditiis incidunt vitae aperiam, ratione repellat minima velit odit? Iure alias tempore, rem dignissimos officia quia laudantium qui?
                </p>
            </div>
        </div>
    </div>
  )
}

export default NeedsTwo;
