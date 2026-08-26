package buchocheio.com.example.BuchoCheio.Service;

import org.springframework.stereotype.Service;
//abobrinha...
@Service
public class usuarioService {

	public  boolean Verificarlogar(String id){
		String dadoMocadoDoBanco= "asdsadsadsadsda";
		if(id == dadoMocadoDoBanco){
			return true;
		}else{
			return false;
		}
	}

}
