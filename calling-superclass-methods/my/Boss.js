define(["dojo/_base/declare", './Employee'], function(declare, Employee){
    return declare(Employee, {
      askForRaise: function(){
        return this.salary * 0.25;
      }
    });
  });