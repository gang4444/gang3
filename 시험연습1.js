$('#slide3>ul>li').hide(); 
$('#slide3>ul>li:first-child')
.show(); setInterval(function(){ 
    $('#slide3>ul>li:first-child')
    .fadeOut() 
    .next()
    .fadeIn()
    .end(3000) 
    .appendTo('#slide3>ul'); },3000);