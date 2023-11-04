function towns(data) {

    for (let townData of data) {

        let [town, latitude, longitude] = townData.split(' | ');

        let townInfo = {town: town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}
        
        console.log(townInfo);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
console.log('=============================================================================================');
towns(['Plovdiv | 136.45 | 812.575']);