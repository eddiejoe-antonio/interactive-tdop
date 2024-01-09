import { Menu, Button } from '@mantine/core';

const NavDropDown = () => {
  return (
    <Menu shadow='md' radius='0' width={200} position='bottom-start'>
      <Menu.Target>
        <Button
          color='#FFFDF6'
          radius={0}
          className='uppercase text-xs tracking-widest font-light'
          width='target'
          styles={{ label: { color: 'black' } }}
        >
          Navigate
        </Button>
      </Menu.Target>
      <Menu.Dropdown className='bg-[#666] border-b-2 border-[#666]'>
        <Menu.Item color='#dedede' className='uppercase text-xs py-10 text-white'>
          Geographic Introduction
        </Menu.Item>
        <Menu.Item color='#dedede' className='uppercase text-xs py-10 text-white'>
          Interactive TDOP
        </Menu.Item>
        <Menu.Item color='#dedede' className='uppercase text-xs py-10 text-white'>
          Data Dashboards
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavDropDown;
