import Route from '@ember/routing/route';

export default Route.extend({
  model(developer) {
    return developer;
  },
  actions:
    {
      delete(developer) {
        let self = this;
        this.get('store').findRecord('developer', developer.id, {reload: true}).then(function (developer) {
          developer.destroyRecord().then(()=> self.transitionTo('developers'));
        });
      },
      cancel()
      {
        this.transitionTo('developers')
      }
    }
});
