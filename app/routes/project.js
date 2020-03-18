import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(id)
  {
    return RSVP.hash({
      project : id.project_id,
      story : this.get('store').findRecord('project', id.project_id).get('story')
    });
  }
});
