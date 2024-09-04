# Regras de negócio

## Usuários e Autenticação

1. Registro de Usuário: Qualquer visitante pode se registrar criando uma conta com um endereço de e-mail único e uma senha.
2. Login/Logout: Usuários registrados podem fazer login utilizando suas credenciais e fazer logout quando desejarem.
3. Recuperação de Senha: Deve haver um sistema para recuperação de senha via e-mail. **(Implementação futura)**

## Níveis de Acesso

1. Cliente
 - Pode navegar pelo catálogo de produtos, adicionar itens ao carrinho, e realizar compras.
 - Pode ver o histórico de pedidos e o status de cada pedido (pendente, pago, enviado, completado, cancelado).
 - Pode gerenciar informações de conta, como e-mail e senha. **(Implementação futura)**

2. Admin
 - Tem todos os poderes de um cliente, além de:
  - Adicionar, editar, e remover produtos no catálogo.
  - Gerenciar estoque de produtos.
  - Gerenciar usuários (promover a administrador ou despromover a cliente).
  - Visualizar todas as compras realizadas na plataforma e gerenciar o status das compras.

## Catálogo de Produtos

1. Exibição de Produtos: Todos os usuários podem visualizar o catálogo de celulares, que inclui detalhes como nome, marca, descrição e preço.
2. Editar Carrinho: Clientes podem aumentar ou diminuir a quantidade de um produto no carrinho, ou remover o produto do carrinho.
3. Limites de Estoque: Não é possível adicionar mais unidades ao carrinho do que a quantidade disponível em estoque. (Talvez)
4. Persistência: O conteúdo do carrinho deve ser salvo e restaurado na próxima vez que o usuário fizer login.

## Processo de Compra (Revisar)

1. Checkout: Clientes podem proceder para o checkout onde devem fornecer informações de pagamento e de envio.
2. Pagamento: O pedido só é confirmado após a conclusão bem-sucedida do pagamento.
3. Status do Pedido: Após o pagamento, o pedido recebe o status "Pendente". O status pode ser atualizado para "Pago", "Enviado", "Completado" ou "Cancelado".
4. Notificações: O cliente deve ser notificado via e-mail sobre a confirmação do pedido e quaisquer alterações no status.

## Gestão de Pedidos

1. Visualização de Pedidos: Clientes podem visualizar o histórico de pedidos e o status de cada pedido.
2. Administração de Pedidos: Administradores podem atualizar o status dos pedidos para refletir o progresso no processamento.

## Estoque e Produtos

1. Atualização de Estoque: Administradores podem adicionar ou remover unidades de estoque de um produto.
2. Gerenciamento de Produtos: Administradores podem adicionar novos produtos ao catálogo, editar detalhes de produtos existentes, e remover produtos do catálogo.
3. Validação de Estoque: O sistema deve impedir que produtos sejam vendidos além da quantidade em estoque. **(Talvez)**

## Segurança

1. Proteção de Dados: Dados sensíveis, como senhas, devem ser armazenados de forma segura (por exemplo, utilizando hash).
2. Autorização: As operações sensíveis, como a gestão de produtos e usuários, devem ser restritas a administradores.

## Relatórios e Análise (Opcional)

1. Vendas: Administradores podem gerar relatórios sobre as vendas realizadas, produtos mais vendidos, e desempenho do e-commerce.
2. Estoque: Relatórios sobre o status do estoque para prever necessidade de reposição.
