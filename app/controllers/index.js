import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateSkill(skill) {
      /*let currentState = skillToChange.get(`step${step}`);
       let endState = !currentState;
       skillToChange.set(`step${step}`, endState);

       alert(`Step: ${step}, current: ${currentState} end state: ${endState}`);*/
      //this.store.findAll('skill').save();

      console.log("Działa")
    }
  }
});
