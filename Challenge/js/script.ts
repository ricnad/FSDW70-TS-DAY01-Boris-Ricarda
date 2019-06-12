
var product: Array<any> = ['Margherita', 'Salame', 'Quattro Formaggio', 'Diavola', 'Toscana', 'Calzone']
var img: Array<any> = ["img/Margherita.jpg", "img/salame.jpg", "img/quattro-formaggio.jpg", "img/diavola.jpg", "img/la-toscana.jpg", "img/calzone.jpg",]
var description: Array<any> = ["Tomato sauce , Mozzarella & Fresh basil", "Tomato sauce , Mozzarella , Salame & Fresh basil ", "Tomato sauce, Mozzarella, Ricotta, Gorgonzola, Parmesan & Fresh basil", "Tomato sauce, Mozzarella, Spicy Salame, Chillies & Fresh basil", "Tomato sauce, Mozzarella, Ham, Mushrooms, Salame, Artichokes & Fresh basil", "Tomato sauce , Mozzarella & Fresh basil"]
var rating: Array<number> = [87, 94, 66, 42, 84, 77]
var price: Array<any> = ["7,50 $", "8,50 $", "8,50 $", "9,00 $", "9,50 $", "7,50 $"]


	// {
	// 	"name": "Margherita",
	// 	"img": "img/Margherita.jpg",
	// 	"description": "Tomato sauce , Mozzarella & Fresh basil",
	// 	"rating": 87,
	// 	"price": "7,50 $"
	// },
	// {
	// 	"name": "Salame",
	// 	"img": "img/salame.jpg",
	// 	"description": "Tomato sauce , Mozzarella , Salame & Fresh basil ",
	// 	"rating": 94,
	// 	"price": "8,50 $"
	// },
	// {
	// 	"name": "Quattro Formaggio",
	// 	"img": "img/quattro-formaggio.jpg",
	// 	"description": "Tomato sauce, Mozzarella, Ricotta, Gorgonzola, Parmesan & Fresh basil",
	// 	"rating": 66,
	// 	"price": "8,50 $"
	// },
	// {
	// 	"name": "Diavola",
	// 	"img": "img/diavola.jpg",
	// 	"description": "Tomato sauce, Mozzarella, Spicy Salame, Chillies & Fresh basil",
	// 	"rating": 42,
	// 	"price": "9,00 $"
	// },
	// {
	// 	"name": "Toscana",
	// 	"img": "img/la-toscana.jpg",
	// 	"description": "Tomato sauce, Mozzarella, Ham, Mushrooms, Salame, Artichokes & Fresh basil",
	// 	"rating": 84,
	// 	"price": "9,50 $"
	// },
	// {
	// 	"name": "Calzone",
	// 	"img": "img/calzone.jpg",
	// 	"description": "Tomato sauce , Mozzarella & Fresh basil",
	// 	"rating": 77,
	// 	"price": "7,50 $"
	// }]










for (var i = 0; i < product.length ; i++ ) {
	
 
    $('#inject').append(`<div class="card col-xl-3 col-lg-3  col-md-3 col-sm-4 col-xs-11 m-2 ml-5">
                <img class="card-img-top mt-3 " src="/images/pathToYourImage.png" alt="Card image cap">
                <div class="card-body product"></div>
                <div class="card-body description"></div>
                <div class="card-body">
                    <p class="prices"></p>
                    <p class="rating border border-success text-center mb-0 bg-success font-weight-bold offset-10 rounded-circle"></p>
                </div>
                <div class="btn-group mb-3" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary bg-success" id="plus">Like</button>
                    <button type="button" class="btn bg-danger">Dislike</button>
                </div>
            </div>`)
    $($('.product')[i]).append(product[i]);
    $($('.card-img-top')[i]).attr('src', img[i]);
    $($('.description')[i]).append(description[i]);
    $($('.rating')[i]).append(rating[i]);
    $($('.prices')[i]).append(price[i]);


$($(".btn-secondary")[i]).on('click', function() {
           var newrating:number = rating[i] + 1 ;
            $($(".rating")[i]).html(newrating);
            console.log(newrating);
              });




};

