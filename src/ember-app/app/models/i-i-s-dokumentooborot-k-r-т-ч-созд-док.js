import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧСоздДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot-k-r-т-ч-созд-док';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧСоздДокMixin, Validations, {
});

defineProjections(Model);

export default Model;
