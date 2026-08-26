package buchocheio.com.example.BuchoCheio.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import buchocheio.com.example.BuchoCheio.Model.pratoModel;
import buchocheio.com.example.BuchoCheio.Model.restauranteModel;
import buchocheio.com.example.BuchoCheio.Service.pratoService;



@RequestMapping("/buchoCheio") // agrupa os endpoints
@RestController

public class pratoController {
    
    @Autowired
    private pratoService pratoService;

    @PostMapping("/addPrato/{idRestaurante}")
    public pratoModel addPrato(@PathVariable Long idRestaurante, @RequestBody pratoModel prato) {
        return pratoService.addPrato(idRestaurante, prato);
    }

    @DeleteMapping("/removePrato/{idRestaurante}/{idPrato}")
    public boolean removePrato(@PathVariable Long idRestaurante, @PathVariable Long idPrato) {
        return pratoService.removePrato(idRestaurante, idPrato);
    }

    @GetMapping("/restaurante/{idRestaurante}/pratos")
    public List getMethodName(@PathVariable Long idRestaurante) {
        return pratoService.getAllPratosRestaurante(idRestaurante);
    }

     @PostMapping("/restaurante/{id}/pratos")
    public restauranteModel adicionarPratos(@PathVariable Long id, @RequestBody List<pratoModel> pratos) {
        return pratoService.adicionarPratos(id, pratos);
    }

}
