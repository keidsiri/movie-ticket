// Business logic
function Ticket(title, premium, time, matinee, senior) {
  this.title = title; // string
  this.premium = premium; // true/false
  this.time = time; // string
  this.matinee = matinee; // number
  this.age = senior; // true/false
  this.price = 8.5;
}

Ticket.prototype.priceAdjustment = function() {
  if (this.age) {
    this.price *= 0.5;
  }
  if (this.matinee < 5) {
    this.price *= 0.9;
  }
  if (this.premium) {
    this.price += 1;
  }
};

// UI Logic

function displayTicket(ticket) {
  $(".result").show();
  $("#your-title").text(ticket.title);
  $("#your-time").text(ticket.time);
  if (ticket.age) {
    $("#your-age").text("Senior Ticket 50 % off!");
  } else {
    $("#your-age").text("General Admission");

  }
  ticket.priceAdjustment();
  $("#your-price").text("$" + ticket.price.toFixed(2));
}

$(document).ready(function() {
  $("#ticket").submit(function(event) {
    event.preventDefault();
    const title = $("#movies option:selected").html();
    const premium = $("#movies").val();
    const time = $("#time option:selected").html();
    const matinee = $("#time").val();
    let senior = false;
    if ($("input:checked").val()) {
      senior = true;
    }
    let myTicket = new Ticket(title, premium, time, matinee, senior);
    displayTicket(myTicket);
  });
});





//select boxes : 1 .Movies ( new release, others) 2. time ( Morning , afternoon , evening ) 3.Senior or not 
// New release : Most expensive
// afternoon or senior : cheaper.
// regular price; new release +$1, afternoon ticket *.85, senior *.50
