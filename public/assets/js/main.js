$.get('/api/all-burgers', function(data) {
  console.log(data);
  data.forEach(function(element) {
    console.log(element);
    var burger = $('<li>');
    burger.text(element.burger_name);
    var devourBtn = $('<button class="devour">Devour</button>');
    burger.append(devourBtn);
    $('.burger-list').append(burger);
  })
});