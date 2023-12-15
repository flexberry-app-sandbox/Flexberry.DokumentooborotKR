import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot-k-r-т-ч-права', 'Unit | Model | i-i-s-dokumentooborot-k-r-т-ч-права', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dokumentooborot-k-r-ав-пользователи',
    'model:i-i-s-dokumentooborot-k-r-вход-в-систему',
    'model:i-i-s-dokumentooborot-k-r-должности',
    'model:i-i-s-dokumentooborot-k-r-рас-док',
    'model:i-i-s-dokumentooborot-k-r-сотрудники',
    'model:i-i-s-dokumentooborot-k-r-т-ч-пользователь',
    'model:i-i-s-dokumentooborot-k-r-т-ч-права',
    'model:i-i-s-dokumentooborot-k-r-т-ч-созд-док',
    'model:i-i-s-dokumentooborot-k-r-т-ч-утверж-док',
    'model:i-i-s-dokumentooborot-k-r-форма-документа',
    'model:i-i-s-dokumentooborot-k-r-хр-док',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
