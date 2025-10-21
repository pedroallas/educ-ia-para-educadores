import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { ExampleCard } from "@/components/ExampleCard";
import { PromptTemplate } from "@/components/PromptTemplate";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import { Quiz, QuizQuestion } from "@/components/Quiz";
import { PromptSimulator } from "@/components/PromptSimulator";
import { DownloadSection } from "@/components/DownloadSection";
import { NextSteps } from "@/components/NextSteps";
import { AccessibilityControls } from "@/components/AccessibilityControls";
import {
  BookOpen,
  Target,
  Zap,
  TrendingUp,
  Users,
  Code,
  Brain,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Download,
  Rocket,
} from "lucide-react";

const Index = () => {
  // Itens do Table of Contents
  const tocItems = [
    { id: "intro", label: "Introdução", icon: <BookOpen size={16} /> },
    { id: "fundamentos", label: "Fundamentos", icon: <Brain size={16} /> },
    { id: "estrutura", label: "Estrutura", icon: <Code size={16} /> },
    { id: "tecnicas", label: "Técnicas", icon: <Lightbulb size={16} /> },
    { id: "quiz", label: "Quiz Interativo", icon: <CheckCircle2 size={16} /> },
    { id: "simulador", label: "Simulador", icon: <Sparkles size={16} /> },
    { id: "educacao", label: "Para Educadores", icon: <Users size={16} /> },
    { id: "templates", label: "Templates", icon: <Target size={16} /> },
    { id: "downloads", label: "Downloads", icon: <BookOpen size={16} /> },
    {
      id: "proximos-passos",
      label: "Próximos Passos",
      icon: <TrendingUp size={16} />,
    },
  ];

  // Questões do Quiz
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Qual é o principal objetivo do Prompt Engineering?",
      options: [
        "Fazer perguntas aleatórias para IA",
        "Criar instruções estratégicas para obter respostas precisas e úteis",
        "Programar modelos de IA do zero",
        "Apenas testar diferentes modelos de linguagem",
      ],
      correctAnswer: 1,
      explanation:
        "Prompt Engineering é a prática de projetar e refinar instruções estratégicas para que modelos de IA gerem respostas úteis, precisas e relevantes às suas necessidades.",
    },
    {
      id: 2,
      question: "Qual NÃO é um dos pilares fundamentais de um prompt eficaz?",
      options: ["Clareza", "Contexto", "Complexidade", "Especificidade"],
      correctAnswer: 2,
      explanation:
        "Os três pilares fundamentais são Clareza, Contexto e Especificidade. Complexidade não é desejável - prompts devem ser claros e diretos, mesmo quando detalhados.",
    },
    {
      id: 3,
      question: "O que significa a sigla CTXE no framework de prompts?",
      options: [
        "Código, Teste, XML, Estrutura",
        "Contexto, Tarefa, eXemplos, Especificações",
        "Criar, Testar, eXecutar, Entregar",
        "Conteúdo, Tipo, eXecução, Estilo",
      ],
      correctAnswer: 1,
      explanation:
        "CTXE é um framework para criar prompts poderosos: Contexto (cenário), Tarefa (o que você precisa), eXemplos (resultado esperado) e Especificações (requisitos técnicos).",
    },
    {
      id: 4,
      question: "Qual técnica é mais eficaz para obter respostas complexas?",
      options: [
        "Fazer uma única pergunta longa",
        "Chain of Thought (pensamento em cadeia)",
        "Usar apenas palavras-chave",
        "Repetir a mesma pergunta várias vezes",
      ],
      correctAnswer: 1,
      explanation:
        "Chain of Thought (CoT) é uma técnica que pede à IA para explicar seu raciocínio passo a passo, resultando em respostas mais precisas e fundamentadas.",
    },
    {
      id: 5,
      question:
        "Ao criar prompts para educação, o que é MAIS importante incluir?",
      options: [
        "Apenas o tópico da aula",
        "Nível de conhecimento dos alunos, objetivo pedagógico e contexto da turma",
        "Referências de livros didáticos",
        "Termos técnicos complexos",
      ],
      correctAnswer: 1,
      explanation:
        "Para prompts educacionais eficazes, é essencial incluir o nível dos alunos, objetivos de aprendizagem específicos e contexto da turma para que a IA adapte o conteúdo adequadamente.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Table of Contents - Menu Lateral Fixo */}
      <TableOfContents items={tocItems} />

      {/* Controles de Acessibilidade */}
      <AccessibilityControls />

      {/* Hero com ajuste para barra lateral no desktop */}
      <div className="md:mr-80">
        <Hero />
      </div>

      {/* Container principal com margem para o TOC no desktop */}
      <div className="md:mr-80">
        {/* Introdução */}
        <ContentSection
          id="intro"
          title="Introdução"
          subtitle="A inteligência artificial revolucionou a forma como interagimos com a tecnologia"
        >
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Modelos de linguagem como ChatGPT, Claude, Gemini e outros
              transformaram tarefas complexas em conversas simples. Porém,
              existe um segredo para extrair o máximo dessas ferramentas:{" "}
              <strong className="text-foreground">
                saber formular bons prompts
              </strong>
              .
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">
                  O Que É Prompt Engineering?
                </h4>
                <p className="text-sm">
                  É a prática de projetar e refinar instruções para modelos de
                  IA gerarem respostas úteis, precisas e relevantes. Não se
                  trata apenas de fazer perguntas, mas de construir comandos
                  estratégicos.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">
                  Por Que Aprender?
                </h4>
                <p className="text-sm">
                  Economia de tempo, resultados superiores, versatilidade e
                  diferencial profissional. Quem domina essa habilidade se
                  destaca no mercado atual.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Benefícios de Bons Prompts
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong className="text-foreground">
                      Economia de tempo:
                    </strong>{" "}
                    Respostas corretas na primeira tentativa
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong className="text-foreground">
                      Resultados superiores:
                    </strong>{" "}
                    Soluções personalizadas para problemas específicos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong className="text-foreground">Versatilidade:</strong>{" "}
                    Aplicável desde planos de aula até códigos de programação
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong className="text-foreground">
                      Diferencial profissional:
                    </strong>{" "}
                    Destaque no mercado de trabalho
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>

        {/* Fundamentos */}
        <ContentSection
          id="fundamentos"
          title="Fundamentos de Prompts Eficazes"
          subtitle="Os três pilares essenciais para criar prompts poderosos"
          variant="accent"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                1. Clareza Acima de Tudo
              </h3>
              <p className="text-muted-foreground mb-4">
                A clareza é o pilar fundamental de qualquer prompt eficaz. A IA
                precisa entender exatamente o que você deseja para fornecer uma
                resposta adequada.
              </p>

              <ExampleCard type="bad">
                <p className="font-mono text-sm">"Me fale sobre matemática."</p>
              </ExampleCard>

              <ExampleCard type="good">
                <p className="font-mono text-sm">
                  "Explique o conceito de função quadrática para alunos do 9º
                  ano, incluindo três exemplos práticos do cotidiano."
                </p>
              </ExampleCard>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                2. Contexto É Fundamental
              </h3>
              <p className="text-muted-foreground mb-4">
                Fornecer contexto adequado permite que a IA compreenda o cenário
                em que sua solicitação se insere.
              </p>

              <ExampleCard type="tip" title="Componentes de Contexto">
                <ul className="space-y-1 text-sm">
                  <li>• Seu papel ou profissão</li>
                  <li>• O público-alvo da informação</li>
                  <li>• O objetivo final do conteúdo</li>
                  <li>• Restrições ou requisitos específicos</li>
                  <li>• Nível de conhecimento esperado</li>
                </ul>
              </ExampleCard>

              <ExampleCard type="good">
                <p className="font-mono text-sm">
                  "Sou professora de matemática do ensino fundamental II.
                  Preciso criar uma atividade sobre porcentagem para alunos do
                  7º ano com dificuldades em cálculos básicos. A atividade deve
                  ser lúdica e usar situações do dia a dia."
                </p>
              </ExampleCard>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                3. Especificidade Gera Qualidade
              </h3>
              <p className="text-muted-foreground mb-4">
                Quanto mais específico for seu prompt, melhor será o resultado.
                Detalhe formato, tom, extensão e outros aspectos.
              </p>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-3">
                  Componentes de Especificidade:
                </h4>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    Formato desejado (lista, parágrafo, tabela)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    Extensão aproximada
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    Tom e estilo (formal, informal, técnico)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    Elementos obrigatórios ou restrições
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Estrutura */}
        <ContentSection
          id="estrutura"
          title="Estrutura de um Prompt Poderoso"
          subtitle="O framework CTXE para criar prompts eficazes"
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                O Modelo CTXE
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    C - Contexto
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Estabeleça o cenário e sua situação atual
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    T - Tarefa
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Defina claramente o que você precisa
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    X - eXemplos
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Forneça exemplos do resultado esperado
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    E - Especificações
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Detalhe requisitos técnicos e formato
                  </p>
                </div>
              </div>
            </div>

            <ExampleCard type="good" title="Aplicação Prática do CTXE">
              <pre className="text-sm font-mono whitespace-pre-wrap">
                {`Contexto: Sou professor de história e estou preparando material para uma aula sobre Revolução Industrial.

Tarefa: Crie um questionário interativo com 10 perguntas de múltipla escolha.

Exemplos: As perguntas devem seguir este modelo: 'Qual invenção revolucionou a indústria têxtil no século XVIII? 
a) Tear mecânico b) Máquina a vapor c) Locomotiva d) Telégrafo'

Especificações: Nível de dificuldade médio, adequado para 8º ano, com gabarito ao final.`}
              </pre>
            </ExampleCard>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Prompts em Camadas
              </h3>
              <p className="text-muted-foreground mb-4">
                Para tarefas complexas, divida seu prompt em etapas sequenciais.
                Isso ajuda a IA a processar a informação gradualmente.
              </p>

              <ExampleCard type="good" title="Estrutura em Camadas">
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {`Etapa 1: Analise os principais desafios enfrentados por professores ao ensinar trigonometria.

Etapa 2: Para cada desafio identificado, sugira duas estratégias práticas de ensino.

Etapa 3: Desenvolva um plano de aula completo incorporando essas estratégias.`}
                </pre>
              </ExampleCard>
            </div>
          </div>
        </ContentSection>

        {/* Técnicas Avançadas */}
        <ContentSection
          id="tecnicas"
          title="Técnicas Avançadas de Prompt Engineering"
          subtitle="Leve suas habilidades para o próximo nível"
          variant="accent"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                1. Role-Playing (Atribuição de Papéis)
              </h3>
              <p className="text-muted-foreground mb-4">
                Instrua a IA a assumir um papel específico para obter respostas
                mais especializadas.
              </p>

              <div className="bg-card p-6 rounded-lg border border-border mb-4">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Formato:
                </p>
                <code className="text-sm text-primary">
                  "Atue como [papel] com [características específicas]..."
                </code>
              </div>

              <ExampleCard type="good" title="Exemplos de Role-Playing">
                <ul className="space-y-2 text-sm">
                  <li>
                    • "Atue como um pedagogo especializado em educação
                    inclusiva..."
                  </li>
                  <li>
                    • "Responda como se fosse um desenvolvedor sênior de
                    Python..."
                  </li>
                  <li>
                    • "Assuma o papel de um coach de carreira com 15 anos de
                    experiência..."
                  </li>
                </ul>
              </ExampleCard>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                2. Chain of Thought (Cadeia de Pensamento)
              </h3>
              <p className="text-muted-foreground mb-4">
                Solicite que a IA mostre o raciocínio passo a passo ao resolver
                problemas complexos.
              </p>

              <ExampleCard type="good">
                <p className="font-mono text-sm">
                  "Resolva este problema de matemática{" "}
                  <strong>mostrando cada etapa do raciocínio</strong>: Se um
                  carro viaja a 80 km/h por 2,5 horas e depois a 100 km/h por
                  1,5 horas, qual foi a distância total percorrida?"
                </p>
              </ExampleCard>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                3. Few-Shot Learning
              </h3>
              <p className="text-muted-foreground mb-4">
                Forneça alguns exemplos do formato ou estilo que você deseja, e
                a IA aprenderá o padrão.
              </p>

              <ExampleCard type="good" title="Estrutura Few-Shot">
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {`Aqui estão dois exemplos do formato que preciso:

Exemplo 1: [seu exemplo]
Exemplo 2: [seu exemplo]

Agora crie cinco novos exemplos seguindo o mesmo padrão.`}
                </pre>
              </ExampleCard>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                4. Prompts Negativos
              </h3>
              <p className="text-muted-foreground mb-4">
                Especifique claramente o que você NÃO quer na resposta para
                refinar os resultados.
              </p>

              <ExampleCard type="good">
                <p className="font-mono text-sm">
                  "Crie um plano de aula sobre energia renovável para o 9º ano.{" "}
                  <strong>Não inclua</strong> conteúdo excessivamente técnico,{" "}
                  <strong>não use</strong> jargão científico complexo e{" "}
                  <strong>não faça</strong> referências a cálculos avançados."
                </p>
              </ExampleCard>
            </div>
          </div>
        </ContentSection>

        {/* Prompts para Educação */}
        <ContentSection
          id="educacao"
          title="Prompts para Educação"
          subtitle="Aplicações práticas para professores e educadores"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Criação de Planos de Aula
              </h3>

              <PromptTemplate
                title="Template: Plano de Aula Completo"
                content={`Crie um plano de aula completo com os seguintes componentes:

Disciplina: Matemática
Série: 8º ano do ensino fundamental
Tema: Equações de primeiro grau
Duração: 50 minutos
Objetivos de aprendizagem: [especifique 3-4 objetivos]

Inclua:
- Introdução motivadora (5 minutos)
- Desenvolvimento do conteúdo (25 minutos)
- Atividade prática (15 minutos)
- Avaliação e encerramento (5 minutos)
- Recursos necessários
- Sugestões de avaliação`}
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Geração de Exercícios e Atividades
              </h3>

              <PromptTemplate
                title="Template: Exercícios com Níveis de Dificuldade"
                content={`Crie 15 exercícios de matemática sobre teorema de Pitágoras para alunos do 9º ano. 
Organize em três níveis:

Nível 1 (questões 1-5): Aplicação direta da fórmula com valores inteiros
Nível 2 (questões 6-10): Problemas contextualizados do cotidiano
Nível 3 (questões 11-15): Desafios que exigem raciocínio avançado

Para cada questão, forneça o gabarito com a resolução detalhada.`}
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Feedback Personalizado
              </h3>

              <PromptTemplate
                title="Template: Análise de Redação com Feedback Construtivo"
                content={`Analise esta redação de um aluno do 7º ano [cole o texto]. 
Forneça feedback construtivo abordando:

- Pontos fortes do texto
- Áreas que precisam melhorar
- Três sugestões específicas de aprimoramento
- Um comentário motivador

Use linguagem encorajadora e adequada para a idade.`}
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Adaptação de Conteúdo
              </h3>

              <PromptTemplate
                title="Template: Adaptação para Diferentes Níveis"
                content={`Adapte este texto sobre fotossíntese [cole o texto original] para três níveis diferentes:

Versão A: 6º ano (linguagem simples, analogias do cotidiano)
Versão B: 8º ano (termos científicos básicos, maior profundidade)
Versão C: 9º ano (linguagem técnica, conexões interdisciplinares)

Mantenha a precisão científica em todas as versões.`}
              />
            </div>
          </div>
        </ContentSection>

        {/* Templates */}
        <ContentSection
          id="templates"
          title="Templates Práticos de Prompts"
          subtitle="Modelos prontos para você adaptar às suas necessidades"
          variant="accent"
        >
          <div className="space-y-8">
            <PromptTemplate
              title="Template 1: Criação de Material Didático"
              content={`Crie [tipo de material] sobre [tema] para [público-alvo].

Especificações:
- Extensão: [número de páginas/questões]
- Nível de dificuldade: [básico/intermediário/avançado]
- Formato: [lista/texto/tabela]
- Elementos obrigatórios: [listar]

Inclua [recursos adicionais como gabarito, exemplos, etc.].`}
            />

            <PromptTemplate
              title="Template 2: Análise e Síntese"
              content={`Analise [texto/conceito/situação] considerando os seguintes aspectos:

1. [Aspecto 1]
2. [Aspecto 2]
3. [Aspecto 3]

Para cada aspecto, forneça:
- Descrição clara
- Exemplos práticos
- Implicações [para educação/trabalho/etc.]

Formato: [escolher formato desejado]`}
            />

            <PromptTemplate
              title="Template 3: Resolução de Problemas"
              content={`Situação: [descrever o problema/desafio]

Contexto adicional: [informações relevantes]

Forneça:
- Análise das causas (mínimo 3)
- Soluções práticas (mínimo 5)
- Prós e contras de cada solução
- Recomendação final com justificativa

Considere [restrições ou requisitos específicos].`}
            />

            <PromptTemplate
              title="Template 4: Planejamento"
              content={`Desenvolva um plano de [ação/projeto/aula] com as seguintes características:

Objetivo: [descrever objetivo principal]
Duração: [tempo disponível]
Recursos disponíveis: [listar recursos]

O plano deve incluir:
- Etapas sequenciais
- Tempo estimado para cada etapa
- Materiais necessários
- Critérios de avaliação de sucesso`}
            />

            <ExampleCard type="tip" title="Dica de Uso dos Templates">
              <p>
                Substitua os textos entre colchetes [como este] com suas
                informações específicas. Quanto mais detalhes você fornecer,
                mais personalizada será a resposta da IA.
              </p>
            </ExampleCard>
          </div>
        </ContentSection>

        {/* Erros Comuns */}
        <ContentSection
          id="erros"
          title="Erros Comuns e Como Evitá-los"
          subtitle="Aprenda com os erros mais frequentes para acelerar seu aprendizado"
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-destructive">
                  ❌ Erro 1: Prompts Vagos
                </h4>
                <ExampleCard type="bad">
                  <p className="font-mono text-sm">"Fale sobre educação."</p>
                </ExampleCard>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-500">
                  ✓ Solução
                </h4>
                <ExampleCard type="good">
                  <p className="font-mono text-sm">
                    "Explique três tendências atuais em tecnologia educacional
                    para ensino fundamental II, incluindo exemplos práticos de
                    implementação."
                  </p>
                </ExampleCard>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-destructive">
                  ❌ Erro 2: Excesso de Informação
                </h4>
                <ExampleCard type="bad">
                  <p className="text-sm">
                    Prompts com múltiplos parágrafos de contexto irrelevante que
                    confundem a IA.
                  </p>
                </ExampleCard>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-500">
                  ✓ Solução
                </h4>
                <ExampleCard type="good">
                  <p className="text-sm">
                    Inclua apenas informações diretamente relevantes. Se o
                    contexto for extenso, organize-o em tópicos claros.
                  </p>
                </ExampleCard>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-destructive">
                  ❌ Erro 3: Instruções Contraditórias
                </h4>
                <ExampleCard type="bad">
                  <p className="font-mono text-sm">
                    "Seja breve e detalhado" ou "Crie um texto formal e
                    descontraído."
                  </p>
                </ExampleCard>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-500">
                  ✓ Solução
                </h4>
                <ExampleCard type="good">
                  <p className="text-sm">
                    Defina prioridades claras. "Escreva em tom profissional, mas
                    use linguagem acessível e exemplos cotidianos."
                  </p>
                </ExampleCard>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-lg border border-yellow-500/20">
              <h4 className="font-semibold text-foreground mb-3">
                Técnica de Refinamento Progressivo
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Raramente o primeiro prompt produz o resultado perfeito. Use uma
                abordagem iterativa:
              </p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">1.</strong> Comece com um
                  prompt básico mas claro
                </li>
                <li>
                  <strong className="text-foreground">2.</strong> Analise a
                  resposta e identifique melhorias
                </li>
                <li>
                  <strong className="text-foreground">3.</strong> Refine o
                  prompt com especificações adicionais
                </li>
                <li>
                  <strong className="text-foreground">4.</strong> Teste
                  novamente e continue refinando
                </li>
              </ol>
            </div>
          </div>
        </ContentSection>

        {/* Conclusão */}
        <ContentSection
          id="conclusao"
          title="Conclusão e Próximos Passos"
          subtitle="Continue sua jornada de domínio em prompt engineering"
        >
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Dominar a arte de criar prompts eficazes é uma habilidade
              transformadora na era digital. Os princípios fundamentais são
              simples:{" "}
              <strong className="text-foreground">
                clareza, contexto, especificidade e estrutura
              </strong>
              . Porém, a maestria vem com a prática contínua e o refinamento
              iterativo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-4">
                  Para Educadores
                </h4>
                <p className="text-sm text-muted-foreground">
                  A IA pode ser uma aliada poderosa na criação de materiais
                  didáticos, personalização do ensino, geração de atividades e
                  muito mais. O segredo está em saber fazer as perguntas certas.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-foreground mb-4">
                  Princípios Éticos
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Transparência no uso de IA</li>
                  <li>• Sempre verificar informações</li>
                  <li>• Usar IA como apoio, não substituta</li>
                  <li>• Proteger privacidade e dados sensíveis</li>
                </ul>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Próximos Passos
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📝</span>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      Pratique Regularmente
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Experimente criar prompts para diferentes situações
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      Aprenda com a Comunidade
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Explore fóruns sobre prompt engineering
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      Mantenha-se Atualizado
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Acompanhe novidades em tecnologia de IA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">
                      Desenvolva Seu Estilo
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Encontre padrões que funcionam para você
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg border border-primary/30">
              <p className="text-xl text-foreground font-semibold mb-2">
                A IA é uma ferramenta poderosa...
              </p>
              <p className="text-muted-foreground">
                Mas é sua criatividade, conhecimento e experiência que
                transformam simples prompts em soluções extraordinárias.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Quiz Interativo */}
        <ContentSection
          id="quiz"
          title="Teste Seus Conhecimentos"
          subtitle="Avalie seu aprendizado com nosso quiz interativo"
          variant="accent"
          icon={<CheckCircle2 size={32} />}
        >
          <Quiz title="Quiz de Prompt Engineering" questions={quizQuestions} />
        </ContentSection>

        {/* Simulador de Prompts */}
        <ContentSection
          id="simulador"
          title="Pratique Agora"
          subtitle="Use nosso simulador para testar e melhorar seus prompts"
          icon={<Sparkles size={32} />}
        >
          <PromptSimulator />
        </ContentSection>

        {/* Seção de Downloads */}
        <ContentSection
          id="downloads"
          title="Baixe o E-book Completo"
          subtitle="Leve todo o conteúdo com você"
          variant="accent"
          icon={<Download size={32} />}
        >
          <DownloadSection />
        </ContentSection>

        {/* Próximos Passos e Comunidades */}
        <ContentSection
          id="proximos-passos"
          title="Continue Sua Jornada"
          subtitle="Junte-se às comunidades e recursos de IA"
          icon={<Rocket size={32} />}
        >
          <NextSteps />
        </ContentSection>
      </div>

      {/* Footer com ajuste para barra lateral no desktop */}
      <div className="md:mr-80">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
