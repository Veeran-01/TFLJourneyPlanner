//This is my Javascript for the TFL Journey Planner

//My variables
var departurePostcode; // = document.getElementById("depPC").value;
var arrivalPostcode; //= document.getElementById("arrPC").value;
var choiceOption;// This is to use for my switch condition
//End of variables

//User experience 
document.getElementById("depPC").focus();
//document.getElementById("arrPC").focus();



//Event listener for submit
var submitButton = document.getElementById("mySubmit");
submitButton.addEventListener("click", findRoute, false);

//Event listener for switch
var switchButton = document.getElementById("mySwitch");
switchButton.addEventListener("click", switchPostcodes, false);


//Functions for submit and switch

function findRoute(){
    //alert("submit");
    
    if( departurePostcode =="" || arrivalPostcode=="")
        {
            if(departurePostcode=="" && arrivalPostcode=="")
                {
                    document.getElementById("messageD").innerHTML= "You need to enter a departure postcode";
                    
                    document.getElementById("messageA").innerHTML= "You need to enter a arrival postcode";
                }
            else if(departurePostcode=="")
                {
                    document.getElementById("messageD").innerHTML= "You need to enter a departure postcode";
                }
            else
                {
                    document.getElementById("messageA").innerHTML= "You need to enter a arrival postcode";
                }
        }
    else
        {
            var myRequest = new XMLHttpRequest;
            
            myRequest.open("GET","https://api.tfl.gov.uk/journey/journeyresults/"+departurePostcode+"/to/"+arrivalPostcode, true);
            
            myRequest.onload = function(){
                if(myRequest.readyState == 4 && myRequest.status==200)
                    {
                        var myData = JSON.parse(myRequest.responseText);
                        
                        switch(choiceOption){
                                case(1):
                                //JS notation to get the data
                                break;
                                
                                case(2):
                                
                                break;
                                
                                default:
                                
                                break;
                        }
                    }
            }
            
            myRequest.send();
            
            
        }
    
    
           /* if((departurePostcode =="") && (arrivalPostcode !=""))
                {
                document.getElementById("messageD").innerHTML= "You need to enter a departure postcode";
                }
            else if(departurePostcode=="" && arrivalPostcode="")
                {
                    
                }
            else
                {
                document.getElementById("messageA").innerHTML= "You need to enter a arrival postcode";
                }*/
            
        
    
}
   


function switchPostcodes(){
    alert("Switch");
    
    
}

//If loop checking user input





//Takes cursor to input box

document.getElementById("googleMap").style.display="none";

