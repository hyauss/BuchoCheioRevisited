package buchocheio.com.example.BuchoCheio.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import buchocheio.com.example.BuchoCheio.Model.relatorioModel;

//TODO TER JWT 

@Repository
public interface relatorioRepository extends JpaRepository<relatorioModel, Long> {
    relatorioModel findAvaliacaoById(Long relatorioId);
}
