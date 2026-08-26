package buchocheio.com.example.BuchoCheio.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class pratoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long restauranteId;
    private float preco;

    public Long getRestauranteId() {
        return restauranteId;
    }

    public void setrestauranteId(Long restauranteId) {
        this.restauranteId = restauranteId;
    }

    private String nome;
    private String descricao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getPreco() {
        return preco;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public pratoModel(Long id, Long restauranteId, float preco, String nome, String descricao) {
        this.id = id;
        this.restauranteId = restauranteId;
        this.preco = preco;
        this.nome = nome;
        this.descricao = descricao;
    }

    public pratoModel() {
    }

}
