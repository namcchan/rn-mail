import { Bar } from '@/atoms';
import AnimatedBox from '@/atoms/AnimatedBox';
import * as React from 'react';

const HeaderBar = ({ children, ...rest }: any) => {
  return (
    <AnimatedBox position='absolute' top={0} left={0} right={0} {...rest}>
      <Bar
        variant='headerBar'
        flexDirection='row'
        alignItems='center'
        mx='lg'
        my='md'
        px='sm'
        minHeight={44}
      >
        {children}
      </Bar>
    </AnimatedBox>
  );
};

export default HeaderBar;
