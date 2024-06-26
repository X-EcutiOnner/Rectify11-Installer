//	Javascript file for the WeatherCenter gadget
//	(c) 2009
//	WeatherCenter Gadget Team
//	Development: hadj 
//	Graphics: Tex
//	Testing: Digital	
////////////////////////////////////////////////////////////////////////


function parseForecastMSN(Xml)
{
	var parametrsArray = [{"name":"nothing", "capt":"", "span":""}]

	var locName = Xml.selectSingleNode("/weatherdata/weather/@weatherlocationname").value;
	setLocation(locName);

	var current = Xml.selectSingleNode("/weatherdata/weather/current/@skytext").value;;

	var timeupdate = Xml.selectSingleNode("/weatherdata/weather/current/@observationtime").value;				//time last update
	timeupdate = timeupdate.slice(0, timeupdate.lastIndexOf(":")) ;
	lasttimeupdate24full = TimeTo24Convert(timeupdate);
	if ((System.Gadget.Settings.read("showLastTimeUpdate")) != 1 || timeupdate == "N/A") TimeLastUpdate.innerText = "";
	else TimeLastUpdate.innerText = lasttimeupdate24full;
	


	var temp = Xml.selectSingleNode("/weatherdata/weather/current/@temperature").value;				//actual temperature
	if (System.Gadget.Settings.read("tunits") == "m") {temp = temp; var TemperatureUnits = "C";}
	if (System.Gadget.Settings.read("tunits") == "f") {temp = (temp*(9/5) + 32).toFixed(0); var TemperatureUnits = "F";}
	if (temp == 'N/A') TempSpan.innerText = lng_nodata;
	else TempSpan.innerText = temp + "°" + lng_Units[TemperatureUnits];



	var flik = Xml.selectSingleNode("/weatherdata/weather/current/@feelslike").value;				//feels like temperature
	if (System.Gadget.Settings.read("tunits") == "m") {flik = flik;}
	if (System.Gadget.Settings.read("tunits") == "f") {flik = (flik*(9/5) + 32).toFixed(0);}
	FlikCapt = lng_Stats["flik"];
	FlikSpan = flik + "°" + lng_Units[TemperatureUnits];
	if (flik == 'N/A' || flik == '') FlikSpan = lng_nodata;
	parametrsArray.push({"name":"flik", "capt":FlikCapt, "span":FlikSpan});


	var wind = Xml.selectSingleNode("/weatherdata/weather/current/@windspeed").value;
	if (wind == 'calm' || wind == '') wind = 0;
	if (System.Gadget.Settings.read("sunits") == "ms") {windSpeed = (wind*0.277777778).toFixed(0); var SpeedUnits = "m/s";}
	if (System.Gadget.Settings.read("sunits") == "km") {windSpeed = wind; var SpeedUnits = "km/h";}
	if (System.Gadget.Settings.read("sunits") == "mp") {windSpeed = (wind*0.621371192).toFixed(0); var SpeedUnits = "mph";}

	var windDirection = Xml.selectSingleNode("/weatherdata/weather/current/@winddisplay").value;
	windDirection = windDirection.slice(windDirection.lastIndexOf(" ") + 1, windDirection.length);
	var WindDirectionSpan = winddirection_Stats[windDirection];
	if (WindDirectionSpan == undefined) WindDirectionSpan = lng_nodata;

	WindCapt = lng_Stats["wind"] + "[" + WindDirectionSpan + "]";
	WindSpan = windSpeed + lng_Units[SpeedUnits];
	if (wind == 'N/A' || wind == 'calm' || wind == 'CALM' || wind == '') WindSpan = lng_nodata;
	parametrsArray.push({"name":"wind", "capt":WindCapt, "span":WindSpan});

	
	var humidity = Xml.selectSingleNode("/weatherdata/weather/current/@humidity").value;     
	HumidityCapt = lng_Stats["humidity"];
	HumiditySpan = humidity + "%";
	if (humidity == 'N/A') HumiditySpan = lng_nodata;
	parametrsArray.push({"name":"humidity", "capt":HumidityCapt, "span":HumiditySpan});


	var latitude_str = Xml.selectSingleNode("/weatherdata/weather/@lat").value;			//latitude
	latitude = (latitude_str*1).toFixed(2);
	LatitudeCapt = lng_Stats["latitude"];
	LatitudeSpan = latitude;
	if (latitude == 'N/A') LatitudeSpan = lng_nodata;
	parametrsArray.push({"name":"latitude", "capt":LatitudeCapt, "span":LatitudeSpan});


	var longitude_str = Xml.selectSingleNode("/weatherdata/weather/@long").value;			//longitude
	longitude = (longitude_str*1).toFixed(2);
	LongitudeCapt = lng_Stats["longitude"];
	LongitudeSpan = longitude;
	if (longitude == 'N/A') LongitudeSpan = lng_nodata;
	parametrsArray.push({"name":"longitude", "capt":LongitudeCapt, "span":LongitudeSpan});


	
	var timezone = Xml.selectSingleNode("/weatherdata/weather/@timezone").value;


	var currentTime = new Date();
	utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
	nd = new Date(utc + (3600000*timezone));
	time = nd.getHours() +":" + nd.getMinutes();


	var theSunRiseSunset = computeSunRiseSunSet(parseInt(latitude_str), parseInt(longitude_str), timezone);
	var sunriseTm = theSunRiseSunset.SunRise;
	var sunsetTm = theSunRiseSunset.SunSet;
	

	SunriseCapt = lng_Stats["sunrise"];
	SunriseSpan = sunriseTm;
	if (sunriseTm == 'N/A') SunriseSpan = lng_nodata;
	parametrsArray.push({"name":"sunrise", "capt":SunriseCapt, "span":SunriseSpan});
	
	SunsetCapt = lng_Stats["sunset"];
	SunsetSpan = sunsetTm;
	if (sunsetTm == 'N/A') SunsetSpan = lng_nodata;
	parametrsArray.push({"name":"sunset", "capt":SunsetCapt, "span":SunsetSpan});
	

	checkDayorNight(time, sunriseTm, sunsetTm, current);


	var precipitation = Xml.selectSingleNode("/weatherdata/weather/forecast/@precip").value;
	PrecipitationCapt = lng_Stats["precipitation"];
	PrecipitationSpan = precipitation + "%";
	if (precipitation == 'N/A') PrecipitationSpan = lng_nodata;
	parametrsArray.push({"name":"precipitation", "capt":PrecipitationCapt, "span":PrecipitationSpan});

	
	setOptionsSettings(parametrsArray);

	
	currentImg.src = "images/" + System.Gadget.Settings.read('Skin') + "/" + daytime + "/" + MSNGetCondImage(current);

	if (daytime == "Night" && (img == "undefined.png" || img == "mostsunny.png")) img = "clear.png";

	if (daytime == "Night" && (img == "partcloudy.png" || img == "cloudy.png" || img == "mostcloudy.png" || img == "clear.png")) {

	var moon_img = {
		New: "new.png",
		"Waxing Crescent": "waxing_crescent.png",
		"First Quarter": "first_quater.png",
		"Waxing Gibbous": "waxing_gibbous.png",
		Full: "full.png",
		"Waning Gibbous": "waning_gibbous.png",
		"Last Quarter": "last_quater.png",
		"Waning Crescent": "waning_crescent.png",
		Darkened: "new.png"
		};

		var moonphase = computePhaseOfMoon(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate());
		currentImgMoon.src = "images/" + System.Gadget.Settings.read('Skin') + "/Night/moon/" + moon_img[moonphase];
		if (img != "clear.png") {currentImg.style.display = "block";}
		else currentImg.style.display = "none";
	}
	else currentImgMoon.style.display = "none";

	
	
	if (lng_MSNStatus[current] != undefined) current = lng_MSNStatus[current];
		while (current.length > 19) {
	 		current = current.slice(0, current.lastIndexOf(" "));
			lastsymbol = current.substring(current.lastIndexOf(" ") + 1, current.length);
			if (lastsymbol.length == 1 || lastsymbol == 'and') current = current.slice(0, current.lastIndexOf(" "));
		}
	



	//alert module
	if (Xml.selectSingleNode("/weatherdata/weather/@alert").value != "" && (CondSpan.innerHTML).search(/<MARQUEE/i) == -1) {
		CondSpan.innerHTML = "<MARQUEE WIDTH='115' SCROLLDELAY='70' SCROLLAMOUNT='2'><font color='red'><b>" + Xml.selectSingleNode("/weatherdata/weather/@alert").value + "</b></font></MARQUEE>";
	}
	else CondSpan.innerText = current;
	

	MSNFillForecast(Xml.getElementsByTagName("./weather").item(0));

	
	redrawGadget();
	
		
	
}




////////////////////////




function MSNGetCondImage(condition)
{
	img="undefined.png";
	
	if (condition == 26 || condition == 27 || condition == 28)
		img="cloudy.png";

	if (condition == 35 || condition == 39 || condition == 45 || condition == 46)
		img="lightrain.png";

	if (condition == 19 || condition == 20 || condition == 21 || condition == 22)
		img="fog.png";

	if (condition == 29 || condition == 30 || condition == 33)
		img="partcloudy.png";

	if (condition == 5 || condition == 13 || condition == 14 || condition == 15 || condition == 16 || condition == 18 || condition == 25 || condition == 41 || condition == 42 || condition == 43)
		img="snow.png";

	if (condition == 1 || condition == 2 || condition == 3 || condition == 4 || condition == 37 || condition == 38 || condition == 47)
		img="thunderstorm.png";

	if (condition == 31 || condition == 32 || condition == 34 || condition == 36 || condition == 44)
		img="clear.png";

	if (condition == 23 || condition == 24)
		img="partcloudy.png";

	if (condition == 9 || condition == 10 || condition == 11 || condition == 12 || condition == 40)
		img="rain.png";

	if ((condition.search(/Cloudy/i) > -1) || (condition.search(/Clouds/i) > -1))
		img="cloudy.png";

	if (condition.search(/Rain/i) > -1)
		img="rain.png";

	if ((condition.search(/Sunny/i) > -1) || (condition.search(/Clear/i) > -1))
		img="clear.png";

	if ((condition.search(/Mostly Sunny/i) > -1 || condition.search(/Partly Sunny/i) > -1))
		img="mostsunny.png";

	if (condition == 6 || condition == 7 || condition == 8 || condition == 17)
		img="rain.png";

	if (condition.search(/Dust/i) > -1)
		img="dusthaze.png";

	if ((condition.search(/Fog/i) > -1) || (condition.search(/Mist/i) > -1) || (condition.search(/Haze/i) > -1)) 
		img="fog.png";

	if (condition.search(/Smoke/i) > -1)
		img="smoke.png";

	if (condition.search(/Snow/i) > -1)
		img="snow.png";

	if ((condition.search(/Thunder/i) > -1) || (condition.search(/T-Storm/i) > -1))
		img="thunderstorm.png";

	if ((condition.search(/Partly Cloudy/i) > -1) || (condition.search(/Fair/i) > -1))
		img="partcloudy.png";

	if (condition.search(/Mostly Cloudy/i) > -1)
		img="mostcloudy.png";

	if ((condition.search(/Light Rain/i) > -1) || (condition.search(/Shower/i) > -1) || (condition.search(/Drizzle/i) > -1) || (condition.search(/Sprinkles/i) > -1))
		img="lightrain.png";

	if (((condition.search(/Snow/i) > -1) || ((condition.search(/Rain/i) > -1)) && (condition.search(/Shower/i) > -1)))
		img="rainandsnow.png";
	
	if ((condition.search(/Snow/i) > -1) && (condition.search(/Light/i) > -1) || (condition.search(/Flurries/i) > -1))
		img="lightsnow.png";

	return img;
}




///////////////////////




function MSNFillForecast(XmlData)
{
	
var lng_Month_Number = {
	"01": "January",
	"02": "February",
	"03": "March",
	"04": "April",
	"05": "May",
	"06": "June",
	"07": "July",
	"08": "August",
	"09": "September",
	"10": "October",
	"11": "November",
	"12": "December"
};

	var a = 1;
	totalFCDays = 0;
	
	var ForecastArray = XmlData.getElementsByTagName('forecast');

	
	for (var i = 0; i < ForecastArray.length; i++) {

	if ((System.Gadget.Settings.read("showForecastToday")) != 1 || DateToMinutesConvert(time) >= 900)
			{
				if (i == 0) i++;
				if (System.Gadget.Settings.read("showDayNameForecast") == 0) dayName1.innerText = lng_Tomorrow;
			}
 		else
			{
				if (System.Gadget.Settings.read("showDayNameForecast") == 0) {
					dayName1.innerText = lng_Today;
					dayName2.innerText = lng_Tomorrow;
				}
			}

		var ForecastDay = ForecastArray[i];
		
		var high = ForecastDay.getAttribute('high');
		var low = ForecastDay.getAttribute("low");
		if (System.Gadget.Settings.read("tunits") == "f") {high = (high*(9/5) + 32).toFixed(0); low = (low*(9/5) + 32).toFixed(0);}
		
		if (high != "N/A")
			high+="°";
		else	high = "??°";
		if (low != "N/A")
			low +="°";
		else	low = "??°";

		var day = ForecastDay.getAttribute("day");
		day = lng_DayOfWeek[day];

		var date_str = ForecastDay.getAttribute("date");
		var date = date_str.slice(date_str.lastIndexOf("-") + 1, date_str.length);
		var month = date_str.slice(date_str.indexOf("-") + 1, date_str.lastIndexOf("-"));
		date = date + " " + lng_Month_full[lng_Month_Number[month]];

		var precip = ForecastDay.getAttribute("precip");
		
		var condition = ForecastDay.getAttribute("skytextday");
		if (condition == 'N/A' && document.getElementById("dayImg1").src) return;
						
		document.getElementById("dayName" + a).innerText = day; 
		document.getElementById("date" + a).innerText = date; 
		document.getElementById("dayHi" + a).innerText = high;
		document.getElementById("separator"  + a).innerText = "/";
		document.getElementById("dayLow" + a).innerText = low; 
		document.getElementById("dayImg" + a).src = "images/" + System.Gadget.Settings.read('Skin') + "/Forecast/" + MSNGetCondImage(ForecastDay.getAttribute("skycodeday"));
		if (lng_MSNStatus[condition] != undefined) condition = lng_MSNStatus[condition];
		if (System.Gadget.Settings.read('showFlyoutForecast') == "1") document.getElementById("dayImg" + a).alt = condition + ", " + lng_Stats['precipitation'] + " " + precip + "%";
		a++;
		totalFCDays++;
	}

}







 function computeSunRiseSunSet(Latitude, Longitude, TimeZone)
  {
  	var curTime = new Date();

    // Variable names used: B5, C, C2, C3, CD, D, DR, H, HR, HS, L0, L5, M, MR, MS, N, PI, R1, RD, S1, SC, SD, str
    var retVal = new Object();
    var PI=Math.PI;
    var DR=PI/180;
    var RD=1/DR;
    var B5=Latitude;
    var L5=Longitude;
    var H =-1 * (curTime.getTimezoneOffset() / 60 * -1); // Local timezone
    // Overriding TimeZone to standardize on UTC
    // H = 0;
    var M =curTime.getMonth()+1;
    var D =curTime.getDate();
    B5=DR*B5;
    var N=parseInt(275*M/9)-2*parseInt((M+9)/12)+D-30;
    var L0=4.8771+.0172*(N+.5-L5/360);
    var C=.03342*Math.sin(L0+1.345);
    var C2=RD*(Math.atan(Math.tan(L0+C)) - Math.atan(.9175*Math.tan(L0+C))-C);
    var SD=.3978*Math.sin(L0+C);
    var CD=Math.sqrt(1-SD*SD);
    var SC=(SD * Math.sin(B5) + .0145) / (Math.cos(B5) * CD);

    if (Math.abs(SC)<=1)
    {
	var C3=RD*Math.atan(SC/Math.sqrt(1-SC*SC));
	var R1=6-H-(L5+C2+C3)/15;
	var HR=parseInt(R1);
	var MR=parseInt((R1-HR)*60);
	retVal.SunRise1 = parseTime(HR + ":" + MR);
	var TargetTimezoneOffset = (TimeZone * 60 * 60 * 1000) + (retVal.SunRise1.getTimezoneOffset() * 60 * 1000);
	var transformedSunRise = new Date(retVal.SunRise1.getTime() + TargetTimezoneOffset);
	HR = transformedSunRise.getHours() + "";
	if (HR.length == 1) HR = "0" + HR;
	MR = transformedSunRise.getMinutes() + "";
	if (MR.length == 1) MR = "0" + MR;
	var SunRise = HR +":" + MR;
	
	var S1=18-H-(L5+C2-C3)/15;
	var HS=parseInt(S1);
	var MS=parseInt((S1-HS)*60);
	retVal.SunSet = parseTime(HS + ":" + MS);
      	var transformedSunSet = new Date(retVal.SunSet.getTime() + TargetTimezoneOffset);
	HS = transformedSunSet.getHours() + "";
	if (HS.length == 1) HS = "0" + HS;
	MS = transformedSunSet.getMinutes() + "";
	if (MS.length == 1) MS = "0" + MS;
      	var SunSet = HS +":" + MS;
	
    }
    else
    {
	var SunRise = "5:30";
	var SunSet = "18:30";
    }
    retVal.SunRise = SunRise;
    retVal.SunSet  = SunSet;
    return retVal;
  }




function parseTime(aTime)
{
    var aDateTimeObject = 'none';
    if (aTime!==undefined && aTime.length)
    {
      aDateTimeObject = GMTTime();
      try
      {
        var theHour    = parseInt(aTime.split(':')[0]);
        var theMinutes = parseInt(aTime.split(':')[1]);
        aDateTimeObject.setHours(theHour);
        aDateTimeObject.setMinutes(theMinutes);
      }
      catch (ex)
      {
      }
    }
    return aDateTimeObject;
}



function GMTTime()
{
    var aDate = new Date();
    var aDateAdjustedToGMTInMS = aDate.getTime() + (aDate.getTimezoneOffset() * 60 * 1000);
    return ( new Date( aDateAdjustedToGMTInMS ) );
}



function calcTime(city, offset) {

    // create Date object for current location
    d = new Date();
   
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
   
    // return time as a string
    return "The local time in " + city + " is " + nd.toLocaleString();

}


