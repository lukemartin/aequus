# aequus

Responsive even-heights.

Demo: [http://codepen.io/luke/pen/JpaEm](http://codepen.io/luke/pen/JpaEm)

## Installation

Copy `aequus.min.js` to your scripts folder, and include it on your page. Then, either:

    // default options
    $('.container').aequus();
    
    // specify a selector
    $('.container').aequus('.item');
    
    // specify all options
    $('.container').aequus({
      targetSelector: '.item',
      resizeInRows: true
    });

Or, adjust your HTML:

    <div class="container js-aequus" data-aequus-options='{ "targetSelector": ".item" }'>
        <div class="item">...</div>
    </div>

## Local Development

    git clone
    npm install
    bower install
    gulp
    
## Packaging
    gulp package