import React from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../components/Card';
import styles from './styles';

const FavoriteScreen = () => {
  const { favorites } = useSelector(state => state.favorites);

  const renderItem = ({ item }) => (
    <Card key={item.id} item={item} favorite={true} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cards}>
        {favorites.length > 0 && (
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={image => image.id}
            onEndReachedThreshold={0.2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
