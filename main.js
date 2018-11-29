

// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

// creiamo le variabili

var elementGreen = $('quadratino');
var elementRed = $('quadratinoRed');

// attiviamo il color se rosso o verde

elementGreen.click(function(){
  $(this).addClass('active_Green')
});

elementRed.click(function(){
  $(this).addClass('active_Red')
});


// quado viene cliccato un quadratino in base al conteggio viene assegnato il punteggio rispettivo

var punteggioRed = 0;
var punteggioGreen = 0;

elementGreen.click(function(){
  punteggioGreen++;

  $('scoreGreen').text('Hai trovato ' + punteggioGreen + 'quadratini verdi');
});

elementRed.click(function(){
  punteggio++;

  $('scoreRed').text('Hai trovato ' + punteggioRed + 'quadratini rossi');
});
