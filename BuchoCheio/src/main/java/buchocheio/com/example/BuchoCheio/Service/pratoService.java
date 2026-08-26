package buchocheio.com.example.BuchoCheio.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import buchocheio.com.example.BuchoCheio.Model.pratoModel;
import buchocheio.com.example.BuchoCheio.Model.restauranteModel;
import buchocheio.com.example.BuchoCheio.Repository.pratoRepository;
import buchocheio.com.example.BuchoCheio.Repository.restauranteRepository;
import jakarta.transaction.Transactional;

@Service
public class pratoService {

	@Autowired
	private restauranteRepository restauranteRepository;

	@Autowired
	private restauranteService restauranteService;

	@Autowired
	private pratoRepository pratoRepository;

	@Transactional
	public pratoModel addPrato(Long idRestaurante, pratoModel prato) {
		restauranteModel restaurante = restauranteService.findRestauranteById(idRestaurante);
		if (restaurante == null) {
			System.out.println("Restaurante não encontrado!");
			return null;
		}

		// Salva o prato no banco
		pratoRepository.save(prato);

		// Adiciona o ID do prato à lista do restaurante
		restaurante.getIdPratos().add(prato.getId());

		// Atualiza o restaurante
		restauranteRepository.save(restaurante);

		System.out.println("Prato adicionado com sucesso ao restaurante " + idRestaurante);

		return prato;
	}

	public boolean removePrato(Long idRestaurante, Long idPrato) {
		// Busca o restaurante pelo ID
		restauranteModel restaurante = restauranteService.findRestauranteById(idRestaurante);
		if (restaurante == null) {
			System.out.println("Restaurante não encontrado!");
			return false;
		}
		if (restaurante.getIdPratos().contains(idPrato) != true) {
			return false;
		}
		// Atualiza a lista no modelo
		restaurante.getIdPratos().remove(idPrato);
		// Deleta o prato no banco
		pratoRepository.deleteById(idPrato);
		// Persiste a alteração no banco
		restauranteRepository.save(restaurante);
		return true;
	}

	public List<pratoModel> getAllPratosRestaurante(Long restauranteId) {
		return this.pratoRepository.findByRestauranteId(restauranteId);
	}

	public restauranteModel adicionarPratos(Long restauranteId, List<pratoModel> pratos) {
    restauranteModel restaurante = restauranteRepository.findRestauranteById(restauranteId);
    	if (restaurante == null) {
        	throw new RuntimeException("Restaurante não encontrado com ID: " + restauranteId);
    	}
    	for (pratoModel prato : pratos) {
    		prato.setrestauranteId(restauranteId);
        	pratoModel pratoSalvo = pratoRepository.save(prato);
        	restaurante.getIdPratos().add(pratoSalvo.getId());
    	}
    	return restauranteRepository.save(restaurante);
	}
}