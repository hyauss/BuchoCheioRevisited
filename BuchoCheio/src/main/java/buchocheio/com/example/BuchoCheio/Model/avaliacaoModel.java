package buchocheio.com.example.BuchoCheio.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class avaliacaoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long restauranteId;
    private String avaliacao;
    private int nota;

    public Long getId() {
        return id;
    }
    public int getNota() {
        return nota;
    }
    public void setNota(int nota) {
        this.nota = nota;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getRestauranteId() {
        return restauranteId;
    }
    public void setRestauranteId(Long restauranteId) {
        this.restauranteId = restauranteId;
    }
    public String getAvaliacao() {
        return avaliacao;
    }
    public void setAvaliacao(String avaliacao) {
        this.avaliacao = avaliacao;
    }

    public avaliacaoModel() {
        this.restauranteId = null;
        this.avaliacao = "";
        this.nota=-1;
    }
    public avaliacaoModel(Long id, Long restauranteId, String avaliacao, int nota) {
        this.id = id;
        this.restauranteId = restauranteId;
        this.avaliacao = avaliacao;
        this.nota = nota;
    }
}
