import { Serializer as ТЧПраваSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dokumentooborot-k-r-т-ч-права';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧПраваSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
