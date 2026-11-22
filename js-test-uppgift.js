let k = "The respective values are :";
let arrayValues = [];
// k blir var en som har values is sig medans de blir inlagda i arrayen arrayValues
function AddValue() {
  var inputValue = document.getElementById('inputValue').value;
  if (inputValue.trim() !== "") {
    arrayValues.push(inputValue);
    UpdateArrayList();
  }
}
// när användaren clickar på knappen får den valuen från inputfielden. Om valuen inte är tom så fården istället lägger den till valuen i arrayValues och kallar på UpdateArrayList funcktionen.
function RemoveValue(index) {
  arrayValues.splice(index, 1);
  UpdateArrayList();
}
// tar bort element från arrayValues vid ett spesifict index och sedan kallar på UpdateArrayList functionen så att man får se den uppdaterad
function UpdateArrayList() {
  var arrayList = document.getElementById('arrayList');
  arrayList.innerHTML = "";

  for (let i = 0; i < arrayValues.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = arrayValues[i];

    var removeButton = document.createElement('button');
    removeButton.textContent = "Remove";

    removeButton.addEventListener('click', (function(index) {
      return function() {
        RemoveValue(index);
      };
    })(i));
    var updateButton = document.createElement('button');
    updateButton.textContent = "Update";

    updateButton.addEventListener('click', (function(index) {
      return function() {
        UpdateValue(index);
      };
    })(i));


    listItem.appendChild(updateButton);
    listItem.appendChild(removeButton);
    arrayList.appendChild(listItem);
  }
}
//la till den update / edit funktion så att du nu kan ändra namnen till det du vill
// har ibland för tillfellet ett fel när man clickar avbryt vid update popp uppen varför det händer vet jag inte helt riktigt. kolla om du får samma error
// uppdaterar display listan med values. den tar även bort den existerande listan så att man får en ny upptaderad veriosn av listan istället
//vilket den gör för varje value.
function CloseUpdateModal() {
  var updateModal = document.getElementById('updateModal');
  updateModal.style.display = 'none';
}


function UpdateValue(index) {
  var oldValue = arrayValues[index];
//sparar en gamal value innan man får upp poppupen
  var newValue = prompt("Enter the updated value:", arrayValues[index]);
 
  //kollar values
  if (newValue !== null && newValue !== "") {
    arrayValues[index] = newValue;
  } else {
   
    console.log("Update canceled or empty input; using the old value");
    arrayValues[index] = oldValue;
  }
// vad jag har ändrat här är att istället för att ge "null" som en value vilket gör så att skiten krachar så har jag bytt ut det så att den istellet bara ger den gamla valuen som var innan man tryckte cancel. Detta har gjätt mig huvudvärk att lista ut varför vet jag inte men tog mig ett tag att lista ut. ps vart lite sur ursäkta språket
  UpdateArrayList();
}

function Geeks() {
  var input = document.getElementsByName('array[]');

  for (var i = 0; i < arrayValues.length; i++) {
    var value = arrayValues[i];
    k = k + "array[" + i + "].value= " + value + " ";
  }

  document.getElementById("par").innerHTML = k;
}
