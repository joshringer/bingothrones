import $ from 'jquery'

$(function () {
  $('#bingocard td').text('Loading...')

  $.getJSON('data/characters.json')
    .done(function (data) {
      $('#bingocard td').each(function (_, cell) {
        var index = Math.floor(Math.random() * data.length)
        var character = data.splice(index, 1)[0]
        $(cell).text(character.name)
        $('<br>').prependTo(cell)
        $('<img>').attr('src', character.img).prependTo(cell)
      })
    })
    .fail(function (_, errorstr) {
      console.log(arguments)
      $('#bingocard td').addClass('error').text(errorstr)
    })
})
