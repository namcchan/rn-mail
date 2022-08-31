import { createBox } from '@shopify/restyle';
import * as React from 'react';
import Animated, { AnimateProps } from 'react-native-reanimated';
import { ViewProps } from 'react-native';
import { Theme } from '@/themes';

const AnimatedBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View);

export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>;

export default AnimatedBox;
