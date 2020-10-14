//Dropdown Menu open/close
$('#dropdownMenu').click(function() {
    if ($(this).hasClass('active')) {
        //slide dropdown menu out of viewport
        $(this).removeClass('active');
        $('#dropdownContainer').animate({
            right: '-=100vw'
        }, 100);
        //close opened sub-options
        $('.option').each(function() {
            $('.option').removeClass('visible');
        });
    } else {
        //slide dropdown menu into viewport
        $(this).addClass('active')
        $('#dropdownContainer').animate({
            right: '+=100vw'
        }, 100);
    }
});
//Dropdown Menu sub-option open/close
$('.option').click(function() {
    let dropdownNum = $(this).attr('data-drpdwn-num');
    let dropdownSubArray = $('.option[data-drpdwn-sub-num=' + dropdownNum + ']');
    
    dropdownSubArray.each(function() {
        if ($(this).hasClass('visible')) {
            $(this).removeClass('visible');
        } else {
            $(this).addClass('visible');
        }
    });
});

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
}));

