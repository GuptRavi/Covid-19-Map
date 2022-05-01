// creating a map-website using 'map-box' for covid-19 

function updateMap()
{
  console.log("Updating map with real-time Data");

  // including the 'json' file from directory
  fetch('/data.json')

  .then(response => response.json()) // js promise
  .then(rsp => { 
    // console.log(rsp); // fecching the data from 'data.json'
    console.log(rsp.data); // fecching the array from 'data.json'

    rsp.data.forEach(element => { // for each array, get following data (latitude and longitude)
      latitude = element.latitude; // fatching latitude
      longitude = element.longitude; // fatching longitude
      cases = element.infected // fatching number of infected

      // setting the marker color according to number of infection
      if (cases>255){
        color = 'rgb(255, 0, 0)';
      }
      else{
        color = `rgb(${cases}, 0, 0)`;
      }

      // Marker on the map
      new mapboxgl.Marker({
        draggable: false,
        color: color
      })
        .setLngLat([longitude, latitude]) // longitude must be first
        .addTo(map);

    });
  });
};

updateMap()

let interval = 200000;
// setInterval --> runs a function in a interval of a time
setInterval(updateMap, interval);
