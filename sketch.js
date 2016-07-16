var middle = 320;
var upperKeyWidth = 35;
var bottomKeyWidth = 50;
var upper_level = 400;
var bottom_level = 430;
var leftKeyRinge = middle - 6 * bottomKeyWidth;
var rightKeyRinge = middle + 6 * bottomKeyWidth;
var pressMotionTime = 0;
var prevKeyIsPressed = false;
var prevKey;


function setup() {
	createCanvas(640,480);
	frameRate(60);
	background(100,100,100);
	for (var i = -6; i < 6; i++) {
		var left_bottom = middle + bottomKeyWidth * i;
		var right_bottom = left_bottom + bottomKeyWidth;
		var left_upper = middle + upperKeyWidth * i;
		var right_upper = left_upper + upperKeyWidth;
		if ( i % 2 == 0 ) {
			fill(245);
		} else {
			fill(40);
		}
		quad(left_upper,upper_level,right_upper,upper_level,right_bottom,bottom_level,left_bottom,bottom_level);
		if ( i % 2 == 0 ) {
			fill(225);
		} else {
			fill(60);
		}		
		rect(left_bottom,bottom_level,bottomKeyWidth,20);
	}
	fill(255);
	quad(leftKeyRinge + 4, bottom_level + 21, rightKeyRinge - 4, bottom_level + 21, rightKeyRinge - 4 + 45, bottom_level + 35, leftKeyRinge + 4 - 45, bottom_level + 35);
	quad(0, bottom_level + 35, 640 , bottom_level + 35, 640, 480, 0,480);
}

function draw() {
  if (keyIsPressed || prevKeyIsPressed) {
  	if (keyIsPressed) {
  		prevKey = key;
  	}
  	if (key == 'a' || prevKey == 'a') {
  		if ( pressMotionTime == 0 ) {
  			sound_a.setVolume(1);
  			sound_a.play();
  		}
  		prevKeyIsPressed = true;
  		pressMotion(pressMotionTime,'a');
  		pressMotionTime++;
  		if ( pressMotionTime == 18 ) {
  			prevKeyIsPressed = false;
  			keyIsPressed = false;
  			prevKey = null;
  			pressMotionTime = 0;
  		}
  	}
  	if (key == 's' || prevKey == 's') {
   		if ( pressMotionTime == 0 ) {
  			sound_s.setVolume(1);
  			sound_s.play();
  		}
  		prevKeyIsPressed = true;
  		pressMotion(pressMotionTime,'s');
  		pressMotionTime++;
  		if ( pressMotionTime == 18 ) {
  			prevKeyIsPressed = false;
  			keyIsPressed = false;
  			prevKey = null;
  			pressMotionTime = 0;
  		}  		
  	}
  	if (key == 'd' || prevKey == 'd') {
   		if ( pressMotionTime == 0 ) {
  			sound_d.setVolume(1);
  			sound_d.play();
  		}
  		prevKeyIsPressed = true;
  		pressMotion(pressMotionTime,'d');
  		pressMotionTime++;
  		if ( pressMotionTime == 18 ) {
  			prevKeyIsPressed = false;
  			keyIsPressed = false;
  			prevKey = null;
  			pressMotionTime = 0;
  		}  		
  	} 
  	if (key == 'f' || prevKey == 'f') {
   		if ( pressMotionTime == 0 ) {
  			sound_f.setVolume(1);
  			sound_f.play();
  		}
  		prevKeyIsPressed = true;
  		pressMotion(pressMotionTime,'f');
  		pressMotionTime++;
  		if ( pressMotionTime == 18 ) {
  			prevKeyIsPressed = false;
  			keyIsPressed = false;
  			prevKey = null;
  			pressMotionTime = 0;
  		}  		
  	} 
  	if (key == 'j' || prevKey == 'j') {
   		if ( pressMotionTime == 0 ) {
  			sound_j.setVolume(1);
  			sound_j.play();
  		}
  		prevKeyIsPressed = true;
  		pressMotion(pressMotionTime,'j');
  		pressMotionTime++;
  		if ( pressMotionTime == 18 ) {
  			prevKeyIsPressed = false;
  			keyIsPressed = false;
  			prevKey = null;
  			pressMotionTime = 0;
  		}  		
  	}
   	if (key == 'k' || prevKey == 'k') {
   		if ( pressMotionTime == 0 ) {
  			sound_k.setVolume(1);
  			sound_k.play();
  		}
  		prevKeyIsPressed = true;
  		pressMotion(pressMotionTime,'k');
  		pressMotionTime++;
  		if ( pressMotionTime == 18 ) {
  			prevKeyIsPressed = false;
  			keyIsPressed = false;
  			prevKey = null;
  			pressMotionTime = 0;
  		}  		
  	}  
	if (key == 'l' || prevKey == 'l') {
   		if ( pressMotionTime == 0 ) {
  			sound_l.setVolume(1);
  			sound_l.play();
  		}
		prevKeyIsPressed = true;
		pressMotion(pressMotionTime,'l');
		pressMotionTime++;
		if ( pressMotionTime == 18 ) {
			prevKeyIsPressed = false;
			keyIsPressed = false;
			prevKey = null;
			pressMotionTime = 0;
		}  		
  	}  
 	if (key == ';' || prevKey == ';') {
   		if ( pressMotionTime == 0 ) {
  			sound_semicolon.setVolume(1);
  			sound_semicolon.play();
  		}
		prevKeyIsPressed = true;
		pressMotion(pressMotionTime,';');
		pressMotionTime++;
		if ( pressMotionTime == 18 ) {
			prevKeyIsPressed = false;
			keyIsPressed = false;
			prevKey = null;
			pressMotionTime = 0;
		}  		
  	} 
  }
}

function preload() {
	sound_a = loadSound('piano-sound/c3.ogg');
	sound_s = loadSound('piano-sound/d3.ogg');
	sound_d = loadSound('piano-sound/e3.ogg');
	sound_f = loadSound('piano-sound/f3.ogg');
	sound_j = loadSound('piano-sound/g3.ogg');
	sound_k = loadSound('piano-sound/a3.ogg');
	sound_l = loadSound('piano-sound/b3.ogg');
	sound_semicolon = loadSound('piano-sound/ha4.ogg');
}

function pressMotion(i,keyLetter) {
	switch (keyLetter) {
		case 'a': var shift = -4; break;
		case 's': var shift = -3; break;
		case 'd': var shift = -2; break;
		case 'f': var shift = -1; break;
		case 'j': var shift = 0; break;
		case 'k': var shift = 1; break;
		case 'l': var shift = 2; break;
		case ';': var shift = 3; break;
	}
	hideLineLeftPoint = middle + shift * bottomKeyWidth;
	hideLineRightPoint = hideLineLeftPoint + bottomKeyWidth;
	upperLineLeftPoint = middle + shift * upperKeyWidth;
	upperLineRightPoint = middle + shift * upperKeyWidth + upperKeyWidth;
	if ( shift % 2 == 0 ) {
		keyFrontColor = 225;
		keyUpperColor = 245;
	} else {
		keyFrontColor = 60;
		keyUpperColor = 40;
	}
	if ( i < 8 ) {
		if ( i == 0 ) {
			stroke(keyUpperColor);
			line(hideLineLeftPoint + 2,bottom_level - 1,hideLineRightPoint - 2,bottom_level - 1);
			line(hideLineLeftPoint + 1,bottom_level ,hideLineRightPoint - 1,bottom_level);			
		}
		stroke(keyUpperColor);
		line(middle + shift * bottomKeyWidth + 1, 430 + i, hideLineLeftPoint + bottomKeyWidth - 1, 430 + i);
		stroke(0);
		line(hideLineLeftPoint + 1, 430 + i + 1, hideLineLeftPoint + bottomKeyWidth - 1, 430 + i + 1);
		if (shift < 0) {
			stroke(128);
			line(upperLineLeftPoint,400,hideLineLeftPoint + 1,430 + i - 1);
			stroke(0);
			line(upperLineLeftPoint,400,hideLineLeftPoint + 1,430 + i);
		} else {
			stroke(128);
			line(upperLineRightPoint,400,hideLineRightPoint - 1,430 + i - 1);
			stroke(0);
			line(upperLineRightPoint,400,hideLineRightPoint - 1,430 + i);			
		}
	} else if (i >= 8 && i <= 16) {
		i = 16 - i
		stroke(keyUpperColor);
		if (shift < 0) {
			line(upperLineLeftPoint,400,hideLineLeftPoint + 1,430 + i);		
		} else {
			line(upperLineRightPoint,400,hideLineRightPoint - 1,430 + i);	
		}
		stroke(keyFrontColor);
		line(hideLineLeftPoint + 1, 430 + i, hideLineLeftPoint + bottomKeyWidth - 1, 430 + i);
		stroke(0);
		line(hideLineLeftPoint + 1, 430 + i - 1, hideLineLeftPoint + bottomKeyWidth - 1, 430 + i - 1 );
	} else {
		redrawKey(prevKey);
	}
}

function redrawKey(keyLetter) {
	switch (keyLetter) {
		case 'a': var shift = -4; break;
		case 's': var shift = -3; break;
		case 'd': var shift = -2; break;
		case 'f': var shift = -1; break;
		case 'j': var shift = 0; break;
		case 'k': var shift = 1; break;
		case 'l': var shift = 2; break;
		case ';': var shift = 3; break;
	}
	var left_bottom = middle + bottomKeyWidth * shift;
	var right_bottom = left_bottom + bottomKeyWidth;
	var left_upper = middle + upperKeyWidth * shift;
	var right_upper = left_upper + upperKeyWidth;
	if ( shift % 2 == 0 ) {
		fill(245);
	} else {
		fill(40);
	}
	quad(left_upper,upper_level,right_upper,upper_level,right_bottom,bottom_level,left_bottom,bottom_level);
	if ( shift % 2 == 0 ) {
		fill(225);
	} else {
		fill(60);
	}		
	rect(left_bottom,bottom_level,bottomKeyWidth,20);	
}
