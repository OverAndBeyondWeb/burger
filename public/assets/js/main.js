$.get('/api/all-burgers', function(data) {
  data.forEach(function(element) {
    var burger = $('<li>');
    burger.text(element.burger_name);
    
    if (element.devour === 1) {
      $('.devoured').append(burger);
    } else if (element.devour === 0) {
      var devourBtn = $('<button class="devour">Devour</button>');
      devourBtn.attr('data-id', element.id);
      burger.append(devourBtn);
      $('.burger-list').append(burger);

      $('.devour').click(function() {
        var id = $(this).attr('data-id');
        $.post('/update-burger', {id: id});
      });
    }
  })
});





