import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code : DS.attr('string'),
  detail : DS.attr('string'),
  project : DS.belongsTo('project'),
  developer : DS.belongsTo('developer'),
  tags : DS.hasMany('tag')
});
