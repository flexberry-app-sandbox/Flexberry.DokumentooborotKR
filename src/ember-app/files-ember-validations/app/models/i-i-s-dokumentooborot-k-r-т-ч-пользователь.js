import {
  defineNamespace,
  defineProjections,
  Model as ТЧПользовательMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot-k-r-т-ч-пользователь';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧПользовательMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
