import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  должность: DS.attr('string')
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-r-должности.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-dokumentooborot-k-r-должности', {
    iDДолжности: attr('ID Должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-dokumentooborot-k-r-должности', {
    iDДолжности: attr('ID Должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });
};
