import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { ExampleCard } from "@/components/ExampleCard";
import { PromptTemplate } from "@/components/PromptTemplate";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/TableOfContents";
import { Quiz, QuizQuestion } from "@/components/Quiz";
import { PromptSimulator } from "@/components/PromptSimulator";
import { VideoPlayer } from "@/components/VideoPlayer";
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
  Lightbulb,
  Sparkles,
  Brain,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Index = () => {
  // Itens do índice para o Table of Contents
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
      <Hero />

      {/* Table of Contents - Menu Lateral Fixo */}
      <TableOfContents items={tocItems} />

      {/* Controles de Acessibilidade */}
      <AccessibilityControls />

      {/* Container principal com margem para o TOC no desktop */}
      <div className="md:mr-72">
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
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
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

              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
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

            {/* Sobre a Padevs School */}
            <div className="bg-card border border-border rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Sobre Este E-book
              </h4>
              <p className="text-sm text-muted-foreground">
                Este e-book foi desenvolvido pela{" "}
                <strong className="text-primary">Padevs School</strong>, uma
                iniciativa educacional dedicada a capacitar educadores e
                profissionais nas tecnologias emergentes, especialmente em
                Inteligência Artificial e suas aplicações práticas. Nosso
                objetivo é democratizar o conhecimento sobre IA e promover
                práticas éticas, criativas e eficazes no uso dessas ferramentas.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Continua no próximo arquivo... */}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
