interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  repoLink: string;
  demoLink?: string;
  problemSolved: string;
  features: string[];
  difficultChallenge: string;
}

export const projects: Project[] = [
  {
    id: "taskly",
    title: "Taskly API",
    description:
      "API para gerenciamento de tarefas com categorias, prioridades e status.",
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Docker",
    ],
    repoLink: "https://github.com/Alisson-Oliver/ANMAR25_DSUP_TASKLY",
    problemSolved:
      "Muitas pessoas acabam organizando tarefas de forma desestruturada, sem um lugar central para acompanhar status, prioridade e anotações. Para resolver isso, foi criada uma API REST que permite gerenciar tarefas e associar múltiplas notas, com validações e organização em camadas, facilitando o controle do dia a dia.",

    features: [
      "Criar, listar, atualizar e deletar tarefas",
      "Filtrar tarefas por status e prioridade",
      "Categorizar tarefas e pesquisar por título",
      "Criar múltiplas notas associadas a cada tarefa",
      "Paginação configurável na listagem de tarefas",
      "Validações de entrada com Zod em camada de middleware",
      "Relacionamento entre tarefas e notas com deleção em cascata",
      "Tratamento centralizado de erros",
      "API documentada com endpoints estruturados",
      "Containerização com Docker Compose para PostgreSQL",
    ],

    longDescription:
      "O Taskly é uma API REST para gerenciamento de tarefas e anotações. É possível criar tarefas com título, descrição, status e prioridade, além de associar várias notas a cada uma. A aplicação foi organizada em camadas (controller, service e repository), usa PostgreSQL para persistência e Zod para validação dos dados.",

    difficultChallenge:
      "Um dos principais desafios foi lidar com o relacionamento entre tarefas e notas, garantindo que ao remover uma tarefa todas as suas notas fossem tratadas corretamente. Além disso, organizar as validações com Zod de forma consistente entre as camadas exigiu cuidado para evitar duplicação e manter os erros claros.",
  },
  {
    id: "compass-events",
    title: "Events API",
    description:
      "API de eventos com autenticação JWT, controle de papéis e integrações com AWS.",
    techStack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "JWT",
      "DynamoDB",
      "S3",
      "SES",
      "Swagger",
    ],
    repoLink: "https://github.com/Alisson-Oliver/ANMAR25_D03_COMPASSEVENT",
    problemSolved:
      "Pequenos organizadores de eventos precisavam usar ferramentas separadas para cadastro de usuários, criação de eventos e gerenciamento de inscrições, além de depender de confirmações manuais por e-mail. Para resolver isso, foi desenvolvida uma API REST com NestJS que centraliza esse fluxo, com autenticação JWT, verificação de e-mail, controle de acesso por papéis e integração com serviços da AWS para envio de e-mails e armazenamento de imagens.",
    features: [
      "Cadastro de usuários com validação e hash de senha",
      "Login com geração de token JWT para rotas protegidas",
      "Verificação de e-mail por link com token e ativação de conta",
      "Autorização por papéis com guards e decorators (RBAC)",
      "Upload de imagem de perfil e imagem de evento via AWS S3",
      "CRUD de eventos com regras de ownership e soft delete",
      "Listagem paginada com filtros por nome, data e status",
      "Inscrição de usuários em eventos com validação",
      "Cancelamento de inscrição com soft delete e validação",
      "Envio de e-mails transacionais via AWS SES",
      "Envio de convite de calendário (.ics) ao confirmar inscrição",
      "Seed de dados iniciais com criação de usuário administrador",
    ],

    longDescription:
      "A Events API é uma aplicação construída com NestJS para gerenciar eventos do início ao fim. O sistema permite cadastro de usuários, criação de eventos, inscrição e envio de notificações por e-mail. Utiliza DynamoDB como banco de dados, S3 para armazenamento de imagens e SES para envio de e-mails, com a aplicação organizada em módulos para separar responsabilidades.",

    difficultChallenge:
      "O maior desafio foi organizar autenticação e autorização dentro da aplicação, garantindo que cada usuário só pudesse acessar o que realmente tem permissão. Também foi necessário integrar serviços da AWS para envio de e-mails e upload de imagens, mantendo o código desacoplado e fácil de manter.",
  },
  {
    id: "integra-mais",
    title: "Integra Mais",
    description:
      "Plataforma web de cursos e desenvolvimento profissional com envio de e-mails de verificação.",
    techStack: [
      "Node.js",
      "Express",
      "EJS",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Nodemailer",
      "Cloudinary",
    ],
    repoLink: "https://github.com/Alisson-Oliver/integra-mais",
    problemSolved:
      "Pessoas que buscavam cursos online não tinham uma forma simples de se cadastrar, acompanhar inscrições e gerenciar seus dados em um único sistema. Para resolver isso, foi criada uma plataforma web que reúne cadastro, verificação de e-mail, perfil do usuário e inscrição em cursos, tudo integrado em um só lugar.",
    features: [
      "Cadastro, login e logout de usuários",
      "Verificação de e-mail com código de 6 dígitos e expiração",
      "Autenticação com JWT e proteção de rotas",
      "Controle de perfil com edição de dados pessoais",
      "Upload e atualização de foto de perfil via Cloudinary",
      "Catálogo de cursos profissionalizantes",
      "Inscrição de usuários em cursos",
      "Página de Meus Cursos para alunos autenticados",
      "Dashboard administrativo para criação de cursos",
      "Controle de permissão por papel (admin e usuário comum)",
      "Validações no front-end para CPF, telefone, senha e data",
      "Páginas institucionais e fluxo de navegação completo em EJS",
    ],
    longDescription:
      "O Integra Mais é uma plataforma web onde usuários podem se cadastrar, validar e-mail e se inscrever em cursos. Também conta com edição de perfil e upload de imagem. O sistema foi desenvolvido com Node.js, Express e EJS, utilizando PostgreSQL para persistência e Sequelize para gerenciar os dados.",

    difficultChallenge:
      "Um dos desafios foi implementar o fluxo de verificação por código, lidando com expiração, reenvio e validação sem comprometer a experiência do usuário. Também exigiu atenção integrar autenticação com JWT e manter consistência entre backend e interface.",
  },
  {
    id: "compass-reservation",
    title: "Reservation API",
    description:
      "API de reservas com autenticação, rate limiting e validação de dados.",
    techStack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "SQLite",
      "Swagger",
      "JWT",
    ],
    repoLink:
      "https://github.com/Alisson-Oliver/ANMAR25_D02_COMPASSRESERVATION",
    problemSolved:
      "A organização de reservas de espaços e recursos muitas vezes era feita de forma manual ou desorganizada, o que dificultava o controle de horários e gerava conflitos de agendamento. Para resolver isso, foi desenvolvida uma API que permite gerenciar reservas com autenticação, controle de acesso e validação automática de conflitos de datas.",

    features: [
      "Autenticação com registro e login de usuários",
      "Autenticação com JWT e proteção de rotas",
      "Controle de acesso baseado em roles",
      "Gestão de clientes com validação de dados",
      "Catálogo de espaços com capacidade e status",
      "Gestão de recursos com controle de quantidade",
      "Sistema completo de reservas",
      "Validação de conflito de datas",
      "Listagens com filtros e paginação",
      "Documentação com Swagger",
    ],
    longDescription:
      "A Reservation API é uma aplicação feita com NestJS para gerenciar reservas de espaços e recursos. O sistema permite cadastro de usuários, controle de acesso, criação de reservas e validação de conflitos de horário. Utiliza Prisma como ORM e SQLite como banco de dados, com organização em módulos para manter o código estruturado.",
    difficultChallenge:
      "O principal desafio foi garantir que não houvesse conflitos de horário nas reservas, validando corretamente as datas antes de salvar no banco. Além disso, implementar controle de acesso para que cada usuário veja apenas seus dados exigiu cuidado na estruturação das regras.",
  },
];
