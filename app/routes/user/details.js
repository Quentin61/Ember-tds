import Route from '@ember/routing/route';

export default class UserDetailsRoute extends Route
{
  actions={
    fermer()
    {
      this.transitionTo("user");
    }
  }
}
