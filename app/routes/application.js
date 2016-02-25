import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('skill');
    },

    actions: {
    addSkill(skillName) {
      let newSkill = this.store.createRecord('skill', {
        name: skillName,
        step1: true,
        step2: false,
        step3: false
      });

      newSkill.save();

      this.controller.set('skillName', '');
    },
  }

});
