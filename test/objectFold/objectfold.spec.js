var assert = require('assert')
var struct = require('./structure.json')
describe('how to aggregate object into list', function(){



    it('should aggregate an object into a list', function(done){
        var mappedList = function(structure, aggregateList) {
            console.log(Object.keys(structure))
            var keys = Object.keys(structure)
            for (var i in keys){

                if(typeof structure[keys[i]] === 'object'){
                    console.log(keys[i])
                    mappedList(structure[keys[i]], aggregateList);
                } else {
                    console.log(keys[i])
                    aggregateList.push(structure[keys[i]]);
                }
            }


            return aggregateList;
        }
        console.log(mappedList(struct, []))
        done()
    })
})