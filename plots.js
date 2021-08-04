//console.log(data);

const url = 'http://127.0.0.1:5000/everything';
let displayYear=1950;
let decades = {};


d3.json(url).then(function(data) {
  console.log("d3response" + JSON.stringify(data));

//  1. pich the year 
//  2. group by the Genres
// 3. group by decades 

let years ={}; 
data.some(function(elem){ 
  if(years[elem["Year"]] != undefined){
    years[elem["Year"]]++
  }
  else{
    years[elem["Year"]] =  1;
  }
});

let myDecade;
data.some(function(elem){
  myDecade = parseInt(elem["Year"])-(parseInt(elem["Year"])%10);
  if(decades[myDecade] != undefined){
  }
  else{
    decades[myDecade] = {};
    decades[myDecade]["Genres"] = [];
  }
  let myarr = elem["Genre"].split(", ");
  //console.log(myarr);
  myarr.some(function(elem2){
    let flag = 0;
    decades[myDecade]["Genres"].some(function(myGenres){
      if(myGenres.Genre == elem2){
        myGenres.Count++;
        flag++;
        return;
      }
    });
    if(flag == 0){
      decades[myDecade]["Genres"].push({"Genre":elem2,"Count":1});
    }
  });
});

for(elem in decades){
  $("#selDataset").html($("#selDataset").html()+"<option value='"+elem+"'>"+elem+"</option>");
}

$("#selDataset").on("change", function(x){
 displayYear = this.value;
  let trace1 = {
    x: decades[displayYear]["Genres"].map(row => row.Genre),
    y: decades[displayYear]["Genres"].map(row => row.Count),
    type: "bar"
  };

  // Data trace array
  let traceData = [trace1];
  Plotly.newPlot("plot", traceData, layout);
});
//alert(JSON.stringify(decades));
let names = decades[displayYear]["Genres"].map(function (row){
  return row.Year;
});

// Trace for the Greek Data
let trace1 = {
    x: decades[displayYear]["Genres"].map(row => row.Genre),
    y: decades[displayYear]["Genres"].map(row => row.Count),
    type: "bar"
  };

// Data trace array
let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
  title: "Popular Genre by decades"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);

// updatePlotly(response) ;

  });

function updatePlotly(newData) {
  //console.log(newData);
  Plotly.newPlot("plot", newData, layout);
  //Plotly.restyle("plot", "values", [newData]);
}