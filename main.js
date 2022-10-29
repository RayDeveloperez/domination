// Part One - Querying DOM Elements
// These functions don't need to return anything.

// Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
// Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.

function addStrikethrough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = 'line-through';
}

addStrikethrough();
/**
 * Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
 * 
*/

function setImage(id,url){

    let image = document.querySelector('#' + id);
        // or `#$(id)`
    image.src = url;
    //adjust height as needed
    image.style.height = '300px'


}
setImage('image-1','https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png')
setImage('image-2','https://elcomercio.pe/resizer/pqoIxl4h3_Xe7ChCxxDQP8GUykk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/66AM3SSB3ZGSJNU2TQAVJNHIWE.jpg')
setImage('image-3','https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon')

/**
 * This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
Now use it to remove the first two items from that list. You'll need to call it twice!
 */

function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}

removeArgument();
removeArgument();

/**
 * Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
Try using it to change the size of any text on the page.
 */

function fontSize(size,id){
    let id = document.querySelector(`#$(id)`);
    id.style.fontSize = size;
}

fontSize('50px',"head");
fontSize();

/**
 * Part Two - DOM Elements as Function Parameters
These functions will take in DOM elements as parameters. They also don't need to return anything.

Write a function that takes in a DOM element and appends it to the Arguments <ul>.

Let's use it! Create an image element in Javascript and pass it into your function.
 */

//element = ANY DOM Element
function addElementToList(element){
    let arguments = documents.querySelector('#arguments')
    arguments.appendChild(element);
}
let newImage = document.createElement('img');
newImage.src = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bmo-adventure-time-6-hatanaka-reiko.jpg'
newImage.style.height = "200px"
addElementToList(newImage)
/**
 * Write a function that takes in an image element and modifies its height to be 30 pixels.
Let's use it. Query an image element and then pass it into the function.
 */

function setImageSize(image){
    image.style.height = '30px'
}
setImageSize()
/**
 * Write a function that takes in an element and gives it the class invisible.
Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)
 */

function classInvisible(){

    let element = document.querySelector("body")   
    element.classInvisible 
}
classInvisible()
/**
 * Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.
Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
 */

function textLi(text){
   let newLi = document.createElement('li')
    newLi.innerText = text
    return newLi
}

/**
 * Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.
Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).
 */

function newHeader(hSize,text){
    let newHeader = document.createElement(`h$(header)`)
    newHeader.innerText = text;
}

