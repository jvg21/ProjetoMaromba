package br.pucpr.exemplo.pedido.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
public class PedidoDTO {

    @Id
    private Integer id;

    private Integer idCliente;
    private String produto;
    private String dataEntrega;
    private Double valor;
    private String entrega;
    private String metodo;

}
