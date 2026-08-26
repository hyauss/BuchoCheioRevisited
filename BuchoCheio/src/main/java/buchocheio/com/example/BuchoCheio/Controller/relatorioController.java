package buchocheio.com.example.BuchoCheio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import buchocheio.com.example.BuchoCheio.Model.relatorioModel;
import buchocheio.com.example.BuchoCheio.Service.relatorioService;

@RequestMapping("/buchoCheio") // agrupa os endpoints
@RestController

public class relatorioController {
      @Autowired
      private relatorioService relatorioService;

    
    @GetMapping("/buildRelatorio")
    public relatorioModel buildRelatorio() {
        return relatorioService.buildRelatorio();
    }
}