import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОтделыEnum from '../enums/i-i-s-dokumentooborot-k-r-отделы';

export default FlexberryEnum.extend({
  enum: ОтделыEnum,
  sourceType: 'IIS.DokumentooborotKR.Отделы'
});
