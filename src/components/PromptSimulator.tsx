import { useState } from "react";
import { Send, Sparkles, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface SimulatorExample {
  prompt: string;
  response: string;
  quality: "poor" | "good" | "excellent";
}

/**
 * Simulador de Prompts Interativo
 * Permite aos usuários testar e comparar diferentes prompts
 * Fornece feedback sobre a qualidade e sugestões de melhoria
 */
export const PromptSimulator = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Exemplos de prompts com respostas simuladas
  const examples: SimulatorExample[] = [
    {
      prompt: "Me ajude",
      response:
        "⚠️ Prompt muito vago! Tente ser mais específico sobre o que você precisa.\n\nSugestão: 'Me ajude a criar um plano de estudos para aprender React.js em 3 meses, estudando 2 horas por dia.'",
      quality: "poor",
    },
    {
      prompt: "Explique inteligência artificial",
      response:
        "✅ Bom prompt, mas pode melhorar!\n\nResposta simulada: Inteligência Artificial é um campo da ciência da computação que desenvolve sistemas capazes de realizar tarefas que normalmente requerem inteligência humana...\n\n💡 Sugestão de melhoria: 'Explique inteligência artificial de forma simples para um estudante do ensino médio, usando exemplos do cotidiano.'",
      quality: "good",
    },
    {
      prompt:
        "Atue como um professor de programação. Explique o conceito de loops em Python para um iniciante, usando exemplos práticos e analogias do dia a dia. Inclua um exemplo de código comentado.",
      response:
        "🌟 Excelente prompt! Você incluiu:\n✓ Papel/contexto (professor)\n✓ Público-alvo (iniciante)\n✓ Formato desejado (exemplos práticos + analogias)\n✓ Especificação técnica (código comentado)\n\nResposta simulada:\nClaro! Vou explicar loops de uma forma bem didática.\n\nPense em loops como tarefas repetitivas do seu dia. Por exemplo, quando você escova os dentes, você repete o movimento várias vezes até completar a tarefa.\n\nEm Python, usamos loops para repetir ações:\n\n```python\n# Loop que conta até 5\nfor numero in range(1, 6):\n    print(f'Contando: {numero}')\n    # Isso vai imprimir 1, 2, 3, 4, 5\n```",
      quality: "excellent",
    },
  ];

  const analyzePrompt = (prompt: string): SimulatorExample => {
    const lowerPrompt = prompt.toLowerCase();

    // Verificações de qualidade
    const hasContext =
      lowerPrompt.includes("atue como") ||
      lowerPrompt.includes("você é") ||
      lowerPrompt.includes("imagine que");
    const hasSpecifics =
      prompt.length > 50 &&
      (lowerPrompt.includes("para") ||
        lowerPrompt.includes("com") ||
        lowerPrompt.includes("usando"));
    const hasFormat =
      lowerPrompt.includes("exemplo") ||
      lowerPrompt.includes("lista") ||
      lowerPrompt.includes("passo a passo");

    if (prompt.length < 10) {
      return {
        prompt,
        response:
          "⚠️ Prompt muito curto! Prompts mais detalhados geram respostas melhores.\n\nDica: Adicione contexto, seja específico sobre o que precisa e mencione o formato desejado da resposta.",
        quality: "poor",
      };
    }

    if (hasContext && hasSpecifics && hasFormat) {
      return {
        prompt,
        response:
          "🌟 Excelente prompt! Você incluiu:\n✓ Contexto/papel claro\n✓ Detalhes específicos\n✓ Formato de resposta definido\n\nEste tipo de prompt geraria respostas de alta qualidade em um modelo de IA real. Continue assim!",
        quality: "excellent",
      };
    }

    if (hasContext || hasSpecifics) {
      return {
        prompt,
        response:
          "✅ Bom prompt! Você está no caminho certo.\n\n💡 Sugestões para melhorar:\n" +
          (!hasContext
            ? "• Adicione contexto (ex: 'Atue como um especialista...')\n"
            : "") +
          (!hasSpecifics
            ? "• Seja mais específico sobre o que precisa\n"
            : "") +
          (!hasFormat ? "• Especifique o formato da resposta desejada\n" : ""),
        quality: "good",
      };
    }

    return {
      prompt,
      response:
        "⚠️ Prompt básico. Funciona, mas pode melhorar muito!\n\n💡 Dicas:\n• Adicione contexto (papel/persona)\n• Seja mais específico\n• Defina o formato desejado\n• Mencione o público-alvo\n\nExemplo: 'Atue como um nutricionista. Crie um plano alimentar vegetariano para ganho de massa muscular, para uma pessoa de 25 anos que treina 4x por semana. Apresente em formato de tabela.'",
      quality: "poor",
    };
  };

  const handleSubmit = async () => {
    if (!userPrompt.trim()) return;

    setIsProcessing(true);
    setResponse("");

    // Simula processamento
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result = analyzePrompt(userPrompt);
    setResponse(result.response);
    setIsProcessing(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(userPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadExample = (example: SimulatorExample) => {
    setUserPrompt(example.prompt);
    setResponse("");
  };

  return (
    <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-6 md:p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Sparkles className="text-primary" size={24} />
          Simulador de Prompts
        </h3>
        <p className="text-sm text-muted-foreground">
          Teste seus prompts e receba feedback instantâneo sobre como
          melhorá-los
        </p>
      </div>

      {/* Exemplos rápidos */}
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2 font-semibold">
          Experimente estes exemplos:
        </p>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => loadExample(example)}
              className="text-xs"
            >
              Exemplo {index + 1}
            </Button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">
          Seu Prompt:
        </label>
        <Textarea
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="Digite seu prompt aqui... Ex: 'Atue como um especialista em marketing digital e me ajude a criar uma estratégia para Instagram...'"
          className="min-h-[120px] resize-none"
          disabled={isProcessing}
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">
            {userPrompt.length} caracteres
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            disabled={!userPrompt}
            className="text-xs"
          >
            {copied ? (
              <>
                <Check size={14} className="mr-1" /> Copiado
              </>
            ) : (
              <>
                <Copy size={14} className="mr-1" /> Copiar
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        disabled={!userPrompt.trim() || isProcessing}
        className="w-full mb-4"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
            Analisando...
          </>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Analisar Prompt
          </>
        )}
      </Button>

      {/* Response Area */}
      {response && (
        <div className="p-4 bg-secondary/50 rounded-lg border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-sm font-semibold text-foreground mb-2">
            📊 Análise do Prompt:
          </p>
          <div className="text-sm text-muted-foreground whitespace-pre-line">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};
