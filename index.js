
//import songs from './index.json' assert {type: 'json'};
let songs = JSON.parse(localStorage.getItem('songlist'))
if(songs == null){
    songs = [];
}


document.querySelector(".count").style.display="block"
document.querySelector(".count").innerHTML= songs.length;
        const addSong = (ev)=>{
            ev.preventDefault(); 
            var songname = document.getElementById('song').value
            var artistname = document.getElementById('artist').value
            var year = document.getElementById('year').value

           // var album = document.getElementById('upload').files[0]

            let song = {
                id: Date.now(),
                song: songname[0].toUpperCase()+songname.slice(1),
                artist: artistname[0].toUpperCase()+artistname.slice(1),
                year: year,
                album: imageurl

            }
            
            songs.push(song)
            document.querySelector('form').reset();
            localStorage.setItem('songlist', JSON.stringify(songs) );
            document.querySelector(".count").innerHTML= songs.length;
            displayValues();
            
        }

        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addSong);
        });


        
           var imageurl="";
           document.querySelector('#upload').addEventListener('change',function(){ 
            var reader = new FileReader();
            reader.addEventListener('load',function(){
                imageurl=reader.result
               
            })
            reader.readAsDataURL(this.files[0]);
           })
              
            
          
          

        function displayValues(){
            var tablelements = document.querySelector(".songtable")
            tablelements.style.display = "block"
            tablelements.innerHTML="<tr><th>Song Name</th><th>Album Cover</th><th>Artist</th><th>Year Released</th></tr>"
            for(var i=0;i<songs.length;i++){
                tablelements.innerHTML+=
                `<tr><td>${songs[i].song}</td>
                <td><img src = "${songs[i].album}"</td>
                <td>${songs[i].artist}</td>
                <td>${songs[i].year}</td></tr>`
            }
        }
   
            function displayValuesParam(songs){
            var tablelements = document.querySelector(".songtable")
            tablelements.style.display = "block"
            tablelements.innerHTML="<tr><th>Song Name</th><th>Album Cover</th><th>Artist</th><th>Year Released</th></tr>"
            for(var i=0;i<songs.length;i++){
                tablelements.innerHTML+=
                `<tr><td>${songs[i].song}</td>
                <td><img src = "${songs[i].album}+tr=w-400,h-300"</td>
                <td>${songs[i].artist}</td>
                <td>${songs[i].year}</td></tr>`
            }
        }

        
     
        


    ///////////////sort by song name////////////////////////

        function sortByKey(array, key) {   
            document.querySelector(".songtable").style.display= "block"       
            JSON.stringify(array.sort(function(a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }));
             displayValues()
            }
        

            document.getElementById('sortname').addEventListener('click', function(){  sortByKey(songs,'song')});


    //////////////////////sort by artist///////////////////


        document.getElementById('sortartist').addEventListener('click', function(){  sortByKey(songs,'artist')});


    //////////////////////sort by year/////////////////////


        document.getElementById('sortyear').addEventListener('click', function(){  sortByKey(songs,'year')});

        
    //////////////////////////search by song name/////////////////////////
           
    function searchSong(){ 

        var sname = document.getElementById("searchsong").value
        let result = songs.filter(function(e){return e.song.match(sname)})
        console.log(result);
        var tablelements = document.querySelector(".songtable")
            tablelements.style.display = "block"
            tablelements.innerHTML=""
        for(var i=0;i<result.length;i++){
            tablelements.innerHTML+=
            `<tr><td>${songs[i].song}</td>
            <td><img src = "${songs[i].album}"</td>
            <td>${songs[i].artist}</td>
            <td>${songs[i].year}</td></tr>`
        }
    }

    
    document.getElementById('ssong').addEventListener('click', searchSong);
     
    
    /////////////////////////////////search by artist//////////////////

    function searchArtist(){ 
          // songs.forEach(entry => {
            var artname = document.getElementById("searchartist").value
            let result = songs.filter(function(e){return e.artist == artname})
            displayValuesParam(result)
       // })
    }
    document.getElementById('sartist').addEventListener('click', searchArtist);

    //////////////////////////////////search by year///////////////////////////

    function searchYear(){ 
        // songs.forEach(entry => {
          var year = document.getElementById("searchyear").value
          let result = songs.filter(function(e){return e.year == year})
          displayValuesParam(result)
          
     // })
  }
  document.getElementById('syear').addEventListener('click', searchYear)
