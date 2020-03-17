import Route from '@ember/routing/route';

export default Route.extend({
  actions:
    {
      add(name)
      {
        let self = this;
        this.get('store').createRecord('developer',
          {
            identity : name
          }).save().then(() => self.transitionTo('developers'));
      }
    }
});
