import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot-k-r-рас-док', 'Unit | Serializer | i-i-s-dokumentooborot-k-r-рас-док', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentooborot-k-r-рас-док',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentooborot-k-r-отделы',
    'transform:i-i-s-dokumentooborot-k-r-пол',
    'transform:i-i-s-dokumentooborot-k-r-права-пол',
    'transform:i-i-s-dokumentooborot-k-r-утверждение',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
