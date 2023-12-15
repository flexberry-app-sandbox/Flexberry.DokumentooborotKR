import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВхода: DS.attr('date'),
  тЧПользователь: DS.hasMany('i-i-s-dokumentooborot-k-r-т-ч-пользователь', { inverse: 'входВСистему', async: false })
});

export let ValidationRules = {
  датаВхода: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-вход-в-систему.validations.датаВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧПользователь: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-вход-в-систему.validations.тЧПользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходВСистемуE', 'i-i-s-dokumentooborot-k-r-вход-в-систему', {
    датаВхода: attr('Дата входа', { index: 0 }),
    тЧПользователь: hasMany('i-i-s-dokumentooborot-k-r-т-ч-пользователь', 'Пользователь', {
      авПользователи: belongsTo('i-i-s-dokumentooborot-k-r-ав-пользователи', 'ID Пользователя', {
        сотрудники: belongsTo('i-i-s-dokumentooborot-k-r-сотрудники', '', {
          фИОСотрудника: attr('ФИО Сотрудника', { index: 1 })
        }, { index: -1, hidden: true }),
        логин: attr('Логин', { index: 2, hidden: true }),
        пароль: attr('Пароль', { index: 3 })
      }, { index: 0, displayMemberPath: 'iDПользователя' })
    })
  });

  modelClass.defineProjection('ВходВСистемуL', 'i-i-s-dokumentooborot-k-r-вход-в-систему', {
    датаВхода: attr('Дата входа', { index: 0 })
  });
};
