//This is my JS for the luxury car practice

//"survey" is id of the dropdown list in html
var mySurvey = document.getElementById("survey");

//use change for dropdown list instead of click
mySurvey.addEventListener("change", loadData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadData, false);

function loadData()
{
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    //console.log(manufacturerStored);


//XMLHttpRequest is the main object to establish communication between the server and browser- create an instanc eof it called myRequest
var myRequest = new XMLHttpRequest;

//The open method recieves three parameters the first one is either GET or POST. The second one is the link to the JSON file (conains data about all of the cars) can be from GitHub (raw data link- can edit JSON file then just need to update link- or edit on github). 
myRequest.open("GET", "https://raw.githubusercontent.com/Veeran-01/luxurycars.json/master/expensiveLuxuryCars.json", true);

//We need a condition to check if the data has arrived
    myRequest.onload = function() {
        
        if(myRequest.readyState == 4 && myRequest.status == 200)
        {
            //JSON.parse METHOD turnS JSON format of the data into javascript
            var myData = JSON.parse(myRequest.responseText);
            //console.log(myData);
            
            //i.e they don't select any car from the dropdown list
            if(manufacturerStored === "")
            {
                function clearAll()
                {
                    var hideText = document.getElementsByClassName("data");
                    for(var i=0; i < hideText.length; i++)
                        {
                            hideText[i].innerHTML= "";
                        }
                }
                
                clearAll();
                
                //need to select a car first then get message
                document.getElementById("messageAlert").innerHTML = "You must choose a car manufacurer to load data";
            }
            else
            {
                //need to point to data in JSON file i.e .manufacurer is a member of  manufacturerStored
                document.getElementById("manufacturerC").innerHTML =myData.data[manufacturerStored].manufacturer;
                
                document.getElementById("modelC").innerHTML =myData.data[manufacturerStored].model;
                
                document.getElementById("priceC").innerHTML ="£" + myData.data[manufacturerStored].price;
                
                document.getElementById("descriptionC").innerHTML =myData.data[manufacturerStored].description;
                
                document.getElementById("videoC").innerHTML ='<iframe width= "auto" height="auto" src= "  '+myData.data[manufacturerStored].video+' " framework="0" allowfullscreen></iframe>';
                
                //rating of overall is a member of first object[0] in quality array
                document.getElementById("overallC").innerHTML =myData.data[manufacturerStored].quality[0].rating;
                
                document.getElementById("mechanicalC").innerHTML =myData.data[manufacturerStored].quality[1].rating;
                
                document.getElementById("powertrainC").innerHTML =myData.data[manufacturerStored].quality[2].rating;
                
                document.getElementById("bodyC").innerHTML =myData.data[manufacturerStored].quality[3].rating;
                
                document.getElementById("interiorC").innerHTML =myData.data[manufacturerStored].quality[4].rating;
                
                document.getElementById("accessoriesC").innerHTML =myData.data[manufacturerStored].quality[5].rating;
                
                document.getElementById("imgC").innerHTML ='<img width= "auto" height="auto" src= "  '+myData.data[manufacturerStored].img+' "alt="This is a car image">';
                
                //so you don't get message that tells you to chose a car when you've chose a car
                document.getElementById("messageAlert").innerHTML = "";
               
                //We need to call and set a variable for our chart  types
                var chartType = document.getElementById("survey").value;
                
                console.log(chartType);
                
                
                
                //manufacturerStored is a number of the choice from dropdown list
                //console.log(manufacturerStored);
                
                //This is my canvas js to display the ratings- copied and pasted from canvasjs.com
                
                //window.onload = function () 
                //{
	    var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme1",//theme2
            
        backgroundColor: "transparent", 
		/*title:{
			text: "Quality survey scores"              
		},*/
            
        dataPointMaxWidth: 20, 
            axisX:{
                labelFontColor:"white",
                gridColor:"white",
                lineColor:"white"
            },
            
            axisY:{
                labelFontColor:"white",
                gridColor:"white",
                gridThickness: 1,
                lineColor:"white"
            },
		animationEnabled: true,   // change to false
		data: [              
		{
            //The code below is for the doughnut labels because they don't have x and y points
            
            indexLabelFontColor: "white",
			// Change type to "bar", "doughnut", "area", "spline", "pie",etc.
			type: chartType,
			dataPoints: [
				{ label: "Body",  y: myData.data[manufacturerStored].quality[3].rating },
				{ label: "Accessories", y: myData.data[manufacturerStored].quality[5].rating  },
				{ label: "Interior", y: myData.data[manufacturerStored].quality[4].rating  },
				{ label: "Powertrain",  y: myData.data[manufacturerStored].quality[2].rating  },
				{ label: "Mechanical",  y: myData.data[manufacturerStored].quality[1].rating  },
                { label: "Overall",  y: myData.data[manufacturerStored].quality[0].rating  }
			]
		}
		]
	});
	chart.render();
//}
            }
        }
    }

    //If connection lost need to give an error message
    myRequest.onerror = function(){
        document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server";
    }
    
myRequest.send();
    
//console.log(myRequest);

}


























