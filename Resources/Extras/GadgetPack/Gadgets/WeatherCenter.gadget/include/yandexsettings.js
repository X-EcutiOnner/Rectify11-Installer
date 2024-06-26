//	Javascript file for the WeatherCenter gadget
//	(c) 2009
//	WeatherCenter Gadget Team
//	Development: hadj 
//	Graphics: Tex
//	Testing: Digital	
////////////////////////////////////////////////////////////////////////




function YandexLoadSettings()
{
	
	loccode.value = System.Gadget.Settings.read("YAlastSearch");
	if ((loccode.value).search(/\d/) > -1) loccode.value = "Москва, Россия";
	loccode_id.value = System.Gadget.Settings.read("YAlocationCode");

	updateInt[0].disabled = true;
	updateInt[1].checked = "1";
	updateIntValue.value = System.Gadget.Settings.read("YAupdateInterval");
	
		
	YAUnits_makeUnitSelector("ShowParametersOption1");
	YAUnits_makeUnitSelector("ShowParametersOption2");
	YAUnits_makeUnitSelector("ShowParametersOption3");
	YAUnits_makeUnitSelector("ShowParametersOption4");
	
}

/////////////////



function YAUnits_makeUnitSelector(ShowParametersOption)
{
var unitsArray = [
		{"name":lng_Stats["nothing"], "value":"nothing"},
		{"name":lng_Stats["wind"], "value":"wind"},
		{"name":lng_Stats["humidity"], "value":"humidity"},
		{"name":lng_Stats["pressure"], "value":"pressure"},
		{"name":lng_Stats["sunrise"], "value":"sunrise"},
		{"name":lng_Stats["sunset"], "value":"sunset"},
		{"name":lng_Stats["latitude"], "value":"latitude"},
		{"name":lng_Stats["longitude"], "value":"longitude"},
		{"name":lng_Stats["watertemp"], "value":"watertemp"}]


for (i = 0; i < unitsArray.length; i++)
	{
		var sel = document.getElementById(ShowParametersOption);
		var opt = document.createElement("option");
		opt.value = unitsArray[i].value;
		opt.innerHTML = unitsArray[i].name;
		if (unitsArray[i].value == System.Gadget.Settings.read("YA"+ShowParametersOption)) opt.selected = true; 
		sel.appendChild(opt);
	}
} 



/////////////////


function YandexSearchCityCode(LocCode)
{
	
	clearResults();

	var location = "http://pogoda.yandex.ru/static/cities.xml" + "?rnd=" + Math.random();

	var tmp = new ActiveXObject("Microsoft.XMLHTTP");
	tmp.open("GET", location, true);
	tmp.onreadystatechange=function()
	{
		if (tmp.readyState==4)
			{
				if (tmp.Status == 200) YandexParseCityResults(tmp.responseXML, LocCode);
				else {document.getElementById("loccode").value = lng_NoData; return;}
			}
	}
	tmp.Send(null);
}


//////////////////


function YandexParseCityResults(xmlData, LocCode)
{
	var countries = xmlData.getElementsByTagName('country');

	for (i = 0; i < countries.length; i++) {
		cities = countries[i].getElementsByTagName('city');
		for (n = 0; n < cities.length; n++) {
			if ((cities[n].firstChild.nodeValue).toLowerCase().search((LocCode).toLowerCase()) > -1) {
				var option = document.createElement("OPTION");
				option.value = cities[n].getAttribute('id');
				option.innerText = cities[n].firstChild.nodeValue + ", " + cities[n].getAttribute('country');
				results.appendChild(option);
			}
		}
	}
hide("load_indicator");	
}

/////////////////////


	