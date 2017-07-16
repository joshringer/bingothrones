import $ from 'jquery'

$(function () {
  $.getJSON('data/characters.json', function (data) {
    $('#bingocard td').each(function (_, cell) {
      var index = Math.floor(Math.random() * data.length)
      var character = data.splice(index, 1)[0]
      $(cell).text(character.name)
      $('<br>').prependTo(cell)
      $('<img>').attr('src', character.img).prependTo(cell)
    })
  });
})
