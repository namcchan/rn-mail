import { Theme } from '@/themes';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import Box, { BoxProps } from './Box';

const Bar = createRestyleComponent<
  VariantProps<Theme, 'barVariants'> & BoxProps,
  Theme
>([createVariant({ themeKey: 'barVariants' })], Box);

export default Bar;
