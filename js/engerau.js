/* var showHeaderWindow = function(_this, marker, event, context) {
	var map = $(_this).gmap3("get"),
	infowindow = $(_this).gmap3({get:{name:"infowindow"}});
	if (infowindow){
		infowindow.open(map, marker);
		infowindow.setContent(markerHeader(context.data));
	} else {
		$(_this).gmap3({
			infowindow:{
				anchor:marker, 
				options:{content: markerHeader(context.data)},
				maxWidth: 200
			}
		});
	}
}; */

var showFullWindow = function(_this, marker, event, context) {
	var map = $(_this).gmap3("get"),
	infowindow = $(_this).gmap3({get:{name:"infowindow"}});
	if (infowindow){
		infowindow.open(map, marker);
		infowindow.setContent(markerContent(context.data));
	} else {
		$(_this).gmap3({
			infowindow:{
				anchor:marker, 
				options:{content: markerContent(context.data)},
				maxWidth: 600
			}
		});
	}
};

var closeWindow = function(_this){
	var infowindow = $(_this).gmap3({get:{name:"infowindow"}});
	if (infowindow){
		infowindow.close();
	}
};

var markerHeader = function(data) {
	return "<h3>" + data.name + "</h3>";
};

var markerContent = function(data) {
	return "<h2>" + data.name + "</h2>"+ data.desc;
};

var pink = {
	marker: {
		values:[
		{latLng: [48.135586,17.115595], data: {name: "krcmicka pri starom moste", desc: ""}},
		{latLng: [48.119701,17.111549], data: {name: "Jupiter", desc: ""}},
		{latLng: [48.114029,17.109962], data: {name: "Meteor", desc: ""}},
		{latLng: [48.120438,17.114290], data: {name: "ihrisko", desc: ""}},
		{latLng: [48.127014,17.123652], data: {name: "trhovisko", desc: ""}},
		{latLng: [48.117561,17.117472], data: {name: "šmykľavky", desc: ""}},
		{latLng: [48.126484,17.119940], data: {name: "mäsiarstvo", desc: ""}},
		{latLng: [48.126900,17.122879], data: {name: "1000 drobností", desc: ""}},
		{latLng: [48.101742,17.110821], data: {name: "čárda Kormorán", desc: ""}},
		{latLng: [48.119839,17.127857], data: {name: "ihrisko", desc: ""}},
		{latLng: [48.121666,17.131147], data: {name: "drevené domy", desc: ""}},
		{latLng: [48.119606,17.116480], data: {name: "ihrisko", desc: ""}},
		{latLng: [48.119587,17.114885], data: {name: "ihrisko", desc: ""}},
		{latLng: [48.124592,17.111591], data: {name: "pomník Trasa Ševčenka", desc: ""}},
		{latLng: [48.129784,17.133129], data: {name: "hajovna-hostinec u Hubra", desc: ""}},
		{latLng: [48.097874,17.108847], data: {name: "trhovisko Braník", desc: ""}},
		{latLng: [48.100037,17.100285], data: {name: "pekáreň", desc: ""}},
		{latLng: [48.126770,17.124039], data: {name: "pekáreň Kvások", desc: ""}},
		{latLng: [48.116901,17.109543], data: {name: "drogéria LIMA", desc: ""}},
		{latLng: [48.115520,17.109280], data: {name: "papier-hračky-drogéria u Milky", desc: ""}},
		{latLng: [48.117409,17.103268], data: {name: "potraviny-večierka", desc: ""}},
		{latLng: [48.117748,17.103653], data: {name: "požičovňa kostýmov", desc: ""}},
		{latLng: [48.124706,17.123501], data: {name: "Starohájska piváreň", desc: ""}},
		{latLng: [48.108826,17.099480], data: {name: "Matchball", desc: ""}},
		{latLng: [48.096512,17.119831], data: {name: "MIVA", desc: ""}},
		{latLng: [48.094391,17.116152], data: {name: "Značka miesta 138", desc: ""}},
		{latLng: [48.136478,17.107471], data: {name: "Leberfinger", desc: ""}},
		{latLng: [48.137299,17.110348], data: {name: "Galéria Propeler", desc: ""}},
		{latLng: [48.133690,17.100433], data: {name: "Incheba", desc: ""}},
		{latLng: [48.112614,17.091578], data: {name: "krčma kopčianska", desc: ""}},
		{latLng: [48.121975,17.104753], data: {name: "Slovenská pedagogická knižnica", desc: ""}},
		{latLng: [48.121380,17.104416], data: {name: "Múzeum školstva a pedagogiky", desc: ""}},
		{latLng: [48.099491,17.108202], data: {name: "Bistro Neptún", desc: ""}},
		{latLng: [48.120338,17.130630], data: {name: "Centrum Ovsište", desc: ""}},
		{latLng: [48.097935,17.107944], data: {name: "DK Lúky", desc: ""}}
		],
		tag: "pink",
		options: {
			icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/pink-dot.png"),
			
		}, 
		events: {
			/* mouseover: function(marker, event, context) { showHeaderWindow(this, marker, event, context); }
			,
			mouseout: function() { closeWindow(this); }, */
			click: function(marker, event, context) { showFullWindow(this, marker, event, context); }
		}
	}
};

var red = {
	marker: {
		values:[
		{latLng: [48.127106,17.116859], data: {name: "kábelová komora", desc: ""}},
		{latLng: [48.109882,17.120583], data: {name: "chatky malý draždiak", desc: ""}},
		{latLng: [48.097332,17.106421], data: {name: "amfiteáter+ihrisko", desc: ""}},
		{latLng: [48.103004,17.126162], data: {name: "zelené jazero", desc: ""}},
		{latLng: [48.093124,17.109209], data: {name: "depo metra", desc: ""}},
		{latLng: [48.121555,17.117676], data: {name: "stĺp na hodiny", desc: ""}},
		{latLng: [48.112621,17.112638], data: {name: "prvý panelák", desc: ""}},
		{latLng: [48.113346,17.110735], data: {name: "3 kocky", desc: ""}},
		{latLng: [48.114063,17.115004], data: {name: "ihrisko", desc: ""}},
		{latLng: [48.080257,17.091980], data: {name: "Bažantnica", desc: ""}},
		{latLng: [48.124321,17.134090], data: {name: "snežienkový les", desc: ""}},
		{latLng: [48.124264,17.126499], data: {name: "smithson a pyramida", desc: ""}},
		{latLng: [48.115955,17.104467], data: {name: "Divadlo Ludus", desc: ""}},
		{latLng: [48.105579,17.107523], data: {name: "PTK stena", desc: ""}},
		{latLng: [48.113613,17.091047], data: {name: "Kopčany", desc: ""}},
		{latLng: [48.109238,17.131763], data: {name: "Ostrov Starý háj", desc: ""}},
		{latLng: [48.126511,17.132233], data: {name: "Strom roka 2009 - topoľ čierny", desc: ""}},
		{latLng: [48.111069,17.119940], data: {name: "Torzo pôvodného Chorvátskeho ramena", desc: "dsklfj asdlf jaslkf jasl fjsalk jfskl"}},
		{latLng: [48.110359,17.116421], data: {name: "lúka vďaky", desc: ""}}
		],
		tag: "red",
		options: {
			icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
		}, 
		events: {
			/* mouseover: function(marker, event, context) { showHeaderWindow(this, marker, event, context); }
			,
			mouseout: function() { closeWindow(this); }, */
			click: function(marker, event, context) { showFullWindow(this, marker, event, context); }
		}
	}
};

var blue = {
	marker: {
		values:[
		{latLng: [48.098927,17.115433], data: {name: "vlnovkové domy", desc: ""}},
		{latLng: [48.129921,17.103653], data: {name: "stará škola", desc: ""}},
		{latLng: [48.131325,17.098030], data: {name: "škola einsteinova", desc: ""}},
		{latLng: [48.128044,17.098770], data: {name: "kostol sv. kríža", desc: ""}},
		{latLng: [48.123089,17.093954], data: {name: "kúpalisko Matador", desc: ""}},
		{latLng: [48.104343,17.105509], data: {name: "kostol Sv. Trojice", desc: ""}},
		{latLng: [48.112667,17.107237], data: {name: "kostol Sv. Rodiny", desc: ""}},
		{latLng: [48.099129,17.111485], data: {name: "kostol Sedembolestnej PM", desc: ""}},
		{latLng: [48.108978,17.116945], data: {name: "horaren Maly drazdiak", desc: ""}},
		{latLng: [48.133102,17.123646], data: {name: "Bukschova hájovňa", desc: ""}},
		{latLng: [48.120380,17.094641], data: {name: "areál závod Matador", desc: ""}},
		{latLng: [48.107410,17.081026], data: {name: "vojenský cintorín", desc: ""}},
		{latLng: [48.107841,17.081518], data: {name: "BS-8", desc: ""}},
		{latLng: [48.137138,17.117170], data: {name: "starý most", desc: ""}},
		{latLng: [48.136967,17.109898], data: {name: "Propeler", desc: ""}},
		{latLng: [48.128124,17.131086], data: {name: "Nemecká škola", desc: ""}},
		{latLng: [48.111530,17.111076], data: {name: "Technopol", desc: ""}},
		{latLng: [48.135006,17.122663], data: {name: "Prvá škola v Ovsišti", desc: ""}},
		{latLng: [48.136780,17.109383], data: {name: "Au café", desc: ""}}
		],
		tag: "blue",
		options: {
			icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/blue-dot.png")
		}, 
		events: {
			/* mouseover: function(marker, event, context) { showHeaderWindow(this, marker, event, context); }
			,
			mouseout: function() { closeWindow(this); }, */
			click: function(marker, event, context) { showFullWindow(this, marker, event, context); }
		}
	}
};

var green = {
	marker: {
		values:[
		{latLng: [48.125984,17.128372], data: {name: "socha robotník", desc: ""}},
		{latLng: [48.136784,17.108690], data: {name: "pamatnik obetiam holokoaust armenov", desc: ""}},
		{latLng: [48.104416,17.105284], data: {name: "socha Martina Luthera", desc: ""}},
		{latLng: [48.129330,17.092966], data: {name: "míľnik Sovietskej armády", desc: ""}},
		{latLng: [48.116901,17.104837], data: {name: "pamätník povstaniu Českého ľudu", desc: ""}},
		{latLng: [48.126122,17.096985], data: {name: "socha Matka s dieťaťom", desc: ""}},
		{latLng: [48.109909,17.111900], data: {name: "kameň 2 ženy", desc: "<div>Ján Hučko</div>"}},
		{latLng: [48.119949,17.132128], data: {name: "plastika čierny stĺp", desc: ""}},
		{latLng: [48.120983,17.132439], data: {name: "Biely kameň - kvet", desc: ""}},
		{latLng: [48.123936,17.111258], data: {name: "plastika kocka", desc: ""}},
		{latLng: [48.128349,17.111906], data: {name: "fontána", desc: ""}},
		{latLng: [48.123020,17.099148], data: {name: "vstupná brána", desc: ""}},
		{latLng: [48.130100,17.100134], data: {name: "plastika šašovia", desc: ""}},
		{latLng: [48.121731,17.098438], data: {name: "plastika Ikaros", desc: ""}},
		{latLng: [48.120960,17.100208], data: {name: "3 ženské torzá", desc: ""}},
		{latLng: [48.109043,17.099251], data: {name: "kamenný strom", desc: ""}},
		{latLng: [48.115429,17.109398], data: {name: "reliéf Dúha", desc: ""}},
		{latLng: [48.122898,17.121609], data: {name: "glazovaný reliéf", desc: ""}},
		{latLng: [48.123035,17.123775], data: {name: "glazovaný reliéf", desc: ""}},
		{latLng: [48.128403,17.110836], data: {name: "kameň stĺp", desc: ""}},
		{latLng: [48.099113,17.099957], data: {name: "Madona s chlebom", desc: ""}},
		{latLng: [48.122051,17.105825], data: {name: "Kridlo, šipka, kostrč", desc: ""}},
		{latLng: [48.121292,17.104757], data: {name: "Plastika pár ", desc: ""}},
		{latLng: [48.117683,17.101641], data: {name: "Plastika pri športovej hale", desc: ""}},
		{latLng: [48.116314,17.101475], data: {name: "Plastika kmene", desc: ""}},
		{latLng: [48.136608,17.114189], data: {name: "zlomené krídlo", desc: ""}},
		{latLng: [48.098110,17.104263], data: {name: "plastika Kvitnúci strom", desc: ""}},
		{latLng: [48.135983,17.112776], data: {name: "Pamätník mirových zmlúv", desc: ""}},
		{latLng: [48.124825,17.129896], data: {name: "reliéfna fasáda", desc: ""}},
		{latLng: [48.121140,17.101288], data: {name: "Bronzobá plastika M. Cipár", desc: "<div>2001</div>"}},
		{latLng: [48.104946,17.101561], data: {name: "Mozajka \"mier deťom\"", desc: ""}},
		{latLng: [48.097977,17.106813], data: {name: "Plastika šport", desc: ""}},
		{latLng: [48.109024,17.110476], data: {name: "Reliéf motýľ", desc: "<div>Ján Hučko, 1985</div>"}},
		{latLng: [48.109417,17.112408], data: {name: "Reliéf vážka", desc: "<div>Ján V. Hučko, 1985</div>"}},
		{latLng: [48.109627,17.115042], data: {name: "Reliéf rak", desc: "<div>Ján V. Hučko, 1985</div>"}},
		{latLng: [48.107590,17.110046], data: {name: "reliéf Ryba", desc: "<div>Ján Hučko, 1985</div>"}},
		{latLng: [48.108604,17.102634], data: {name: "Socha pred školou ženy a holuby", desc: "<div>J. M. Horník, 1989</div>"}}
		],
		tag: "green",
		options: {
			icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/green-dot.png")
		}, 
		events: {
			/* mouseover: function(marker, event, context) { showHeaderWindow(this, marker, event, context); }
			,
			mouseout: function() { closeWindow(this); }, */
			click: function(marker, event, context) { showFullWindow(this, marker, event, context); }
		}
	}
};

var yellow = {
	marker: {
		values:[
		{latLng: [48.133789,17.124125], data: {name: "záhradky", desc: ""}},
		{latLng: [48.128876,17.117407], data: {name: "betónové rúry", desc: ""}},
		{latLng: [48.132355,17.118244], data: {name: "betonáreň", desc: ""}},
		{latLng: [48.115841,17.125561], data: {name: "dostiška", desc: ""}},
		{latLng: [48.088200,17.122107], data: {name: "pohrebisko st. petržalky", desc: ""}},
		{latLng: [48.132809,17.130388], data: {name: "???", desc: ""}},
		{latLng: [48.128017,17.135904], data: {name: "parkur a kurty", desc: ""}},
		{latLng: [48.119278,17.080114], data: {name: "motokrosová dráha", desc: ""}},
		{latLng: [48.142151,17.066166], data: {name: "pláž", desc: "Text<br/><img src='http://www.bratislavaguide.com/images/main-current.jpg'/>"}},
		{latLng: [48.092606,17.110519], data: {name: "futbalové ihrisko", desc: ""}},
		{latLng: [48.119907,17.133223], data: {name: "štadión FC Petržalka 1898", desc: ""}},
		{latLng: [48.123047,17.142836], data: {name: "pláž", desc: ""}},
		{latLng: [48.111523,17.126537], data: {name: "ŠK Dunaj", desc: ""}},
		{latLng: [48.118992,17.122225], data: {name: "TJ Žižka Bratislava", desc: ""}},
		{latLng: [48.116226,17.106012], data: {name: "skatepark", desc: ""}},
		{latLng: [48.113987,17.119135], data: {name: "kurty", desc: ""}},
		{latLng: [48.122608,17.125389], data: {name: "futbalové ihrisko", desc: ""}},
		{latLng: [48.121628,17.124832], data: {name: "biklokrosová dráha", desc: ""}},
		{latLng: [48.125355,17.126484], data: {name: "saleziáni, ihriská", desc: ""}},
		{latLng: [48.104050,17.112236], data: {name: "Veľký Draždiak", desc: ""}},
		{latLng: [48.108994,17.120153], data: {name: "Malý Draždiak", desc: ""}},
		{latLng: [48.134418,17.109833], data: {name: "SJK", desc: ""}},
		{latLng: [48.133320,17.120026], data: {name: "TJ Polygraf", desc: ""}},
		{latLng: [48.111702,17.088739], data: {name: "Motokáry", desc: ""}},
		{latLng: [48.135994,17.122749], data: {name: "Lodenice", desc: ""}},
		{latLng: [48.083012,17.144680], data: {name: "Veľký Zemník", desc: ""}},
		{latLng: [48.135750,17.124380], data: {name: "Dunajčík", desc: ""}},
		{latLng: [48.135471,17.127247], data: {name: "Lido", desc: ""}},
		{latLng: [48.119427,17.131847], data: {name: "Hokejová hala", desc: ""}}
		],
		tag: "yellow",
		options: {
			icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/yellow-dot.png")
		}, 
		events: {
			/* mouseover: function(marker, event, context) { showHeaderWindow(this, marker, event, context); }
			,
			mouseout: function() { closeWindow(this); }, */
			click: function(marker, event, context) { showFullWindow(this, marker, event, context); }
		}
	}
};

/* Credits and kudos for search go to http://thornelabs.net/2014/05/12/instant-search-with-twitter-bootstrap-jekyll-json-and-jquery.html */

function getSearchJSON()
{
     // console.log("get search data");

     $("#search_results").html("");

     searchJSON = pink.marker.values.concat(red.marker.values).concat(blue.marker.values).concat(green.marker.values).concat(yellow.marker.values);
      //console.log("search JSON: " + searchJSON.length);
  }

  function doSearch(e)
  {
  	results = [];

  // console.log("searching for " + e);

  if (e != "")
  {
  	$.each(searchJSON, function(t, n) {
      // console.log("n: " + n.data.name);
      var name = n.data.name, nl = name.toLowerCase(), latLng = n.latLng;
      nl.indexOf(e)!==-1 && results.push([name, latLng]);
  });

  	printResults();
  }
  else
  {
  	$("#search_results").html();
  	results = [];
  	printResults();
  }
}

function printResults()
{
	console.log("print results");
	var e = $("#search_results");

	e.html("");

	e.html(function() {
		if (results.length == 0)
		{
			e.append('<li style="padding-top: 3px; padding-bottom: 3px; color: #999; word-wrap: break-word; white-space: normal">No results found</li>');
		}
		else
		{
			$.each(results.slice(1, 25), function(t, n) {
				e.append('<li style="padding-top: 3px; padding-bottom: 3px; color: #999; word-wrap: break-word; white-space: normal" latLng="[' + n[1] + ']">' + n[0] + '</li>');
			});
		}
	});

	$("#search_results > li").click(function(){
		console.log("clicked: " + $(this).text() + " " + $(this).attr("latLng"));
		var mark = {data: {name: $(this).text()}, latLng: $(this).attr("latLng")};
		
		//var marker = $(this).text();
		console.log("mark: " + mark);
		$("#map").gmap3({
			 clear: true
		 	/*marker:{
			    latLng:mark.attr("latlng"),
			    data:mark.text(),
			    options:{icon: "http://maps.google.com/mapfiles/marker_green.png"}
			    //options: {animation: google.maps.Animation.BOUNCE}
		   }*/
		 });

		$("#map").gmap3({
		 	marker:mark /*,
			    options:{icon: "http://maps.google.com/mapfiles/marker_green.png"}*/
			    //options: {animation: google.maps.Animation.BOUNCE}
		   
		 });
	});
}

    // Show the dropdown menu as long as there are characters in the text field
    function checkTextField()
    {
        // If the value of id search_input is not empty show id search_results otherwise hide it
        if ($('#search_input').val() != '')
        {
        	$('#search_results').show();
        }
        else
        {
        	$('#search_results').hide();
        }
    }

    // Hide the dropdown menu if there is a left mouse click outside of it
    $(document).mouseup(function (e)
    {
    	var container = $("#search_results");

        // if the target of the click isn't the
        // container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
        	container.hide();
        }
    });

    $(document).ready(function() {
        // Create the search index on page load
        getSearchJSON();

        // Continually update search results as characters are typed
        $("#search_input").keyup(function() {
            // Make search inputs are case insensitive
            var e = $(this).val().toLowerCase();

//            console.log("typed: " + e);
            // Do the actual search
            doSearch(e);
        });
    });