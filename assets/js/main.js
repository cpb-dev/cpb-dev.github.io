/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// function([string1, string2],target id,[color1,color2])  
colours = [
	'#f28482', '#ee9b00', '#003049', '#81b29a', '#2f3e46', 
	'#eb5e28', '#bc4749', '#495057', '#b56576', '#3d5a80']  
consoleText([
	'NumPy.', 'MatPlotLib.', 'TensorFlow.', 'Keras.', 'Pandas.', 
	'PyTorch.', 'Plotly.', 'Seaborn.', 'SkLearn.', 'PIL.'], 
	'text',
	colours);

consoleText([
	'MP3', 'WAV', 'MIDI'], 
	'dnn_Data',
	colours);

consoleText([
	'NumPy', 'MatPlotLib', 'TensorFlow', 'Keras', 'Pandas', 
	'Music21', 'Librosa', 'SkLearn'], 
	'dnn_Libraries',
	colours);

consoleText([
	'PyGame', 'NumPy', 'MatPlotLib', 'Pickle', 'PyTorch',
	'tkinter'], 
	'tetris_Libraries',
	colours);

consoleText(['Smart Things', 'Alexa Command', 'Hyper Sonic Sensor'], 
	'smartDesk_Data',
	colours);

consoleText([
	'WiFi.h', 'HTTPClient.h'], 
	'smartDesk_Libraries',
	colours);

consoleText([
	'JavaScript', 'SQL', 'XML'], 
	'app_Lang',
	colours);

consoleText([
	'VARCHAR', 'DATETIME', 'FLOAT', 'INT'], 
	'app_Data',
	colours);

consoleText([
	'SQLiteOpenHelper', 'SQLiteDatabase', 'MatPlotLib', 'Pickle', 'PyTorch',
	'tkinter'], 
	'app_Libraries',
	colours);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

function hideInfo() {
	var x = document.getElementById("myHidden");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById("hideText").innerHTML = "Show less!";
	} else {
	  x.style.display = "none";
	  document.getElementById("hideText").innerHTML = "Find out some more!";
	}
}

function hideProj(project, text) {
	var x = document.getElementById(project);
	if (x.style.display === "none") {
	  x.style.display = "block";
	  document.getElementById(text).innerHTML = "Show less!";
	} else {
	  x.style.display = "none";
	  document.getElementById(text).innerHTML = "Learn more!";
	}
}

function hideDoubleProj(project, project2, text) {
	var x = document.getElementById(project);
	var y = document.getElementById(project2);
	if (x.style.display === "none" && y.style.display === "none") {
	  x.style.display = "block";
	  y.style.display = "block";
	  document.getElementById(text).innerHTML = "Show less!";
	} else {
	  x.style.display = "none";
	  y.style.display = "none";
	  document.getElementById(text).innerHTML = "Learn more!";
	}
}

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);