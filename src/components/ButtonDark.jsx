import { Button } from '@mantine/core';

function ButtonDark({text}) {
  return (
  <Button color='#111' radius={0} className='uppercase text-xs italic tracking-widest'>{text}</Button>
  );
}

export default ButtonDark;