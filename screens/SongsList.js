import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SongRow from '../components/SongRow';
import filter from 'lodash.filter';
import { SearchBar } from 'react-native-elements';

const SongsList = ({ navigation }) => {
  const [allSongs, setAllSongs] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [allFetchedSongs, setAllFetchedSongs] = useState('');

  const updateSearch = (search) => {
    const filteredSongs = filter(allFetchedSongs, (song) => {
      if (
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setAllSongs(filteredSongs);
    setSearchQuery(search);
  };

  const fetchSongs = useCallback(async () => {
    // const result = await fetch(
    //     'http://www.songsterr.com/a/ra/songs/byartists.json?artists=Metallica',
    // );

    // if (result.ok) {
    //     const fetchedSongs = await result.json();
    //     console.log('Total number of songs =>' + fetchedSongs.length);
    //     setAllSongs(fetchedSongs);
    //     setAllFetchedSongs(fetchedSongs);
    // } else {
    //     //TODO - Handle error/UI
    // }

    const localSongData = require('../dataSongs/all_songs.json');
    setAllSongs(localSongData.songs);
    setAllFetchedSongs(localSongData.songs);
  });

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchSongs();

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={allSongs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Song', {
              song: item,
            });
          }}
        >
          <SongRow song={item} />
        </TouchableOpacity>
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <SearchBar
          lightTheme={true}
          placeholder="Search by artist or song title ..."
          onChangeText={updateSearch}
          value={searchQuery}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textOnBox: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SongsList;
