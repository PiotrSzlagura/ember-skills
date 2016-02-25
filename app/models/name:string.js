import DS from 'ember-data';

export default DS.Model.extend({
  step1: DS.attr('boolean'),
  step2: DS.attr('boolean'),
  step3: DS.attr('boolean')
});
