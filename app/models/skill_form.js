import Ember from 'ember';

import { validator, buildValidations } from 'ember-cp-validations';

const skillValidations = buildValidations({
  name: validator('length', {
      min: 5,
      max: 30
    })
});

export default Ember.Object.extend(skillValidations, {
  name: null
});
