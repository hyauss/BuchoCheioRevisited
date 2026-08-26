package buchocheio.com.example.BuchoCheio.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import buchocheio.com.example.BuchoCheio.Model.loginResponseModel;
import buchocheio.com.example.BuchoCheio.Model.restauranteModel;
import buchocheio.com.example.BuchoCheio.Service.restauranteService;



@RequestMapping("/buchoCheio") // agrupa os endpoints
@RestController

public class restauranteController {
    
    @Autowired
    private restauranteService restauranteService;
    
    @GetMapping("/findRestauranteById/{id}")
    public restauranteModel findRestauranteById(@PathVariable Long id) {
        return restauranteService.findRestauranteById(id);
    }

    @GetMapping("/findRestauranteBycnpj/{cnpj}")
    public restauranteModel findRestauranteBycnpj(@PathVariable String cnpj) {
        return restauranteService.findRestauranteBycnpj(cnpj);
    }

     @GetMapping("/restaurantes")
    public List getAllRestaurantes() {
        return restauranteService.getAllRestaurantes();
    }
    
    @GetMapping("/loginRestaurante/{cnpj}/{senha}")
    public loginResponseModel getMethodName(@PathVariable String cnpj,@PathVariable String senha) {
        return restauranteService.loginRestaurante(cnpj,senha);
    }

     @PostMapping("/cadastrarRestaurante")
    public restauranteModel cadastrarRestaurante(@RequestBody restauranteModel restaurante) {
        return restauranteService.cadastrarRestaurante(restaurante);
    }
}
