package buchocheio.com.example.BuchoCheio.Model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class restauranteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ElementCollection
    private List<Long> idPratos = new ArrayList<>();
    private String endereco;
    private String nome;

    @Column(unique = true, nullable = false)
    private String cnpj;

    private String horarioFuncionamento;
    private String telefone;
    private String senha;
    private int pratosVendidos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Long> getIdPratos() {
        return idPratos;
    }

    public void setIdPratos(List<Long> idPratos) {
        this.idPratos = idPratos;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getHorarioFuncionamento() {
        return horarioFuncionamento;
    }

    public void setHorarioFuncionamento(String horarioFuncionamento) {
        this.horarioFuncionamento = horarioFuncionamento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getPratosVendidos() {
        return pratosVendidos;
    }

    public void setPratosVendidos(int pratosVendidos) {
        this.pratosVendidos = pratosVendidos;
    }

    public restauranteModel(Long id, List<Long> idPratos, String endereco, String nome, String cnpj,
            String horarioFuncionamento, String telefone, String senha, int pratosVendidos) {
        this.id = id;
        this.idPratos = idPratos;
        this.endereco = endereco;
        this.nome = nome;
        this.cnpj = cnpj;
        this.horarioFuncionamento = horarioFuncionamento;
        this.telefone = telefone;
        this.senha = senha;
        this.pratosVendidos = pratosVendidos;
    }

    public restauranteModel() {
    }

}
