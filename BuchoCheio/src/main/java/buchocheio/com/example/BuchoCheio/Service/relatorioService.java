package buchocheio.com.example.BuchoCheio.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import buchocheio.com.example.BuchoCheio.Model.relatorioModel;
import buchocheio.com.example.BuchoCheio.Model.restauranteModel;
import buchocheio.com.example.BuchoCheio.Repository.relatorioRepository;
import buchocheio.com.example.BuchoCheio.Repository.restauranteRepository;

@Service
public class relatorioService {

    @Autowired
    private restauranteRepository restauranteRepository;

    @Autowired
    private relatorioRepository relatorioRepository;
    
    public relatorioModel buildRelatorio() {
        // Conta o total de restaurantes ativos
        long qtdRestaurantes = restauranteRepository.count();

        // Busca todos os restaurantes
        List<restauranteModel> restauranteList = restauranteRepository.findAll();

        // Soma o total de pratos vendidos por todos os restaurantes
        int qtdePratos = restauranteList.stream()
                .mapToInt(restauranteModel::getPratosVendidos)
                .sum();

        // Cria o relatório
        relatorioModel relatorio = new relatorioModel();
        relatorio.setRestaurantesAtivos((int) qtdRestaurantes);
        relatorio.setQtdePratos(qtdePratos);
        relatorioRepository.save(relatorio);
        return relatorio;
    }

}