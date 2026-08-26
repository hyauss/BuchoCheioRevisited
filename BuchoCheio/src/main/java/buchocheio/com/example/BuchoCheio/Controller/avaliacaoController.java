package buchocheio.com.example.BuchoCheio.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import buchocheio.com.example.BuchoCheio.Model.avaliacaoModel;
import buchocheio.com.example.BuchoCheio.Service.avaliacaoService;

@RequestMapping("/buchoCheio") // agrupa os endpoints
@RestController

public class avaliacaoController {

    @Autowired
    private avaliacaoService avaliacaoService;

    @GetMapping("/avaliacao")
    public List getAllAvaliacoes() {
        return avaliacaoService.getAllAvaliacoes();
    }

    @GetMapping("/avaliacao/restaurante/{id}")
    public List<avaliacaoModel> findAvalicaoByRestauranteId(@PathVariable Long id) {
        return avaliacaoService.findAvalicaoByRestauranteId(id);
    }

    @PostMapping("/avaliacao")
    public avaliacaoModel saveAvaliacao(@RequestBody avaliacaoModel avalicao) {
        return this.avaliacaoService.saveAvaliacao(avalicao);
    }
}
