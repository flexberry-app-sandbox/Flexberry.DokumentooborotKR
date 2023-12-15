package DokumentooborotKR.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import DokumentooborotKR.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: РасДок
 */
@Entity(name = "IISDokumentooborotKRРасДок")
@Table(schema = "public", name = "РасДок")
public class RasDok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Утверждение")
    private String утверждение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "FormaDokumenta")
    @Convert("FormaDokumenta")
    @Column(name = "ФормаДокумента", length = 16, unique = true, nullable = false)
    private UUID _formadokumentaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "FormaDokumenta", insertable = false, updatable = false)
    private FormaDokumenta formadokumenta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "AvPolzovateli")
    @Convert("AvPolzovateli")
    @Column(name = "АвПользователи", length = 16, unique = true, nullable = false)
    private UUID _avpolzovateliid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "AvPolzovateli", insertable = false, updatable = false)
    private AvPolzovateli avpolzovateli;


    public RasDok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getУтверждение() {
      return утверждение;
    }

    public void setУтверждение(String утверждение) {
      this.утверждение = утверждение;
    }


}