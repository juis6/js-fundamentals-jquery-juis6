// На HTML-сторінці є 6 чекбоксів. 
// Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4

$('input[type="checkbox"]').change(function() {
    if ($('input:checked').length >= 3) {
        $('input[type="checkbox"]').prop('disabled', true);
    }
});