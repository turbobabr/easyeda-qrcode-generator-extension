function Path() {
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  rect: function(x, y, w, h) {
    this._ += `M${x} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x} ${y + h} Z`;
  },
  toString: function() {
    return this._;
  }
};

export default path;