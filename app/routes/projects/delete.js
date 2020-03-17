import Route from '@ember/routing/route';

export default Route.extend({
  actions:
    {
      delete(project)
      {
        let self = this;
        this.get('store').findRecord('project', project.id, {reload: true}).then(function (project) {
          project.destroyRecord().then(()=> self.transitionTo('projects'));
        });
      }
    },
  model(id)
  {
    return this.get('store').findRecord('project', id.project_id)
  }
});
