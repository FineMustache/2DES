CREATE VIEW vw_itens
    AS
        -- body of the view
        SELECT i.pedido_id, i.pizza_id, i.quantidade, i.valor, p.nome
        FROM itens_pedido i
        INNER JOIN pizzas p
        ON i.pizza_id = p.pizza_id ORDER BY i.pedido_id;

CREATE VIEW vw_pedidos
    AS
        -- body of the view
        SELECT i.pedido_id, pe.cliente_id, pe.data, pe.hora, i.pizza_id, i.quantidade, i.valor, p.nome, p.valor as "Valor da Pizza", (p.valor * i.quantidade) as "Subtotal", pe.valor as "Total"
        FROM itens_pedido i
        INNER JOIN pizzas p
        ON i.pizza_id = p.pizza_id
        INNER JOIN pedidos pe
        ON i.pedido_id = pe.pedido_id ORDER BY i.pedido_id;

DROP VIEW IF EXISTS vw_pedidos;
    CREATE VIEW vw_pedidos
    AS
        -- body of the view
        SELECT i.pedido_id, pe.cliente_id, c.nome as "Nome Cliente", pe.data, pe.hora, i.pizza_id, i.quantidade, i.valor, p.nome, p.valor as "Valor da Pizza", (p.valor * i.quantidade) as "Subtotal", pe.valor as "Total"
        FROM itens_pedido i
        INNER JOIN pizzas p
        ON i.pizza_id = p.pizza_id
        INNER JOIN pedidos pe
        ON i.pedido_id = pe.pedido_id
        INNER JOIN clientes c
        ON c.Cliente_id = pe.cliente_id ORDER BY i.pedido_id DESC;

        ALTER TABLE clientes

drop procedure if exists new_pedido_1item();
delimiter //
create procedure new_pedido_1item(cli_id int, pi_id int, qtd int)
begin

    INSERT INTO pedidos
    VALUES
    (DEFAULT, (SELECT Cliente_id from clientes where Cliente_id = cli_id), CURDATE(), CURTIME(), null);

    INSERT INTO itens_pedido
    VALUES
    ((SELECT last_insert_id()), (SELECT pizza_id from pizzas where pizza_id = pi_id), qtd, ((SELECT valor from pizzas where pizza_id = pi_id) * qtd));
    call set_total_pedido((SELECT last_insert_id()));

end//
delimiter ;

