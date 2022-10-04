import songs from './index.json' assert {type: 'json'};
var keys = Object.keys(localStorage),
            i = keys.length;
    
            while ( i-- ) {
            songs.push( localStorage.getItem(keys[i]) );
            }

document.querySelector(".count").style.display="block"
document.querySelector(".count").innerHTML= Object.keys(songs).length;
        const addSong = (ev)=>{
            ev.preventDefault(); 
            var songname = document.getElementById('song').value
            var albumname = document.getElementById('album').value
            var artistname = document.getElementById('artist').value
            var year = document.getElementById('year').value
            let song = {
                id: Date.now(),
                song: songname[0].toUpperCase()+songname.slice(1),
                album: albumname[0].toUpperCase()+albumname.slice(1),
                artist: artistname[0].toUpperCase()+artistname.slice(1),
                year: year

            }
            
            songs.push(song)
            document.querySelector('form').reset();
            localStorage.setItem('songlist', JSON.stringify(songs) );
            document.querySelector(".count").innerHTML= Object.keys(songs).length;
        }

        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addSong);
        });

        


    ///////////////sort by song name////////////////////////

        function sortByKey(array, key) {
            key = key.toLowerCase();
            document.querySelector('.show').style.display = "block"
             JSON.stringify(array.sort(function(a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }));
            document.querySelector('.show').innerHTML =  songs.map((obj) => "\n" +"<b>song:</b>"+ Object.values(obj)[1] +"("+ Object.values(obj)[2]+")"+"\n<b>artist:</b>"+Object.values(obj)[3] +"\n<b>year:</b>"+Object.values(obj)[4]);
           

            }
        

            document.getElementById('sortname').addEventListener('click', function(){  sortByKey(songs,'song')});


    //////////////////////sort by artist///////////////////


        document.getElementById('sortartist').addEventListener('click', function(){  sortByKey(songs,'artist')});


    //////////////////////sort by year/////////////////////


        document.getElementById('sortyear').addEventListener('click', function(){  sortByKey(songs,'year')});

        
    //////////////////////////search by song name/////////////////////////
           
    function searchSong(){ 

        var sname = document.getElementById("searchsong").value
        let result = Object.values(songs).filter(function(e){return e.song.match(sname)})
        document.querySelector('.show').style.display="block"
        var res = result.map((obj) => "\n" +"<b>song:</b>"+ Object.values(obj)[1] +"("+ Object.values(obj)[2]+")"+"\n<b>artist:</b>"+Object.values(obj)[3] +"\n<b>year:</b>"+Object.values(obj)[4]);
        document.querySelector('.show').innerHTML=res
        console.log(res);
}

    
    document.getElementById('ssong').addEventListener('click', searchSong);
     
    
    /////////////////////////////////search by artist//////////////////

    function searchArtist(){ 
          // songs.forEach(entry => {
            var artname = document.getElementById("searchartist").value
            let result = Object.values(songs).filter(function(e){return e.artist == artname})
            document.querySelector('.show').style.display="block"
            var res = result.map((obj) => "\n" +"<b>song:</b>"+ Object.values(obj)[1] +"("+ Object.values(obj)[2]+")"+"\n<b>artist:</b>"+Object.values(obj)[3] +"\n<b>year:</b>"+Object.values(obj)[4]);
            document.querySelector('.show').innerHTML=res
            console.log(res);
       // })
    }
    document.getElementById('sartist').addEventListener('click', searchArtist);

    //////////////////////////////////search by year///////////////////////////

    function searchYear(){ 
        // songs.forEach(entry => {
          var year = document.getElementById("searchyear").value
          let result = Object.values(songs).filter(function(e){return e.year == year})
          document.querySelector('.show').style.display="block"
          var res = result.map((obj) => "\n" +"<b>song:</b>"+ Object.values(obj)[1] +"("+ Object.values(obj)[2]+")"+"\n<b>artist:</b>"+Object.values(obj)[3] +"\n<b>year:</b>"+Object.values(obj)[4]);
          document.querySelector('.show').innerHTML=res
          console.log(res);
     // })
  }
  document.getElementById('syear').addEventListener('click', searchYear)
