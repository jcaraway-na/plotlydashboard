// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// //code used to create this bar chart.
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
//  Plotly.newPlot("plotArea", [trace]);


// // layout options

//  var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };


// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);


// // create bar chart

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);


//    // create pie chart

// var trace = {
//  labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//  "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//  values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//  type: 'pie'
// };
// var data = [trace];
// var layout = {
//  title: "'Pie' Chart",
// };
// Plotly.newPlot("plotArea", data, layout);

var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
  "Brown", "Brown", "Brown", "Green", "Green",
  "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
  25.7, 24.5, 26.4, 24.2, 28, 26.9,
  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];

// @TODO: Complete the Following Steps

// Create the Trace
var trace = {
  x:["Brown", "Brown", "Brown", "Brown", "Brown",
  "Brown", "Brown", "Brown", "Green", "Green",
  "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Blue", "Blue", "Blue"],
  y:[26.8, 27.9, 23.7, 25, 26.3, 24.8,
    25.7, 24.5, 26.4, 24.2, 28, 26.9,
    29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3],
  type:'bar'
};

// Create the data array for our plot
var data = [trace]

// Define our plot layout
var layout = {
  title: "Bar Chart",
  
};


// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("plotArea", [trace]);