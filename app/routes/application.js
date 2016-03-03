import Ember from 'ember';

import skillNew from '../models/skill_form';

export default Ember.Route.extend({
    model() {
      return {
        skills: this.store.findAll('skill'),
        new: skillNew.create({ container: this.get('container') })
      };
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
