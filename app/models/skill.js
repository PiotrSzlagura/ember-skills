import Ember from 'ember';
import DS from 'ember-data';

import {
  validator, buildValidations
}
from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('length', {
      min: 5,
      max: 30
    }),
});

export default DS.Model.extend(Validations, {
  'name': DS.attr('string'),
  'step1': DS.attr('boolean'),
  'step2': DS.attr('boolean'),
  'step3': DS.attr('boolean')
});
