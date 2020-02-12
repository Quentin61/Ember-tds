import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  MAX:100,
  content:"",
  size: computed("content", function(){
    return this.get("MAX")-this.get("content").length;
  }),
  info:"",
  style:computed("content", function () {
    if(this.get("size")<20)
      return "alert-danger";
    if(this.get("size")<50)
      return "alert-warning";
  }),
  alertVisible:computed('info', function () {
    return this.get('info').length!==0;
  })
});
