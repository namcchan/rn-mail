import { Box } from '@/atoms';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookList from './BookList';
import InkdropLogo from './InkdropLogo';

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);
  return (
    <Box flex={1} bg='$sidebarBackground'>
      <SafeAreaView>
        <Box
          alignItems='flex-start'
          pl='md'
          pb='sm'
          mt='xs'
          borderBottomColor='$sidebarSeparator'
          borderBottomWidth={1}
        >
          <InkdropLogo width={128} height={36} color='$sidebarForeground' />
        </Box>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  );
};

export default Sidebar;
