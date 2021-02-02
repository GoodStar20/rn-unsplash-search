import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../components/Card';
import { fetchRequest } from '../store/actions';
import styles from './styles';

const FeedScreen = () => {
  const dispatch = useDispatch();
  const { images, total, totalPages } = useSelector(state => state.images);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const searchPhotos = () => {
    setPage(1);
    dispatch(fetchRequest(query, 1));
  };
  const fetchImages = () => {
    setPage(page + 1);
    if (page + 1 < totalPages) dispatch(fetchRequest(query, page + 1));
  };
  const renderItem = ({ item }) => (
    <Card key={item.id} item={item} favorite={false} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.inputFiled}
          onChangeText={text => setQuery(text)}
          value={query}
          autoCapitalize="none"
          placeholder="Search Photos"
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchPhotos}>
          <Icon name="ios-search" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.cards}>
        {images.length > 0 && (
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={image => image.id}
            onEndReachedThreshold={0.2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onEndReached={fetchImages}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;
