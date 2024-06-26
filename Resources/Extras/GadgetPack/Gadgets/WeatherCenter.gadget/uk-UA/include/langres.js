////////////////////////////////////////////////////////////////////////////////
//
// LOCALIZABLE VARIABLES
//
////////////////////////////////////////////////////////////////////////////////
var L_SHOWMORE_TEXT             = "Більше днів у прогнозі";
var L_SHOWLESS_TEXT             = "Менше днів у прогнозі";
var L_FULLMODE_TEXT             = "Показувати дод. інформацію";
var L_MINIMODE_TEXT             = "Не показувати дод. інформацію";
var L_REFRESH_TEXT             	= "Оновити прогноз";

var Wlng_defLastSearch = "Kiev, Ukraine";
var Wlng_defLocationCode = "UPXX0016";

var Alng_defLastSearch = "Kiev, Ukraine";
var Alng_defLocationCode = "EUR|UA|UP009|KIEV|";

WUlng_defLastSearch = "Kiev, Ukraine";
WUlng_defLocationCode = "Kiev, Ukraine";

MSNlng_defLastSearch = "Kiev, Ukraine";
MSNlng_defLocationCode = "wc:UPXX0016";

WElng_defLastSearch = "Kiev, Ukraine";
WElng_defLocationCode = "UAXX0001";

WBlng_defLastSearch = "Kiev, Ukraine";
WBlng_defLocationCode = "76413|UKKK";

YAlng_defLastSearch = "Киев, Украина";
YAlng_defLocationCode = "33345";

GISlng_defLastSearch = "Киев, Украина";
GISlng_defLocationCode = "33345";

var periodsArray = new Array("","Вечір","Протягом ночі","Ранок","Після обіду","Вдень");
var periodsArrayGismeteo = new Array("Ніч","Ранок","Вдень","Вечір");
var imghintArrayGismeteo = new Array('Ясно','Ясно','Хмарно','Хмарно','Змінна хмарність, дощ','Хмарно, дощ','Змінна хмарність, сніг','Хмарно, сніг','Гроза');

var lng_Updating = "оновлення";
var lng_NoData = "нема даних";
var lng_Today = "Сьогодні";
var lng_Tomorrow = "Завтра";
var lng_Updating_Time_Text = "наступне оновлення в";

var lng_WeatherStatus = {
	"AM Light Rain": "Слабкий дощ",
	"Clear": "Ясно",
	"Cloudy": "Хмарно",
	"Cloudy and Windy": "Хмарно і вітряно",
	"Drifting Snow": "Поземка",
	"Drizzle": "Мжичка",
	"Drizzling Rain": "Мряка",
	"Dust": "Курява",
	"Fair and Windy": "Ясно й вітряно",
	"Fair": "Ясно",
	"Fog": "Туман",
	"Freezing Drizzle": "Паморозь",
	"Hail": "Град",
	"Haze": "Димка",
	"Heavy Rain": "Сильний дощ",
	"Heavy Snow Shower": "Сильний снігопад",
	"Heavy Snow": "Сильний сніг",
	"Ice Crystals": "Іній",
	"Light Drizzle": "Легка мжичка",
	"Light Drizzle and Windy": "Легка мжичка",
	"Light Rain Shower": "Короткочасні ливні",
	"Light Rain with Thunder": "Слабкий дощ з грозою",
	"Light Rain": "Слабкий дощ",
	"Light Freezing Rain": "Крижаний дощ",
	"Light Snow Grains": "Слабка крупа",
	"Light Snow Shower": "Невеликий снігопад",
	"Light Snow": "Легкий сніг",
	"Mist": "Слабкий туман",
	"Mostly Cloudy": "Змінна хмарність",
	"Mostly Sunny": "Невелика хмарність",
	"Partial Fog": "Місцями туман",
	"Partly Cloudy": "Змінна хмарність",
	"Partly Cloudy and Windy": "Змінна хмарність",
	"Rain and Fog": "Сніг та туман",
	"Rain and Snow": "Сніг з дощем",
	"Rain Shower": "Ливень",
	"Rain": "Дощ",
	"Scattered Showers": "Місцями ливні",
	"Scattered T-Storms": "Місцями грози",
	"Shallow Fog": "Низький туман",
	"Showers in the Vicinity": "Короткочасні дощі",
	"Showers Late": "Затяжні ливні",
	"Showers": "Ливні",
	"Smoke": "Дим",
	"Snow Shower": "Снігопад",
	"Snow": "Сніг",
	"Snow and Sleet": "Мокрий сніг",
	"Snow and Windy": "Сніг і вітер",
	"Sunny": "Сонячно",
	"T-Storm": "Гроза",
	"Thunder in the Vicinity": "Гроза в околиці",
	"Thunder": "Гроза",
	"Torrential Rain": "Проливний дощ",
	"Widespread Dust": "Пилова буря"
};

var lng_AccuWeatherStatus = {
	"A Flurry": "Шквал",
	"Clear": "Ясно",
	"Sunny": "Ясно",
	"Mostly Clear": "Ясно",
	"Cloudy": "Хмарно",
	"Drifting Snow": "Поземка",
	"Drizzle": "Мжичка",
	"Drizzling Rain": "Мряка",
	"Dust": "Курява",
	"Fair and Windy": "Ясно й вітряно",
	"Fair": "Ясно",
	"Fog": "Туман",
	"Freezing Rain": "Льодяний дощ",
	"Dense Fog": "Густий туман",
	"Dense fog": "Густий туман",
	"Foggy": "Туманно",
	"Ice": "Ожеледиця",
	"Hail": "Град",
	"Haze": "Димка",
	"Hazy Sunshine": "Димка",
	"Heavy Rain": "Сильний дощ",
	"Heavy Snow Shower": "Сильний снігопад",
	"Heavy Snow": "Сильний сніг",
	"Ice Crystals": "Іній",
	"Light Drizzle": "Легка мжичка",
	"Drizzle": "Легка мжичка",
	"Light Rain Shower": "Короткочасні ливні",
	"Light Rain with Thunder": "Слабкий дощ з грозою",
	"Lgt.rainshower": "Слабкий дощ",
	"Light Rain": "Слабкий дощ",
	"Light Freezing Rain": "Крижаний дощ",
	"Light Fog": "Невеликий туман",
	"Light Snow Grains": "Слабка крупа",
	"Light Snow Shower": "Невеликий снігопад",
	"Light Snow": "Легкий сніг",
	"Lgt.snow/fog": "Легкий сніг",
	"Lgt.snowshower": "Невеликий снігопад",
	"Mist": "Слабкий туман",
	"Mostly Cloudy": "Змінна хмарність",
	"Mostly Sunny": "Невелика хмарність",
	"Overcast": "Хмарно",
	"Partial Fog": "Місцями туман",
	"Partly Clear": "Прояснення",
	"Partly Cloudy": "Змінна хмарність",
	"Partly Sunny": "Прояснення",
	"Rain and Snow": "Сніг з дощем",
	"Rain Shower": "Ливень",
	"Rain": "Дощ",
	"Scattered Showers": "Місцями ливні",
	"Scattered T-Storms": "Місцями грози",
	"Shallow Fog": "Низький туман",
	"Showers in the Vicinity": "Короткочасні дощі",
	"Showers Late": "Затяжні ливні",
	"Showers": "Ливні",
	"Sleet": "Мокрий сніг",
	"Smoke": "Дим",
	"Snow Shower": "Снігопад",
	"Snowshower": "Снігопад",
	"Hvy.snowshower": "Сильний снігопад",
	"Snow": "Сніг",
	"Blowing Snow": "Заметіль",
	"Sunny": "Сонячно",
	"T-Storm": "Гроза",
	"Thunder in the Vicinity": "Гроза в околиці",
	"Thunder": "Гроза",
	"Thunder/rain": "Гроза",
	"Torrential Rain": "Проливний дощ",
	"Widespread Dust": "Пилова буря"
};



var lng_WundergroundStatus = {
	"am light rain": "Слабкий дощ",
	"clear": "Ясно",
	"cloudy": "Хмарно",
	"scattered Clouds": "Окремі хмари",
	"drifting Snow": "Поземка",
	"drizzle": "Мжичка",
	"drizzle fog": "Моросящій туман",
	"drizzling rain": "Мряка",
	"dust": "Курява",
	"drizzle fog": "Моросящій туман",
	"fair and windy": "Ясно й вітряно",
	"fair": "Ясно",
	"fog": "Туман",
	"freezing drizzle mist": "Туманна паморозь",
	"freezing fog": "Крижаний туман",
	"hail": "Град",
	"haze": "Димка",
	"heavy rain": "Сильний дощ",
	"heavy snow shower": "Сильний снігопад",
	"heavy snow": "Сильний сніг",
	"ice crystals": "Іній",
	"light drizzle": "Легка мжичка",
	"light rain shower": "Короткочасні ливні",
	"light showers rain": "Короткочасні ливні",
	"light rain with thunder": "Слабкий дощ з грозою",
	"light rain": "Слабкий дощ",
	"light freezing rain": "Крижаний дощ",
	"light snow grains": "Слабка крупа",
	"light snow shower": "Невеликий снігопад",
	"light snow": "Легкий сніг",
	"light snow low": "Снігові замети",
	"light snow mist": "Легкий сніг",
	"light showers snow": "Невеликий снігопад",
	"light blowing snow": "Невелика хуртовина",
	"light snow blowing snow": "Невелика хуртовина",
	"low drifting snow": "Поземка",
	"mist": "Слабкий туман",
	"mostly Cloudy": "Змінна хмарність",
	"overcast": "Хмарно",
	"mostly sunny": "Невелика хмарність",
	"partial fog": "Місцями туман",
	"partly cloudy": "Змінна хмарність",
	"partly cloudy and windy": "Змінна хмарність",
	"rain and snow": "Сніг з дощем",
	"rain shower": "Ливень",
	"rain": "Дощ",
	"scattered showers": "Місцями ливні",
	"scattered T-Storms": "Місцями грози",
	"shallow fog": "Низький туман",
	"showers in the vicinity": "Короткочасні дощі",
	"showers late": "Затяжні ливні",
	"showers": "Короткочасні дощі",
	"showers rain": "Ливні",
	"smoke": "Дим",
	"snow shower": "Снігопад",
	"showers snow": "Снігопад",
	"snow": "Сніг",
	"sunny": "Сонячно",
	"t-storm": "Гроза",
	"thunder in the vicinity": "Гроза в околиці",
	"thunder": "Гроза",
	"torrential rain": "Проливний дощ",
	"widespread dust": "Пилова буря"
};



var lng_MSNStatus = {
	"AM Light Rain": "Слабкий дощ",
	"Clear": "Ясно",
	"Cloudy": "Хмарно",
	"Cloudy and Windy": "Хмарно і вітряно",
	"Drifting Snow": "Поземка",
	"Drizzle": "Мжичка",
	"Drizzling Rain": "Мряка",
	"Dust": "Курява",
	"Fair and Windy": "Ясно й вітряно",
	"Fair": "Ясно",
	"Flurries": "Вихори",
	"Fog": "Туман",
	"Freezing Drizzle": "Паморозь",
	"Hail": "Град",
	"Haze": "Димка",
	"Heavy Rain": "Сильний дощ",
	"Heavy Snow Shower": "Сильний снігопад",
	"Heavy Snow": "Сильний сніг",
	"Ice Crystals": "Іній",
	"Light Drizzle": "Легка мжичка",
	"Light Rain Shower": "Короткочасні ливні",
	"Light Rain with Thunder": "Слабкий дощ з грозою",
	"Light Rain": "Слабкий дощ",
	"Light Freezing Rain": "Крижаний дощ",
	"Light Snow Grains": "Слабка крупа",
	"Light Snow Shower": "Невеликий снігопад",
	"Light Snow": "Легкий сніг",
	"Mist": "Слабкий туман",
	"Mostly Cloudy": "Змінна хмарність",
	"Mostly Sunny": "Невелика хмарність",
	"Partial Fog": "Місцями туман",
	"Partly Cloudy": "Змінна хмарність",
	"Partly Cloudy and Windy": "Змінна хмарність",
	"Rain and Snow": "Сніг з дощем",
	"Rain Shower": "Ливень",
	"Rain": "Дощ",
	"Scattered Showers": "Місцями ливні",
	"Scattered T-Storms": "Місцями грози",
	"Shallow Fog": "Низький туман",
	"Showers in the Vicinity": "Короткочасні дощі",
	"Showers Late": "Затяжні ливні",
	"Showers": "Ливні",
	"Smoke": "Дим",
	"Snow Shower": "Снігопад",
	"Snow Showers": "Снігопади",
	"Snow": "Сніг",
	"Snow and Sleet": "Мокрий сніг",
	"Snow and windy": "Сніг і вітер",
	"Sunny": "Сонячно",
	"T-Storm": "Гроза",
	"Thunder in the Vicinity": "Гроза в околиці",
	"Thunder": "Гроза",
	"Torrential Rain": "Проливний дощ",
	"Widespread Dust": "Пилова буря"
};


var lng_WeatherEyeStatus = {
	"A few clouds": "Ясно",
	"Blizzard": "Снежная буря",
	"Blowing Dust": "Пыльная буря",
	"Blowing Sand": "Песчаная буря",
	"Blowing Snow": "Поземка",
	"Clear": "Безоблачно",
	"Cloudy": "Облачно",
	"Drizzle": "Изморось",
	"Dust": "Пыльно",
	"Fair": "Малооблачно",
	"Flurries": "Снегопад",
	"Fog": "Туман",
	"Foggy with Thunder": "Туман и гром",
	"Freezing Drizzle": "Морозная изморось",
	"Freezing Rain": "Ледяной дождь",
	"Hail": "Град",
	"Haze": "Димка",
	"Hazy with Thunder": "Туман и гром",
	"Heavy Drizzle": "Сильная изморось",
	"Heavy Flurries": "Сильный снегопад",
	"Heavy Freezing Drizzle": "Морозная изморось",
	"Heavy Freezing Rain": "Ледяной дождь",
	"Heavy Hail": "Сильный град",
	"Heavy Ice Pellets": "Ледяная крупа",
	"Heavy Ice Pellet Showers": "Ледяная крупа",
	"Heavy Rain": "Сильные дожди",
	"Heavy Rain Showers": "Сильные ливни",
	"Heavy Snow": "Сильный снег",
	"Heavy Snow Grains": "Хлопья снега",
	"Heavy Thunderstorm": "Сильная гроза",
	"Heavy Thundershower": "Грозовой ливень",
	"Ice Сrystals": "Иней",
	"Ice Fog": "Ледяной туман",
	"Ice Pellets": "Ледяная крупа",
	"Ice Pellet Showers": "Ледяной дождь",
	"Light Drizzle": "Легкая изморось",
	"Light Freezing Drizzle": "Холодная изморось",
	"Light Freezing Rain": "Ледяной дождь",
	"Light Flurries": "Небольш. снегопад",
	"Light Hail": "Небольшой град",
	"Light Ice Pellets": "Ледяная крупа",
	"Light Ice Pellet Showers": "Ледяной дождь",
	"Light Rain": "Небольшой дождь",
	"Light Rain Showers": "Небольшие ливни",
	"Light Snow": "Небольшой снег",
	"Light Snow Grains": "Хлопья снега",
	"Light Snow Pellets": "Снежная крупа",
	"Light Thunderstorm": "Гроза",
	"Light Thundershower": "Грозовой ливень",
	"Overcast": "Пасмурно",
	"Partly Cloudy": "Перем. облачность",
	"Rain": "Дождь",
	"Rain and Snow mixed": "Снег с дождем",
	"Rain Showers": "Ливни",
	"Severe Thunder": "Мощный гром",
	"Sky Obscured": "Облачно",
	"Smoke": "Густой туман",
	"Snow": "Снег",
	"Snow Grains": "Хлопья снега",
	"Snow Pellets": "Снежная крупа",
	"Thunder": "Гром",
	"Thunderstorm": "Гроза",
	"Thundershower": "Грозовой ливень"
};


var lng_WeatherBugStatus = {
	"AM Light Rain": "Слабкий дощ",
	"Clear": "Ясно",
	"Cloudy": "Хмарно",
	"Cloudy and Windy": "Хмарно і вітряно",
	"Drifting Snow": "Поземка",
	"Drizzle": "Мжичка",
	"Drizzling Rain": "Мряка",
	"Dust": "Курява",
	"Fair and Windy": "Ясно й вітряно",
	"Fair": "Ясно",
	"Fog": "Туман",
	"Foggy": "Туман",
	"Freezing Drizzle": "Паморозь",
	"Hail": "Град",
	"Haze": "Димка",
	"Heavy Rain": "Сильний дощ",
	"Heavy Snow Shower": "Сильний снігопад",
	"Heavy Snow": "Сильний сніг",
	"Ice Crystals": "Іній",
	"Light Drizzle": "Легка мжичка",
	"Light Rain Shower": "Короткочасні ливні",
	"Light Rain with Thunder": "Слабкий дощ з грозою",
	"Light Rain": "Слабкий дощ",
	"Light Freezing Rain": "Крижаний дощ",
	"Light Snow Grains": "Слабка крупа",
	"Light Snow Shower": "Невеликий снігопад",
	"Light Snow": "Легкий сніг",
	"Mist": "Слабкий туман",
	"Mostly Cloudy": "Змінна хмарність",
	"Mostly Sunny": "Невелика хмарність",
	"Partial Fog": "Місцями туман",
	"Partly Cloudy": "Змінна хмарність",
	"Partly Cloudy and Windy": "Змінна хмарність",
	"Rain and Fog": "Сніг та туман",
	"Rain and Snow": "Сніг з дощем",
	"Rain Shower": "Ливень",
	"Rain": "Дощ",
	"Scattered Showers": "Місцями ливні",
	"Scattered T-Storms": "Місцями грози",
	"Shallow Fog": "Низький туман",
	"Showers in the Vicinity": "Короткочасні дощі",
	"Showers Late": "Затяжні ливні",
	"Showers": "Ливні",
	"Smoke": "Дим",
	"Snow Shower": "Снігопад",
	"Snow": "Сніг",
	"Snow and Sleet": "Мокрий сніг",
	"Snow and Windy": "Сніг і вітер",
	"Sunny": "Сонячно",
	"T-Storm": "Гроза",
	"Thunder in the Vicinity": "Гроза в околиці",
	"Thunder": "Гроза",
	"Torrential Rain": "Проливний дощ",
	"Widespread Dust": "Пилова буря"
};


var lng_nodata = "Н/Д";



var lng_DayOfWeek = {
	Sunday: "Неділя",
	Monday: "Понеділок",
	Tuesday: "Вівторок",
	Wednesday: "Середа",
	Thursday: "Четвер",
	Friday: "П'ятниця",
	Saturday: "Субота"
};

var lng_Stats = {
	pressure: "тиск",
	pressuretrend: "тиск↑↓",
	wind: "вітер",
	gust: "пориви",
	visibility: "видимість",
	humidity: "вологість",
	flik: "ефект. t°",
	nothing: "пусто",
	sunrise: "сонце↑",
	sunset: "сонце↓",
	dewpoint: "точка роси",
	uvindex: "УФ-індекс",
	uvlevel: "УФ-рівень",
	moonterminator: "фаза Місяця",
	latitude: "широта",
	longitude: "довгота",
	moonrise: "Місяць↑",
	moonset: "Місяць↓",
	precipitation: "опади",
	thunderstorm: "гроза",
	airquality: "повiтря",
	watertemp: "t° води",
	localtime: "час"
};

var pressure_Stats = {
	falling: "<FONT COLOR='#4169E1'>зниж</FONT>",
	decreasing: "<FONT COLOR='#4169E1'>зниж</FONT>",
	rising: "<FONT COLOR='#FA8072'>зрост</FONT>",
	increasing: "<FONT COLOR='#FA8072'>зрост</FONT>",
	steady: "стаб"
};

var uv_Stats = {
	Low: "низький",
	Moderate: "середній",
	High: "високий",
	Extreme: "високий"
};

var winddirection_Stats = {
	N: "<FONT COLOR='#FA8072'>Пн</FONT>",
	North: "<FONT COLOR='#FA8072'>Пн</FONT>",
	NNE: "<FONT COLOR='#FA8072'>Пн</FONT>",
	NE: "<FONT COLOR='#FFD700'>ПнС</FONT>",
	ENE: "<FONT COLOR='#FFD700'>ПнС</FONT>",
	E: "<FONT COLOR='#00FF00'>С</FONT>",
	East: "<FONT COLOR='#00FF00'>С</FONT>",
	ESE: "<FONT COLOR='#00FF00'>С</FONT>",
	SE: "<FONT COLOR='#00FF00'>ПдС</FONT>",
	SSE: "<FONT COLOR='#00FF00'>ПдС</FONT>",
	S: "<FONT COLOR='#FF3030'>Пд</FONT>",
	South: "<FONT COLOR='#FF3030'>Пд</FONT>",
	SSW: "<FONT COLOR='#FF3030'>Пд</FONT>",
	SW: "<FONT COLOR='#FFD700'>ПдЗ</FONT>",
	WSW: "<FONT COLOR='#FFD700'>ПдЗ</FONT>",
	W: "<FONT COLOR='#FFFFFF'>З</FONT>",
	West: "<FONT COLOR='#FFFFFF'>З</FONT>",
	WNW: "<FONT COLOR='#FFFFFF'>З</FONT>",
	NW: "<FONT COLOR='#FFFFFF'>ПнЗ</FONT>",
	NNW: "<FONT COLOR='#FFFFFF'>ПнЗ</FONT>"
};

var moon_Stats = {
	New: "новий",
	"Waxing Crescent": "М < 50%",
	"First Quarter": "Н 50%",
	"Waxing Gibbous": "Н 51-99%",
	Full: "повний",
	"Waning Gibbous": "С 51-99%",
	"Last Quarter": "С 50%",
	"Waning Crescent": "С 1-49%",
	Darkened: "O"
};

var moon_Stats_full = {
	New: "New",
	"Waxing Crescent": "Waxing Crescent",
	"First Quarter": "First Quarter",
	"Waxing Gibbous": "Waxing Gibbous",
	Full: "Full",
	"Waning Gibbous": "Waning Gibbous",
	"Last Quarter": "Last Quarter",
	"Waning Crescent": "Waning Crescent",
	Darkened: "Darkened"
};

var lng_Units = {
	"C": "C",
	"F": "F",
	"km": "км",
	"km/h": "км/г",
	"m/s": "м/с",
	"mb": "мб",
	"mi": "миль",
	"mph": "миль/г",
	"in": "\"",
	"cm": "см",
	"mm": "мм",
	"kPa": "кПа"
};


var lng_Countries = {
	"Russia": "Росія",
	"Ukraine": "Україна",
	"United Kingdom": "Велика Британія",
	"United States": "США"
};

var lng_Cities = {
	"Bila Tserkva": "Біла Церква",
	"Bilhorod-Dnistrovs'kyy": "Білгород-Дністровський",
	"Boryspil": "Бориспіль",
	"Boyarka": "Боярка",
	"Busk": "Буськ",
	"Cherkasy": "Черкаси",
	"Chernihiv": "Чернігів",
	"Chernivtsi": "Ченівці",
	"Chornomors'Ke": "Чорноморське",
	"Chuhuyiv": "Чугуїв",
	"Dniprodzerzhyns'k": "Дніпродзержинськ",
	"Dnipropetrovs'k": "Дніпропетровськ",
	"Donets'k": "Донецьк",
	"Drogobych": "Дрогобич",
	"Druzhba": "Дружба",
	"Heniches'K": "Генічевск",
	"Horlivka": "Горлівка",
	"Ivano-Frankivs'k": "Івано-Франківськ",
	"Izium": "Ізюм",
	"Izmail": "Ізмаїл",
	"Kerch": "Керч",
	"Kharkov": "Харків",
	"Kharkiv": "Харків",
	"Kherson": "Херсон",
	"Khmel'nyts'kyi": "Хмельницький",
	"Kiev": "Київ",
	"Kirovohrad": "Кіровоград",
	"Konotop": "Конотоп",
	"Kovel": "Ковель",
	"Kremencug": "Кременчук",
	"Kryvyi Rih": "Кривий Ріг",
	"L'viv": "Львів",
	"Liubashivka": "Любашівка",
	"Lubny": "Лубни",
	"Luhans'k": "Луганськ",
	"Makiyivka": "Макіївка",
	"Mariupol": "Маріуполь",
	"Merefa": "Мерефа",
	"Mohyliv-Podil's'Kyi": "Могилів-Подільський",
	"Mykolayiv": "Миколаїв",
	"Myronivka": "Миронівка",
	"Nizhyn": "Ніжин",
	"Odessa": "Одеса",
	"Poltava": "Полтава",
	"Rivne": "Рівне",
	"Sarny": "Сарни",
	"Sevastopol'": "Севастополь",
	"Shepetivka": "Шепетівка",
	"Shostka": "Шостка",
	"Simferopol": "Сімферополь",
	"Sumy": "Суми",
	"Svitlovods'K": "Світловодськ",
	"Ternopil": "Тернопіль",
	"Uman": "Умань",
	"Uzhhorod": "Ужгород",
	"Vinnytsia": "Вінниця",
	"Volodymyr-Volyns'Kyi": "Володимир-Волинський",
	"Yalta": "Ялта",
	"Yevpatoriya": "Євпаторія",
	"Zaporizhzhia": "Запоріжжя",
	"Zhytomyr": "Житомир"
};

var lng_Month = {
	Jan: "січня",
	Feb: "лютого",
	Mar: "березня",
	Apr: "квітня",
	May: "травня",
	Jun: "червня",
	Jul: "липня",
	Aug: "серпня",
	Sep: "вересня",
	Oct: "жовтня",
	Nov: "листопада",
	Dec: "грудня"
};

var lng_Month_Short = {
	Jan: "січ",
	Feb: "лют",
	Mar: "бер",
	Apr: "кві",
	May: "тра",
	Jun: "чер",
	Jul: "лип",
	Aug: "сер",
	Sep: "вер",
	Oct: "жов",
	Nov: "лис",
	Dec: "гру"
};

var lng_Month_full = {
	January: "січня",
	February: "лютого",
	March: "березня",
	April: "квітня",
	May: "травня",
	June: "червня",
	July: "липня",
	August: "серпня",
	September: "вересня",
	October: "жовтня",
	November: "листопада",
	December: "грудня"
};

