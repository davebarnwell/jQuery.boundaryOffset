(function( $ ) {
  $.fn.boundaryOffset = function(posStr) {
    // return the offset relative to the document of the
    // of the first matched elements
    // corner or side as indicated by posStr = N|NE|E|SE|S|SW|W|NW|C
    // note a position of C is used to return the center of the element
    var result = false;
    var offset = this.offset();
    var width = this.outerWidth();
    var height = this.outerHeight();
    if (/^N|NE|E|SE|S|SW|W|NW$/.test(posStr)) {
      switch(posStr) {
        case 'N':
          result = {
            'top': offset.top,
            'left': offset.left+Math.floor(width/2)
          };
          break;
        case 'NE':
          result = {
            'top': offset.top,
            'left': offset.left+width
          };
          break;
        case 'E':
          result = {
            'top': offset.top+Math.floor(height/2),
            'left': offset.left+width
          };
          break;
        case 'SE':
          result = {
            'top': offset.top+height,
            'left': offset.left+width
          };
          break;
        case 'S':
          result = {
            'top': offset.top+height,
            'left': offset.left+Math.floor(width/2)
          };
          break;
        case 'SW':
          result = {
            'top': offset.top+height,
            'left': offset.left
          };
          break;
        case 'W':
          result = {
            'top': offset.top+Math.floor(height/2),
            'left': offset.left
          };
          break;
        case 'NW':
          result = {
            'top': offset.top,
            'left': offset.left
          };
          break;
        case 'C':
          // special compass point 'C' for returning the centre of the element
          // relative to the document
          result = {
            'top': offset.top+Math.floor(height/2),
            'left': offset.left+Math.floor(width/2)
          };
          break;
      }
    }
    return result;
  };
})( jQuery );
