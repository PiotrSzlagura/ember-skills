import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateSkill(skill) {
      //let end = !skill.get(`step${step}`);
      //skill.set(`step${step}`, end);
      //console.log(`${skill} step${step} ` + end);
      //console.log(`Step: ${step}, current: ${currentState} end state: ${endState}`);
      skill.save();
      //alert(skill);
    },

    removeSkill(skill) {
      skill.destroyRecord();
    },


    addSkill() {
      const skillForm = this.get('model.new');

      if ( skillForm.get('validations.isValid') ) {

        let skill = this.store.createRecord('skill', {
          name: skillForm.name,
          step1: true,
          step2: false,
          step3: false
        });

        this.set("model.new.name", "");
      } else {
        alert('wtf?')
      }
    }
  }

});
