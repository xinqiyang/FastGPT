import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import Loading from '@fastgpt/web/components/common/MyLoading';

type Props = BoxProps & {
  isLoading?: boolean;
  text?: string;
};

const MyBox = ({ text, isLoading, children, ...props }: Props) => {
  return (
    <Box position={'relative'} {...props}>
      {children}
      {isLoading && <Loading fixed={false} text={text} />}
    </Box>
  );
};

export default MyBox;
