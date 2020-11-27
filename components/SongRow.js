import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SongRow = ({ song }) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.songTitle}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 70,
    borderBottomWidth: 1,
  },
  songTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  artist: {
    color: 'black',
    fontSize: 14,
  },
});

export default SongRow;
