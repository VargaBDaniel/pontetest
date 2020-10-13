//Raise corresponding label if input is empty
$('.form-input').focusin(function () {
    if (this.value == '') {
        $('label[for="' + this.id + '"]').animate({
            left: '-=12',
            top: '-=30'
        }, 250);
    }
});
//Lower corresponding label if input is empty
$('.form-input').focusout(function () {
    if (this.value == '') {
        $('label[for="' + this.id + '"]').animate({
            left: '+=12',
            top: '+=30'
        }, 250);
    }
});

//Message char counter
$('#message').on('keyup keydown', (function() {
    let charCounter = $('#charCounter');
    let charCount = this.value.length;
    
    charCounter.text(200 - charCount);
}))