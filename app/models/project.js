import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name : DS.attr('string'),
    detail : DS.attr('string'),
    startDate : DS.attr('utc'),
    dueDate : DS.attr('utc'),
    developer : DS.belongsTo('developer'),
    stories : DS.hasMany('story')
});
