package buchocheio.com.example.BuchoCheio.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import buchocheio.com.example.BuchoCheio.Model.restauranteModel;

@Repository

public interface restauranteRepository extends JpaRepository<restauranteModel, Long> {
    restauranteModel findRestauranteById(Long restauranteId);
    restauranteModel findRestauranteBycnpj(String cnpj);
}
