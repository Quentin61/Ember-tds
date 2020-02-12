import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  dispoItems:[],
  includedItems: [],
  dispoItemsIds_: [],
  includedItemsIds_:[],
  dispoItems_:computed("dispoItems_.[]", function(){
    let stock = [];
    this.get('dispoItemsIds_').forEach(dispoItem => {
      stock.push(this.get('dispoItems').find(item => item.id === dispoItem.id))
    });
    return stock;
  }),
  includedItems_:computed("includedItemsIds_.[]", function () {
    let stock = [];
    this.get('includedItemsIds_').forEach(includedItem => {
      stock.push(this.get('includedItems').find(item => item.id === includedItem.id))
    });
    return stock;
  })
});
