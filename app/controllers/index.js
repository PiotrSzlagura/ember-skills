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


    addSkill(skillName) {

      if (skillName.length === 0 || skillName === undefined) {
        alert("Name can't be empty");
      }
      else if (skillName.length >= 30) {
        alert("Name is too long.");
      }
      else {
        let newSkill = this.store.createRecord('skill', {
          name: skillName,
          step1: true,
          step2: false,
          step3: false
        });


        newSkill.save();/*.then(function(myController){
         myController.set("skillName", "");
         });*/

        this.set("skillName", "");

      }
    }
  }

});
