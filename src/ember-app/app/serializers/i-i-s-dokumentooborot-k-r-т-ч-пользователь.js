import { Serializer as ТЧПользовательSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dokumentooborot-k-r-т-ч-пользователь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧПользовательSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
