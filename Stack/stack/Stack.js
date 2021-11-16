// in "stack/Stack.js"
define([
  "dojo/_base/declare"
], function(
  declare
){
  return declare(null, {

    constructor: function(){
      this.items = [];
      this.count = 0;
    },

    push: function(element){
      this.items[this.count] = element
      this.count++
    },

    pop: function(){
      if(this.isEmpty()) {
        return undefined
      }
      this.count--;
      const result = this.items[this.count];
      delete this.items[this.count]
      console.log(result)
        return result;
    },

    peek: function(){
      return this.items[this.items.length - 1]
    },

    isEmpty: function(){
      return this.items.length === 0;
    },

    size: function(){
      return this.items.length
    },

    clear: function(){
      this.items = [];
    },

    toString: function() {
      if(this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[0]}`;
      for (let i = 1; i < this.count; i++) {
        objString = `${objString}, ${this.items[i]}`;
      }
      return objString;
    }

  });
});