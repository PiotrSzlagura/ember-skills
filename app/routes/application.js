import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('skill');
    },

    actions: {
      addSkill(skillName) {
        if(skillName.length === 0 || skillName === undefined)
        {
          alert("Name can't be empty");
          return false;
        }
        else if(skillName.length >= 30)
        {
          alert("Name is too long.");
          return false;
        }
        else
        {
          let newSkill = this.store.createRecord('skill', {
            name: skillName,
            step1: true,
            step2: false,
            step3: false
          });
          newSkill.save();
          this.controller.set('skillName', '');
        }
      },
      updateSkill(skill, step) {
        let end = !skill.get(`step${step}`);
        skill.set(`step${step}`, end);
        console.log(`${skill} step${step} ` + end);
        //console.log(`Step: ${step}, current: ${currentState} end state: ${endState}`);
        skill.save();
        alert(skill);

      }
  }

});
