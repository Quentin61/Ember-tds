import Route from '@ember/routing/route';

export default Route.extend({
  model(developer)
  {
    return developer;
  },
  actions:
  {
    edit(name,developer)
    {
      let self = this;
      this.get('store').findRecord("developer", developer.id).then(function (developer) {
          developer.set('identity',name);
          self.transitionTo('developers');
      })
    },
    cancel()
    {
      this.transitionTo('developers')
    }
  }
});
