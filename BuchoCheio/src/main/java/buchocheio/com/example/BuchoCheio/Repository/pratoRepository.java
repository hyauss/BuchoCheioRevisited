package buchocheio.com.example.BuchoCheio.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import buchocheio.com.example.BuchoCheio.Model.pratoModel;

@Repository

public interface pratoRepository extends JpaRepository<pratoModel, Long> {
    pratoModel findPratoById(Long pratoId);
    List<pratoModel> findByRestauranteId(Long restauranteId);
}
