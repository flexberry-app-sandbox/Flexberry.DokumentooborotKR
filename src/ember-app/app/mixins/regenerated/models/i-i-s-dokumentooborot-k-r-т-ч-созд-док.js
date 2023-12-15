import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  формаДокумента: DS.belongsTo('i-i-s-dokumentooborot-k-r-форма-документа', { inverse: null, async: false }),
  хрДок: DS.belongsTo('i-i-s-dokumentooborot-k-r-хр-док', { inverse: 'тЧСоздДок', async: false })
});

export let ValidationRules = {
  формаДокумента: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-т-ч-созд-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хрДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-т-ч-созд-док.validations.хрДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоздДокE', 'i-i-s-dokumentooborot-k-r-т-ч-созд-док', {
    формаДокумента: belongsTo('i-i-s-dokumentooborot-k-r-форма-документа', 'Наименование документа', {
      наименование: attr('Наименование документа', { index: 1, hidden: true }),
      содержание: attr('Описание', { index: 2 }),
      авПользователи: belongsTo('i-i-s-dokumentooborot-k-r-ав-пользователи', '', {
        сотрудники: belongsTo('i-i-s-dokumentooborot-k-r-сотрудники', '', {
          фИОСотрудника: attr('Ответственный', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
