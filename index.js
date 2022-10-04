import songs from './index.json' assert {type: 'json'};

document.querySelector(".count").style.display="block"
document.querySelector(".count").innerHTML= Object.keys(songs).length;
var key = 1;
        const addSong = (ev)=>{
            ev.preventDefault(); 
            let song = {
                id: Date.now(),
                song: document.getElementById('song').value,
                album: document.getElementById('album').value,
                artist: document.getElementById('artist').value,
                year: document.getElementById('year').value

            }
            songs.push(song);
            console.log(songs);
            document.querySelector('form').reset();
            localStorage.setItem('song_'+key, JSON.stringify(songs) );
            key++;
            document.querySelector(".count").innerHTML= Object.keys(songs).length;
        }

        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addSong);
        });

    ///////////////sort by song name////////////////////////

        function sortByKey(array, key) {
            
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
        document.querySelector('.show').innerHTML=JSON.stringify(result)
   
}

    
    document.getElementById('ssong').addEventListener('click', searchSong);
     
    
    /////////////////////////////////search by artist//////////////////

    function searchArtist(){ 
          // songs.forEach(entry => {
            var artname = document.getElementById("searchartist").value
            let result = Object.values(songs).filter(function(e){return e.artist == artname})
            document.querySelector('.show').style.display="block"
            document.querySelector('.show').innerHTML=JSON.stringify(result)
            console.log(result);
       // })
    }
    document.getElementById('sartist').addEventListener('click', searchArtist);

    //////////////////////////////////search by year///////////////////////////

    function searchYear(){ 
        // songs.forEach(entry => {
          var year = document.getElementById("searchyear").value
          let result = Object.values(songs).filter(function(e){return e.year == year})
          document.querySelector('.show').style.display="block"
          document.querySelector('.show').innerHTML=JSON.stringify(result)
          console.log(result);
     // })
  }
  document.getElementById('syear').addEventListener('click', searchYear);
