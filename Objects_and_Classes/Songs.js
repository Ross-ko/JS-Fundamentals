function songs(data) {
    
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsNumber = data.shift();
    let songsType = data.pop();
    let songs = [];                                                                    /* part of SoftUni salution */

    // for (let i = 0; i < songsNumber; i++) {                                         /* my salution */
    //     let [type, name, time] = data[i].split('_');
    //     let song = new Song(type, name, time);

    //     if (songsType == 'all') {
    //         console.log(song.name);
    //     } else if (songsType == type) {
    //         console.log(song.name);
    //     }
    // }

    for (let i = 0; i < songsNumber; i++) {                                            /* SoftUni salution */
        let [type, name, time] = data[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (songsType == 'all') {
        songs.forEach((index) => console.log(index.name));
    } else {
        let songsFilter = songs.filter((index) => index.type == songsType);
        songsFilter.forEach((index) => console.log(index.name));
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
console.log('---------------------------------------------------------------------------------');
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
console.log('---------------------------------------------------------------------------------');
songs([2, 
    'like_Replay_3:15', 
    'ban_Photoshop_3:48', 
    'all']);