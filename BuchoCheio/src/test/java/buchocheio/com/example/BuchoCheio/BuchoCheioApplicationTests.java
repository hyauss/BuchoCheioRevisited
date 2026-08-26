package buchocheio.com.example.BuchoCheio;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import buchocheio.com.example.BuchoCheio.Model.avaliacaoModel;
import buchocheio.com.example.BuchoCheio.Model.loginResponseModel;
import buchocheio.com.example.BuchoCheio.Model.pratoModel;
import buchocheio.com.example.BuchoCheio.Model.relatorioModel;
import buchocheio.com.example.BuchoCheio.Model.restauranteModel;
import buchocheio.com.example.BuchoCheio.Service.avaliacaoService;
import buchocheio.com.example.BuchoCheio.Service.pratoService;
import buchocheio.com.example.BuchoCheio.Service.relatorioService;
import buchocheio.com.example.BuchoCheio.Service.restauranteService;

@SpringBootTest
class BuchoCheioApplicationTests {

	@Autowired
	private restauranteService restauranteService;

	@Autowired
	private pratoService pratoService;

	@Autowired
	private avaliacaoService avaliacaoService;

	@Autowired
	private relatorioService relatorioService;

	// login válido
	@Test
	void verificarlogarTest() {
		restauranteModel restaurante = new restauranteModel(
				1L, // id
				List.of(10L, 20L, 30L), // idPratos
				"Rua das Flores, 123 - Centro", // endereco
				"Restaurante Sabor Caseiro", // nome
				"12.311231310", // cnpj
				"08:00 às 22:00", // horarioFuncionamento
				"(11) 98765-4321", // telefone
				"senhaSegura123", // senha
				0 // pratosVendidos
		);
		loginResponseModel resultado = restauranteService.loginRestaurante("12.345.678/0001-90", "senhaSegura123");
		assertTrue(resultado.isSuccess());
	}

	@Test
	void verificarCriacaoRestaurante() {

		restauranteModel restaurante = new restauranteModel(
				null,
				List.of(10L, 20L, 30L),
				"Rua das Flores, 123 - Centro",
				"Restaurante Sabor Caseiro",
				"1060111231212131dkdskdsds231313213231421",
				"08:00 às 22:00",
				"(11) 98765-4321",
				"senhaSegura123",
				0);

		restauranteModel retorno = restauranteService.cadastrarRestaurante(restaurante);

		assertNotNull(retorno);
		assertEquals(restaurante.getNome(), retorno.getNome());
		assertEquals(restaurante.getEndereco(), retorno.getEndereco());
		assertEquals(restaurante.getCnpj(), retorno.getCnpj());
		assertEquals(restaurante.getTelefone(), retorno.getTelefone());
	}

	@Test
	void verificarCadastrarPratos() {

		restauranteModel restaurante = new restauranteModel(
				null,
				List.of(10L, 20L, 30L),
				"Rua das Flores, 123 - Centro",
				"Restaurante Sabor Caseiro",
				"10601112312kjhlkja13123132131313sdadhlkhk1421",
				"08:00 às 22:00",
				"(11) 98765-4321",
				"senhaSegura123",
				0);

		restauranteModel retornoRestaurante = restauranteService.cadastrarRestaurante(restaurante);

		pratoModel prato = new pratoModel(
				null,
				retornoRestaurante.getId(),
				39.90f,
				"Feijoada",
				"Feijoada completa com acompanhamentos");

		pratoModel retorno = pratoService.addPrato(restaurante.getId(), prato);

		assertNotNull(retorno);
		assertNotNull(retorno.getId());
	}

	@Test
	void verificarCadastrarAvaliacao() {

		restauranteModel restaurante = new restauranteModel(
				null,
				List.of(10L, 20L, 30L),
				"Rua das Flores, 123 - Centro",
				"Restaurante Sabor Caseiro",
				"12.345.678/009011110000111111113321231",
				"08:00 às 22:00",
				"(11) 98765-4321",
				"senhaSegura123",
				0);

		// Criar avaliação para salvar
		avaliacaoModel avaliacao = new avaliacaoModel(
				null, // id gerado pelo banco
				1L, // restauranteId
				"bleble", // avaliação
				5 // nota
		);

		// Salvar avaliação
		avaliacaoModel retorno = avaliacaoService.saveAvaliacao(avaliacao);

		// Validações
		assertNotNull(retorno);
		assertNotNull(retorno.getId()); // banco deve gerar ID

		assertEquals(avaliacao.getRestauranteId(), retorno.getRestauranteId());
		assertEquals(avaliacao.getAvaliacao(), retorno.getAvaliacao());
		assertEquals(avaliacao.getNota(), retorno.getNota());
	}

	@Test
	void verificarBuildRelatorio() {
		relatorioModel relatorio = relatorioService.buildRelatorio();
		assertNotNull(relatorio);
	}
}
