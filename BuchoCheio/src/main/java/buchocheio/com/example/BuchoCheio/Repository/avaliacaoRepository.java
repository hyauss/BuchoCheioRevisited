package buchocheio.com.example.BuchoCheio.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import buchocheio.com.example.BuchoCheio.Model.avaliacaoModel;

@Repository
public interface avaliacaoRepository extends JpaRepository<avaliacaoModel, Long> {
    avaliacaoModel findAvaliacaoById(Long avaliacaoId);
    List<avaliacaoModel> findByRestauranteId(Long restauranteId);
}
