let params = (new URL(document.location)).searchParams;
let form = params.get('f'); 
if(form != null & form == 'yes'){

    $('.response').append('Votre message a été envoyé');
    $('.response').addClass('green');
    console.log('yes');
}

if(form != null & form == 'no'){

    $('.response').append('Votre message n\' a pas été envoyé ! Essayez plus tard !');
    $('.response').addClass('red');
    console.log('no');
}


