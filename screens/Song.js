import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Song = ({ route }) => {
  const { song } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.songTitle}>{song.title}</Text>
      <Text style={styles.songArtist}>{song.artist}</Text>
      <Text style={styles.songChords} adjustsFontSizeToFit={true}>
        {song.chords},{' '}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderBottomWidth: 1,
  },
  songTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },
  songArtist: {
    color: 'black',
    fontSize: 20,
  },
  songChords: {
    paddingTop: 40,
    fontSize: 20,
  },
});

export default Song;
