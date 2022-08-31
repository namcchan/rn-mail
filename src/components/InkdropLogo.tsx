import { Theme } from '@/themes';
import { ColorProps, useTheme, useResponsiveProp } from '@shopify/restyle';
import React from 'react';
import { SvgProps } from 'react-native-svg';
// @ts-ignore
import LogoSVG from '@/images/logo.svg';

type Props = Omit<SvgProps, 'color'> & ColorProps<Theme>;

const InkdropLogo: React.FC<Props> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>();
  const colorProp = useResponsiveProp(color);
  const vColor = theme.colors[colorProp || '$foreground'];

  return <LogoSVG {...rest} color={vColor} />;
};

export default InkdropLogo;
