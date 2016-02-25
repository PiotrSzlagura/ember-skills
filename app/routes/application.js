import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('skill');
    },

    actions: {
      updateSkill(skill, step) {
        let end = !skill.get(`step${step}`);
        skill.set(`step${step}`, end);
        console.log(`${skill} step${step} ` + end);
        //console.log(`Step: ${step}, current: ${currentState} end state: ${endState}`);
        skill.save();
        alert(skill);

      },

  }

});
