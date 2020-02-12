import Route from '@ember/routing/route';

export default class UserRoute extends Route
{
  model()
  {
    return {nom: 'J .SMITH', details: 'Détails divers sur SMITH...'}
  }
}
