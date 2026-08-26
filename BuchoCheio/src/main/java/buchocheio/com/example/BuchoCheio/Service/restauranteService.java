package buchocheio.com.example.BuchoCheio.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import buchocheio.com.example.BuchoCheio.Model.loginResponseModel;
import buchocheio.com.example.BuchoCheio.Model.restauranteModel;
import buchocheio.com.example.BuchoCheio.Repository.pratoRepository;
import buchocheio.com.example.BuchoCheio.Repository.restauranteRepository;

@Service
public class restauranteService {

	@Autowired
	private restauranteRepository restauranteRepository;

	@Autowired
	private pratoRepository pratoRepository;

	public boolean Verificarlogar(String id) {
		String dadoMocadoDoBanco = "asdsadsadsadsda";
		if (id == dadoMocadoDoBanco) {
			return true;
		} else {
			return false;
		}
	}

	public restauranteModel findRestauranteById(Long id) {
		restauranteModel restaurante = restauranteRepository.findRestauranteById(id);
		return restaurante;
	}

	public restauranteModel findRestauranteBycnpj(String id) {
		restauranteModel restaurante = restauranteRepository.findRestauranteBycnpj(id);
		return restaurante;
	}

	public List getAllRestaurantes() {
		return this.restauranteRepository.findAll();
	}

	public loginResponseModel loginRestaurante(String cnpj, String senha) {
		restauranteModel restaurante = restauranteRepository.findRestauranteBycnpj(cnpj);

		if (restaurante == null) {
			return new loginResponseModel(false, "Restaurante não cadastrado", null);
		}

		// Comparar conteúdo da String corretamente
		if (!senha.equals(restaurante.getSenha())) {
			return new loginResponseModel(false, "Senha incorreta", null);
		}

		return new loginResponseModel(true, "Login realizado com sucesso", restaurante);
	}

	public restauranteModel cadastrarRestaurante(restauranteModel restaurante) {
		restauranteModel restauranteBd = restauranteRepository.findRestauranteBycnpj(restaurante.getCnpj());
		if (restauranteBd != null) {
			return null;
		} else {
			return restauranteRepository.save(restaurante);
		}
	}
}