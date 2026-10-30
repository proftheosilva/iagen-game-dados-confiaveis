# Missão Dados Confiáveis

Jogo didático em página única para as aulas de organização de dados, governança, segurança e uma introdução ilustrativa a PySpark e Delta Lake. O frontend está inteiramente em `index.html`. A pequena função `api/config.js` permite que a Vercel forneça a URL e a chave **publicável** do Supabase ao navegador em tempo de execução.

## Como jogar

Informe um apelido sem dados pessoais e selecione o modo. No treinamento, é possível repetir a etapa; no desafio, erros eliminatórios encerram a partida e salvam o resultado quando o ranking está configurado. Os desafios parciais exigem pelo menos 70% de acerto. O ranking ordena por fases concluídas, pontos e tempo. Cartões de associação também possuem seletores para mouse, teclado e telas de toque.

O exercício do limite de 70% é uma regra didática; ele não garante que uma ingestão real esteja completa ou correta. A representação de PySpark e Delta é conceitual. O ranking é público para os participantes; use apenas apelidos.

## Publicar na Vercel

1. Crie um repositório com os arquivos desta pasta e importe o repositório na Vercel. Use **Other** como framework; não há comando de build necessário.
2. Em **Settings → Environment Variables**, configure:
   - `SUPABASE_URL`: URL do projeto Supabase.
   - `SUPABASE_PUBLISHABLE_KEY`: chave publicável do projeto.
3. O projeto provisionado para esta atividade é `jogos`; sua URL é `https://hjegraiarxbmgqneivnr.supabase.co`. Obtenha a chave publicável no painel do projeto em **Connect / API Keys**.
4. Faça um novo deploy depois de configurar as variáveis. Abra o jogo publicado, conclua uma partida de teste e confira o ranking.

Esses valores são públicos por natureza e serão enviados ao navegador pela função `/api/config`. **Nunca** configure ou exponha `service_role`, chaves secretas, tokens pessoais ou senhas neste frontend ou nessa rota. O acesso à tabela `ranking_missao_dados` é controlado por RLS: leitura e inserção públicas, sem atualização ou exclusão anônima.

O ranking é adequado para prática em sala, mas os resultados são enviados pelo navegador: alguém com conhecimentos técnicos pode forjar pontuações. Uma competição que exija integridade forte precisa de validação de jogadas e pontuação no servidor, controles de abuso e identificação adequada.

## Usar localmente

Abrir `index.html` diretamente permite praticar os desafios, mas o ranking exige que a rota `/api/config` e o Supabase estejam acessíveis. Em desenvolvimento com a Vercel CLI, configure as mesmas variáveis localmente e execute `vercel dev`. Não publique o arquivo `.env`.

## Banco de dados

A tabela criada no projeto `jogos` registra apelido, pontos, fases, tempo, conclusão e data. Há limites de dados e RLS, mas não autenticação de administrador. Para verificar ou administrar os registros, use o painel do Supabase com uma conta autorizada.

## Arquivos

- `index.html`: conteúdo, estilo e lógica do jogo.
- `api/config.js`: devolve somente URL e chave publicável para o frontend.
- `.env.example`: nomes das variáveis, sem credenciais.
- `.gitignore`: impede o envio dos arquivos de ambiente.

## Fontes

- [Arquitetura medalhão](https://learn.microsoft.com/en-us/fabric/onelake/onelake-medallion-lakehouse-architecture)
- [Delta Lake: Parquet e log de transações](https://docs.delta.io/delta-faq/)
