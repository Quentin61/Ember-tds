import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  actions:
    {
      edit(project) {
        let self = this;
        project.save().then(() => self.transitionTo("projects"));
      },
      cancel()
      {
        this.transitionTo('projects')
      }
    },
  model(id)
  {
    return RSVP.hash({
      developer: this.get('store').findAll('developer'),
      project : this.get('store').findRecord('project',id.project_id)
    })
  }
});
