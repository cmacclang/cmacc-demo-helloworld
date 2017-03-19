var assert = require('assert')
var struct = require('./structure.json')
describe('how to aggregate object into list', function(){



    it('should aggregate an object into a list and update the struct', function(done){
        var mappedList = function(structure, aggregateList, root) {

            var keys = Object.keys(structure)
            for (var i in keys){

                if(typeof structure[keys[i]] === 'object'){

                    mappedList(structure[keys[i]], aggregateList, root  + keys[i].toString() + '.');
                } else {

                    aggregateList.push({key:keys[i], value:"newvalue",path:root});
                }
            }


            return aggregateList;
        }
        var agg = mappedList(struct, [], "")


        var setToValue = function (obj, value, path) {
            var i;
            path = path.split('.');
            for (i = 0; i < path.length - 1; i++)
                obj = obj[path[i]];

            obj[path[i]] = value;
        }
        setToValue(struct, agg[0].value, agg[0].path + agg[0].key)
        console.log(struct)
        done()
    })
})