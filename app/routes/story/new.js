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
        /*let self = this;
        let project = this.get('store').findRecord('developer', id.project_id);
        let arrayStories = project.get('story');
        let finalArray = arrayStories.concat(story);*/
      },
      cancel()
      {
          this.transitionTo('story')
      }
    }
});
