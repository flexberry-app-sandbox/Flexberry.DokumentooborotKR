import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-dokumentooborot-k-r-хр-док-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-dokumentooborot-k-r-т-ч-созд-док+формаДокумента':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'формаДокумента',
            projection: 'ФормаДокументаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-dokumentooborot-k-r-т-ч-утверж-док+расДок':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'дата',
            required: true,
            relationName: 'расДок',
            projection: 'РасДокL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
