// Navbar
$(window).scroll(function() {
	if ($(window).scrollTop() == 0){
		$('.navbar').css('background-color', 'transparent');
		$('.navbar a').css('color', 'white');
		$('.navbar .active').css('color','#d50032');
		$('.drop-content').css('background-color', 'transparent');
	}else{
		$('.navbar').css('background-color', '#f6f6f6');
		$('.navbar a').css('color', 'black');
		$('.navbar .active').css('color','#d50032');
		$('.drop-content').css('background-color', '#f6f6f6');
	}
});

//Register
function register(event){
	event.preventDefault();
	
	var message = document.getElementById('Message');
	var	name = document.getElementById('Name');
	var email = document.getElementById('Email');
	var Password = document.getElementById('Password');
	var Address = document.getElementById('Address');
	var Gender = document.querySelector("input[Name='Gender']:checked");
	var City = document.getElementById('City');


	if (name.value.length == 0) {
		message.innerHTML = "Nama tidak boleh kosong!";
	}else if(name.value.length > 12 || name.value.length < 3){
		message.innerHTML = "Nama harus diantara 3 - 12 character!";
	}else if (email.value.length == 0) {
		message.innerHTML = "Email tidak boleh kosong!";
	}else if(email.value.indexOf("@") < 0 || email.value.indexOf(".com") < 0){
		message.innerHTML="Email harus mengandung @ dan .com!";
	}else if (Password.value.length == 0) {
		message.innerHTML = "Password tidak boleh kosong!";
	}else if(Password.value.length > 12 || Password.value.length < 3){
		message.innerHTML = "Password harus diantara 3 - 12 character!";
	}else if (Address.value.length == 0) {
		message.innerHTML="Alamat tidak boleh kosong!";
	}else if(Address.value.length < 3 || Address.value.length > 60){
		message.innerHTML="Alamat harus diantara 3 - 60 character";
	}else if(Gender == null){
		message.innerHTML = "Gender harus dipilih";
	}else if(City.selectedIndex == 0){
		message.innerHTML="Kota harus dipilih";
	}else{
		message.innerHTML = "Data Tersimpan, selamat bergabung dengan JS-Yoyo. Newsletter akan dikirimkan setiap minggunya.";
	}
}

function showPass(){
	var Password = document.getElementById("Password");

	if (Password.type === "password") {
		Password.type = "text";
	}else{
		Password.type = "password";
	}
}

//Tutorial
var slider1 = $(".slider1");
var slider2 = $(".slider2");
var slider3 = $(".slider3");
var width = 700;
var height = 400;
slider1.width(width);
slider1.height(height);
slider2.width(width);
slider2.height(height);
slider3.width(width);
slider3.height(height);

var images1 = slider1.find("img");
images1.each(function(i,img){
	$(img).width(width);
	$(img).height(height);
	slider1.find(".slider-item1").append(img);
});

var images2 = slider2.find("img");
images2.each(function(i,img){
	$(img).width(width);
	$(img).height(height);
	slider2.find(".slider-item2").append(img);
});

var images3 = slider3.find("img");
images3.each(function(i,img){
	$(img).width(width);
	$(img).height(height);
	slider3.find(".slider-item3").append(img);
});

var imagesNum1 = images1.length;
var containerWidth1 = width * imagesNum1;
var container1 = slider1.find(".slider-item1");
container1.width(containerWidth1);

var imagesNum2 = images2.length;
var containerWidth2 = width * imagesNum2;
var container2 = slider2.find(".slider-item2");
container2.width(containerWidth2);

var imagesNum3 = images3.length;
var containerWidth3 = width * imagesNum3;
var container3 = slider3.find(".slider-item3");
container3.width(containerWidth3);

setInterval(function(){
	var startLeft1 = container1.position().left;
	var endLeft1 = startLeft1 - width;
	var startLeft2 = container2.position().left;
	var endLeft2 = startLeft2 - width;

	if(Math.abs(endLeft1) == containerWidth1){
		endLeft1 = 0;
	}
	if(Math.abs(endLeft2) == containerWidth2){
		endLeft2 = 0;
	}

	container1.animate({left:endLeft1},200);
	container2.animate({left:endLeft2},200);
	container3.animate({left:endLeft1},200);
},3000);