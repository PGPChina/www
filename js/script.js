$(document).ready(init_login);

var C = {u: 'dna', p: 'spin'}

function init_login(){
    if (Cookies.get('auth')==1){
	logged_in();
    }
    $('.login form').submit(on_submit);
}

function logged_in(){
    $('.login').addClass('protected');
    $('.main').removeClass('protected');
}

function on_submit(event){
    event.preventDefault();
    console.log( $('#user').val(), $('#password').val());
    // lame. very lame.
    if (C.u == $('#user').val() &&
	C.p == $('#password').val()){
	logged_in();
	Cookies.set("auth", 1);
    } else {
	$('.login').addClass('flash');
	setTimeout( function(){
            $(".flash").removeClass("flash");
	}, 1000);	
    }
    return false;
}
