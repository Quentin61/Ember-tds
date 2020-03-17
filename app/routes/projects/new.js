import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  actions:
    {
      new(project)
      {
        let self = this;
        this.get('store').createRecord('project',project).save().then(() => self.transitionTo('projects'));
      }
    },
    model()
    {
      return RSVP.hash({
        developer: this.get('store').findAll('developer'),
        project : EmberObject.create()
      })
    }
});
