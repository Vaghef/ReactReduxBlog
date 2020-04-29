export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

//export default SelectSong => because we wanna return more than one function from this js file