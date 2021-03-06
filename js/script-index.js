$(document).ready( function(){

	//console.log("¡Estoy listo!");

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
		//Esconde flecha junto a menu
	$(".js-back").hide();
	//printNews();



	function printNews(){
		//$("#newRecipes").text("Nuevas Recetas");
	}

	 renderActivities(activitiesArray);

});

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
/*	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true) {
			console.log('Recipes: ', recipesArray[i]);
			renderRecipe(recipesArray[i]);
		}

	}*/
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
/*	console.log('Voy a pintar la receta: ', recipe);
	var arefh = $("<a/>", {'class': 'item-recipe'});
	var span1 = $("<span/>", {'class': 'attribution'});
	var span2 = $("<span/>", {'class': 'title-recipe'}); 
	span2.text(recipe.title);
	var span3 = $("<span/>", {'class': 'metadata-recipe'});
	var span4 = $("<span/>", {'class': 'author-recipe'});
	span4.text(recipe.source.name);
	var span5 = $("<span/>", {'class': 'bookmarks-recipe'});
	var span6 = $("<span/>", {'class': 'icon-bookmark'});
	var imageRece = $("<img/>", {'src': 'img/recipes/320x350/'+recipe.name+'.jpg'});
	//<img src="../img/recipes/320x350/spring-spanish-asparagus-revuelto.jpg"/>"
	$(".list-recipes").append(arefh);
	$(arefh).append(span1);
	$(span1).append(span2);
	$(span2).after(span3);
	$(span3).append(span4);
	$(span4).after(span5);
	$(span5).append(span6);
	$(span1).after(imageRece);*/



}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	
	console.log('Activities: ', activitiesArray);
	if (activitiesArray.length >= 0) {
		$(".wrapper-message").hide();	
	}

}



/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {

console.log('Voy a pintar la actividad: ', activity);

	var template =
	'<a href="#" class="item-activity">' + 
		'<span class="attribution">' +
			'<span class="avatar">' +
      			'<img src="<%= userAvatar %>" class="image-avatar">'+
    		'</span>'+
    		'<span class="meta">'+
		      '<span class="author"><%= userName %></span> made'+ 
		      '<span class="recipe"><%= recipeName %></span> <%= activity.text %>)'+ 
		      '<span class="location">&mdash; <%= place %></span>'+
		    '</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(&quot;<%= image %>&quot;)"></div>'+
	'</a>';

	var compiled = _.template(template);
    var a = compiled ({activity:activity});
    console.log(a);

    var elemento = $(a);
    $('.list-activities').append(elemento);


 /*var xnombre = _.template(template);
 var listaactivities = xnombre(recipe);
	console.log('listaactivities ', listaactivities);
	var elemento = $(listaactivities);

	$('.list-activities').append(elemento);*/

	
}


