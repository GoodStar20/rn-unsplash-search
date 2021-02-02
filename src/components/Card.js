import React, { useEffect, useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import { addFavorite, removeFavorite } from '../store/actions';
import { getImageSrc } from '../utils/images';
import styles from './styles';

const Card = ({ item, favorite }) => {
  const { id } = item;
  const dispatch = useDispatch();

  const { favorites } = useSelector(state => state.favorites);
  const [isFavorite, setFavorite] = useState(favorite);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (favorites.length > 0)
      if (favorites.find(image => image.id === id) === undefined)
        setFavorite(false);
  }, [favorites]);

  const handleHeartPressed = () => {
    if (!isFavorite) {
      dispatch(addFavorite(item));
    } else {
      dispatch(removeFavorite(item));
    }
    setFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: getImageSrc(item) }}
        style={styles.image}
        onLoad={() => {
          setLoading(false);
        }}>
        {!loading && (
          <View style={styles.favoriteView}>
            <TouchableOpacity onPress={handleHeartPressed}>
              <Icon
                name={isFavorite ? 'pushpin' : 'pushpino'}
                color="purple"
                size={30}
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Card;
