import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({

  model(id)
  {
    //let developer = this.get('store').findAll('developer');
    return RSVP.hash({
      story : EmberObject.create(),
      project : id
    })
  },
  actions:
    {
      new(story, id)
      {
        let self = this;
        let project = this.get('store').findRecord('developer', id.project_id);
        if(project.get('stories')===undefined)
        {
          project.set('stories', "[]").save();
        }
        project.get('stories').pushObject(story);
      },
      cancel()
      {
          this.transitionTo('story')
      }
    }
});
