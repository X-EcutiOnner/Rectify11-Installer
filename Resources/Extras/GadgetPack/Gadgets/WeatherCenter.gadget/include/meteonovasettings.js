//	Javascript file for the WeatherCenter gadget
//	(c) 2009
//	WeatherCenter Gadget Team
//	Development: hadj 
//	Graphics: Tex
//	Testing: Digital	
////////////////////////////////////////////////////////////////////////




function MeteonovaLoadSettings()
{
	
	loccode.value = System.Gadget.Settings.read("METEONOVAlastSearch");
	if ((loccode.value).search(/\d/) > -1) loccode.value = "Москва, Россия";
	loccode_id.value = System.Gadget.Settings.read("METEONOVAlocationCode");

	updateInt[0].disabled = true;
	updateInt[1].checked = "1";
	updateIntValue.value = System.Gadget.Settings.read("METEONOVAupdateInterval");
	
		
	MeteonovaUnits_makeUnitSelector("ShowParametersOption1");
	MeteonovaUnits_makeUnitSelector("ShowParametersOption2");
	MeteonovaUnits_makeUnitSelector("ShowParametersOption3");
	MeteonovaUnits_makeUnitSelector("ShowParametersOption4");
	
}

/////////////////



function MeteonovaUnits_makeUnitSelector(ShowParametersOption)
{
var unitsArray = [
		{"name":lng_Stats["nothing"], "value":"nothing"},
		{"name":lng_Stats["flik"], "value":"flik"},
		{"name":lng_Stats["wind"], "value":"wind"},
		{"name":lng_Stats["humidity"], "value":"humidity"},
		{"name":lng_Stats["pressure"], "value":"pressure"},
		{"name":lng_Stats["sunrise"], "value":"sunrise"},
		{"name":lng_Stats["sunset"], "value":"sunset"},
		{"name":lng_Stats["latitude"], "value":"latitude"},
		{"name":lng_Stats["longitude"], "value":"longitude"}
		]


for (i = 0; i < unitsArray.length; i++)
	{
		var sel = document.getElementById(ShowParametersOption);
		var opt = document.createElement("option");
		opt.value = unitsArray[i].value;
		opt.innerHTML = unitsArray[i].name;
		if (unitsArray[i].value == System.Gadget.Settings.read("METEONOVA"+ShowParametersOption)) opt.selected = true; 
		sel.appendChild(opt);
	}
} 



/////////////////


function MeteonovaSearchCityCode(LocCode)
{
	
	clearResults();

	var location = "http://bar.gismeteo.ru/gmbartlist.xml?r=" + Math.random();

	var tmp = new ActiveXObject("Microsoft.XMLHTTP");
	tmp.open("GET", location, true);
	tmp.onreadystatechange=function()
	{
		if (tmp.readyState==4)
			{
				if (tmp.Status == 200) MeteonovaParseCityResults(tmp.responseXML, LocCode);
				else {document.getElementById("loccode").value = lng_NoData; return;}
			}
	}
	tmp.Send(null);
}


//////////////////


function MeteonovaParseCityResults(xmlData, LocCode)
{
	var cities = xmlData.getElementsByTagName('t');

	for (i = 0; i < cities.length; i++) {
		if ((cities[i].getAttribute('n')).toLowerCase().search((LocCode).toLowerCase()) > -1) {
		var option = document.createElement("OPTION");
		option.value = cities[i].getAttribute('i');
		if (navigator.systemLanguage == 'de-DE') {
			for (b = 0; b < CitiesGismeteoArray.length; b++) {
				if (CitiesGismeteoArray[b][1].search((cities[i].getAttribute('n'))) > -1)
					option.innerText = CitiesGismeteoArray[b][0] + ", " + lng_Countries[cities[i].getAttribute('c')];
			}
		}
		else option.innerText = cities[i].getAttribute('n') + ", " + cities[i].getAttribute('c');
		results.appendChild(option);
		}
		
	}

hide("load_indicator");	
}

/////////////////////
