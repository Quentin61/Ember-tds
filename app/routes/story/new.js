import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({

  model(project)
  {
    return RSVP.hash({
      developer : this.get('store').findAll('developer'),
      story : EmberObject.create(),
      project : this.get('store').findRecord('project',project.project_id)
    })
  },
  actions:
    {
      new(story, project)
      {
        story.set('project',project);
        this.get('store').createRecord('story', story).save().then(()=>
            this.transitionTo('project',project.id)
        );
      },
      cancel()
      {
          this.transitionTo('story')
      }
    }
});
