import { Button } from '@mantine/core';

function ButtonDark({ text }: { text: string; className?: string }) {
  return (
    <div
      className='bg-[#111] p-1' // This creates the offset with a blue background
      style={{
        display: 'inline-block',
        padding: '0px', // Adjust the padding for the desired offset
        boxShadow: '4px 4px 0 #dc2626', // This creates the red shadow effect
      }}
    >
      <Button
        color='#111'
        radius={0}
        className='uppercase text-xs tracking-widest bg-white border-black shadow-md'
        styles={{
          root: {
            backgroundColor: '#111', // Button color
            borderWidth: 0, // Removes border
          },
          label: {
            color: 'white', // Text color
            fontWeight: 700, // Makes the font bold
          },
          padding: '1rem',
        }}
      >
        {text}
      </Button>
    </div>
  );
}

export default ButtonDark;
