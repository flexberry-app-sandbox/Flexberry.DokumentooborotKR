import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСохранения: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧСоздДок: DS.hasMany('i-i-s-dokumentooborot-k-r-т-ч-созд-док', { inverse: 'хрДок', async: false }),
  тЧУтвержДок: DS.hasMany('i-i-s-dokumentooborot-k-r-т-ч-утверж-док', { inverse: 'хрДок', async: false })
});

export let ValidationRules = {
  датаСохранения: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-хр-док.validations.датаСохранения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧСоздДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-хр-док.validations.тЧСоздДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧУтвержДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-хр-док.validations.тЧУтвержДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХрДокE', 'i-i-s-dokumentooborot-k-r-хр-док', {
    датаСохранения: attr('Дата сохранения', { index: 0 }),
    тЧСоздДок: hasMany('i-i-s-dokumentooborot-k-r-т-ч-созд-док', 'Созданные документы', {
      формаДокумента: belongsTo('i-i-s-dokumentooborot-k-r-форма-документа', 'Наименование документа', {
        наименование: attr('Наименование документа', { index: 1, hidden: true }),
        содержание: attr('Описание', { index: 2 }),
        авПользователи: belongsTo('i-i-s-dokumentooborot-k-r-ав-пользователи', '', {
          сотрудники: belongsTo('i-i-s-dokumentooborot-k-r-сотрудники', '', {
            фИОСотрудника: attr('Ответственный', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    }),
    тЧУтвержДок: hasMany('i-i-s-dokumentooborot-k-r-т-ч-утверж-док', 'Рассмотренные документы', {
      расДок: belongsTo('i-i-s-dokumentooborot-k-r-рас-док', 'Рассмотренные документы', {
        дата: attr('Дата', { index: 1 }),
        авПользователи: belongsTo('i-i-s-dokumentooborot-k-r-ав-пользователи', '', {
          сотрудники: belongsTo('i-i-s-dokumentooborot-k-r-сотрудники', '', {
            фИОСотрудника: attr('Утверждающее лицо', { index: 2 }),
            отделы: attr('Утверждающий отдел', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true }),
        формаДокумента: belongsTo('i-i-s-dokumentooborot-k-r-форма-документа', '', {
          наименование: attr('Наименование документа', { index: 4 })
        }, { index: -1, hidden: true }),
        утверждение: attr('Статус решения', { index: 5 })
      }, { index: 0, displayMemberPath: 'дата' })
    })
  });

  modelClass.defineProjection('ХрДокL', 'i-i-s-dokumentooborot-k-r-хр-док', {
    датаСохранения: attr('Дата сохранения', { index: 0 })
  });
};
