// $(document).ready(function(){
  
  // Write your JQuery here!

// });

function PageController(pages) {
  this.allPages = pages.children;
}


PageController.prototype.changePage = function() {

  var showHidePage = function(el, index, ar) {

  }

  console.log(this.allPages);
  this.allPages.forEach(showHidePage);
}

// grid stuff
// higher number, less of a space hog
var spaceHog = 1.6;

// get container size
const container = document.querySelector('.layout');
const contWidth = container.getBoundingClientRect().width;

// get item size
const items = document.querySelectorAll('.layout li');
const itemWidth = items[0].getBoundingClientRect().width;

// divide container by item
// half that is rough row item count
const roughColCount = Math.floor( (contWidth/itemWidth)/spaceHog );

// get total items
const totalItems = items.length;

// divide by rough row item count gives row count
const roughRowCount = Math.floor(totalItems/roughColCount);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// loop over each row
for (let i=0; i<roughRowCount; i++) {
  
  // while counter is less than itemcount
  var itemCounter = 0;
  while (itemCounter<totalItems) {
    // randomise row item count
    var colCount = randomColCount+(getRandomIntInclusive(-3,3));
    console.log(colCount);
    
    itemCounter++;
  }
  
  
}

// randomise row offset
// for rowcount place items