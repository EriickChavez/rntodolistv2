import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import useTheme from '@/Hook/useTheme';
import LocalizationService from '@/Utils/LocalizationService';

interface EmptyTaskListProps { }

const EmptyTaskList: React.FC<EmptyTaskListProps> = ({ }) => {
  const themes = useTheme();

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('@/Assets/Imgs/EmptyList.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: themes.colors.text }]}>
          {LocalizationService.empty.title}
        </Text>
        <Text style={[styles.subtext, { color: themes.colors.subtext }]}>
          {LocalizationService.empty.subtext}
        </Text>
      </View>
    </View>
  );
};

export default EmptyTaskList;
