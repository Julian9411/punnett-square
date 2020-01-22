'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class PunnettSquare {
  constructor(traits) {
    this.traits = traits;
  }

  cross(mom, dad, mom2, dad2, mom3, dad3, mom4, dad4, mom5, dad5, mom6, dad6, mom7, dad7) {
    const square = [];
    _.each(mom, momTrait => {
      _.each(dad, dadTrait => {
        _.each(mom2, momTrait2 => {
          _.each(dad2, dadTrait2 => {
            _.each(mom3, momTrait3 => {
              _.each(dad3, dadTrait3 => {
                _.each(mom4, momTrait4 => {
                  _.each(dad4, dadTrait4 => {
                    _.each(mom5, momTrait5 => {
                      _.each(dad5, dadTrait5 => {
                        _.each(mom6, momTrait6 => {
                          _.each(dad6, dadTrait6 => {
                            _.each(mom7, momTrait7 => {
                              _.each(dad7, dadTrait7 => {
                                if (this.traits.indexOf(momTrait) > -1 && this.traits.indexOf(dadTrait) > -1 && this.traits.indexOf(momTrait2) > -1 && this.traits.indexOf(dadTrait2) > -1) {
                                  square.push(`${momTrait}${dadTrait}${momTrait2}${dadTrait2}${momTrait3}${dadTrait3}${momTrait4}${dadTrait4}${momTrait5}${dadTrait5}${momTrait6}${dadTrait6}${momTrait7}${dadTrait7}`);
                                };
                              })
                            })
                          })
                        })
                      })
                    })        
                  });
                });        
              });
          });   
      });
    });
   });
  });
    return square;
 };

  visible(alleles) {
    return this.traits.indexOf(alleles[0]) < this.traits.indexOf(alleles[1]) ? alleles[0] : alleles[1];
  }

  breed(mom, dad) {
    const alleles = _.sample(this.cross(mom, dad));
    const trait = this.visible(alleles);

    return {
      alleles,
      trait
    };
  }
}
exports.default = PunnettSquare;