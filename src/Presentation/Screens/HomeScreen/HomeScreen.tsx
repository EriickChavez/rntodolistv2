import React from 'react';
import { View, SafeAreaView } from 'react-native';
import useTheme from '@/Hook/useTheme';
import { HomeScreenNavigationProps } from '@/@Types/navigation';

import { useSelector } from 'react-redux';
import { taskSelector } from '@/Store/Slice/TaskSlice';
import styles from './Styles';
import TaskList from '@/Presentation/Components/TaskList/TaskList';

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({}) => {
  const { taskList } = useSelector(taskSelector);
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <View style={styles.container}>
        <View style={styles.list}>
          <TaskList data={taskList} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
