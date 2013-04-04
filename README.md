#JavaScript Animated Bars

A simple widget to animate bars as the data set changes.  
Based on JavaScript for manipulation and CSS3 for animations. Uses JQuery to make things easier.  


##How to use it
The JavaScript logic takes care of updating the static data embedded in the HTML defining the bars. The actual animation is carried out through CSS3 tranitions.  
The bars are based on an HTML template that _can_ be modified, although attention must be paid to not break CSS selector references.


The CSS defining the appearance of the bars can be modified at will.  
The only CSS properties manipulated by the JS functions are the length of the bars (defaults to using `width`) and the `background-color` (`hsla()`).  

* Changing (or getting rid of) the color behaviour should be straightfoward, as one only needs to come up with a way to modify the color in relation to the length of a bar.
* If vertical bars are preferred, the JS variable `dimension` should be changed from `"width"` to `"height"`. Then the CSS should be updated to support verical bars (e.g. the labels within the bars could be rotated).

##More info:
[wonderingmachine](http://www.wonderingmachine.com/who)
