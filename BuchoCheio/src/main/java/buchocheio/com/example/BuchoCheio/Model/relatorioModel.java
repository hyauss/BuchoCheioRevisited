package buchocheio.com.example.BuchoCheio.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class relatorioModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int qtdePratos;
    private int restaurantesAtivos;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public int getQtdePratos() {
        return qtdePratos;
    }
    public void setQtdePratos(int qtdePratos) {
        this.qtdePratos = qtdePratos;
    }
    public int getRestaurantesAtivos() {
        return restaurantesAtivos;
    }
    public void setRestaurantesAtivos(int restaurantesAtivos) {
        this.restaurantesAtivos = restaurantesAtivos;
    }

    public relatorioModel(Long id, int qtdePratos, int restaurantesAtivos) {
        this.id = id;
        this.qtdePratos = qtdePratos;
        this.restaurantesAtivos = restaurantesAtivos;
    }

    public relatorioModel() {
    }

    
}
