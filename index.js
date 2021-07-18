const result = {}

$('#selectType').change(function () {
    $('#selectSize').prop('disabled', false);
})

$('#selectSize').change(function () {
    $('#selectSauce').prop('disabled', false);
})

$('#selectSauce').change(function () {
    $('#button').prop('disabled', false);
})

$('#button').click(function () {

    result.type = $('#selectType').val();
    result.size = $('#selectSize').val();
    result.sauce = $('#selectSauce').val();
    let receipt = $('#result');
    receipt.html('Чек: '
        + "<br>" + " Пицца - " + result.type
        + "<br>" + " Размер - " + result.size + " см."
        + "<br>" + " Соус - " + result.sauce
        + "<br>" + "Цена - " + 20 * result.size + " р."
    );
    receipt.addClass('receipt')
});

