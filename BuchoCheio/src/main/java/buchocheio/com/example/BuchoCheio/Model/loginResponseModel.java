package buchocheio.com.example.BuchoCheio.Model;

//trocar isso talvez para um http model e devolver tuplas com objeto e resposta

public class loginResponseModel {
    private boolean success;
    private String message;
    private restauranteModel restaurante;

    // Construtores
    public loginResponseModel(boolean success, String message, restauranteModel restaurante) {
        this.success = success;
        this.message = message;
        this.restaurante = restaurante;
    }

    // Getters e setters
    public boolean isSuccess() { return success; }
    public String getMessage() { return message; }
    public restauranteModel getRestaurante() { return restaurante; }
}
