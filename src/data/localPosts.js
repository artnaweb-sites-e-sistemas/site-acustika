// Posts locais do blog - todos os posts estão aqui localmente
import blogHeroImage from '../assets/images/primeira imagem da ABA BLOG.JPEG';
import deficientesAuditivosImage from '../assets/images/blog/deficientes-auditivos-isencao-ipi.webp';
import fatosAcustikosImage from '../assets/images/blog/fatos-acustikos-increveis-audicao.webp';
import cuidadosAudicaoImage from '../assets/images/blog/cuidados-audicao.webp';
import memoriaAuditivaImage from '../assets/images/blog/memoria-auditiva.webp';
import testesAuditivosImage from '../assets/images/blog/testes-auditivos-casa.webp';
import fatosIncreveisImage from '../assets/images/blog/fatos-increveis-audicao.webp';
import atendimentoMultimarcasImage from '../assets/images/blog/atendimento-multimarcas-vantajoso.webp';

// Função auxiliar para converter texto simples em HTML formatado
const formatContent = (text) => {
  const lines = text.split('\n');
  let html = '<div style="font-family: \'Karla\', sans-serif; line-height: 1.7; color: #374151;">';
  let inList = false;
  let paragraphText = '';
  
  const closeParagraph = () => {
    if (paragraphText.trim()) {
      html += `<p style="margin-bottom: 1.5rem; font-size: 1.125rem;">${paragraphText.trim()}</p>`;
      paragraphText = '';
    }
  };
  
  const closeList = () => {
    if (inList) {
      html += '</ol>';
      inList = false;
    }
  };
  
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Linha vazia - fecha parágrafo ou lista atual
    if (!trimmed) {
      closeParagraph();
      closeList();
      return;
    }
    
    // Se a linha começa com #, é um título
    if (trimmed.startsWith('#')) {
      closeParagraph();
      closeList();
      const titleText = trimmed.replace(/^#+\s*/, '').trim();
      html += `<h2 style="font-family: 'Noto Serif', serif; color: #7e4078; margin-top: 2rem; margin-bottom: 1rem; font-size: 1.75rem;">${titleText}</h2>`;
    }
    // Se a linha começa com número seguido de ponto, é uma lista numerada
    else if (/^\d+\.\s/.test(trimmed)) {
      closeParagraph();
      if (!inList) {
        html += '<ol style="margin-bottom: 1.5rem; padding-left: 2rem;">';
        inList = true;
      }
      const content = trimmed.replace(/^\d+\.\s/, '').trim();
      html += `<li style="margin-bottom: 0.75rem; font-size: 1.125rem;">${content}</li>`;
    }
    // Linha normal - acumula em parágrafo
    else {
      closeList();
      if (paragraphText) {
        paragraphText += ' ';
      }
      paragraphText += trimmed;
    }
  });
  
  // Fechar elementos abertos no final
  closeParagraph();
  closeList();
  
  html += '</div>';
  return html;
};

export const localPosts = [
  {
    id: 'local-1',
    title: 'Deficientes auditivos terão isenção de IPI na compra de veículos',
    excerpt: '<p>Agora pessoas com deficiência auditiva estão habilitadas à isenção do IPI. Decisão do STF reconhece o direito constitucional de deficientes auditivos para a aquisição de automóveis com isenção de IPI.</p>',
    content: formatContent(`Agora pessoas com deficiência auditiva estão habilitadas à isenção do IPI (Imposto sobre Produtos Industrializados). Decisão do STF (Supremo Tribunal Federal), proferida em agosto desse ano, reconhece o direto constitucional de deficientes auditivos para a aquisição de automóveis com isenção de IPI. O Supremo estabeleceu o prazo 18 meses para que o Congresso Nacional regulamente a decisão. Até lá, o tribunal determina que o benefício seja concedido a pessoas com deficiência auditiva com base no Artigo 1º, inciso IV da Lei 8.989/1995, que isenta do tributo "pessoas com deficiência física, visual e mental e autista".

O IPI é um tributo federal que pode pesar bastante no valor de um carro. Dependendo do modelo e potência do veículo, a alíquota pode variar de 7% a 25% do valor.

De acordo com o projeto de lei em tramitação, poderão ter direito à isenção de IPI apenas as pessoas portadoras de deficiência comprovada na seguinte elegibilidade: perda auditiva bilateral, parcial ou total, de 41 dB ou mais. A perda auditiva deve ser aferida por audiograma nas seguintes frequências: 500Hz, 1.000Hz, 2.000Hz e 3.000Hz. O objetivo do benefício fiscal é promover políticas públicas para a inclusão social das pessoas com deficiência.

Estima-se que no Brasil existam mais de 10 milhões de pessoas com perda auditiva entre os diferentes graus existentes. Segundo a pesquisa, 2.3 milhões têm deficiência severa. Deste total, 9% das pessoas nasceram com deficiência auditiva e 91% adquiriram ao longo da vida. Metade antes dos 50 anos. De acordo com o estudo, 87% das pessoas com deficiência auditiva não usam aparelhos auditivos.

Na maioria dos casos, a perda acontece de maneira gradativa e é ignorada durante um longo período de tempo (em média 7 anos) e tende a aumentar com o passar do tempo. Porém, no início, é comum que as pessoas não percebam a perda auditiva como realmente uma perda auditiva. Geralmente associam a uma condição passageira e por isso não procuram ajuda. Caso tenha alguma dificuldade em ouvir ou conheça alguém que tenha, não deixe passar, procure ajuda o quanto antes para o problema não se agravar.

No mercado há mais de 13 anos, a Acustika Auditiva trabalha com soluções personalizadas para cada paciente.

Além disso, a Acustika Auditiva é multimarcas e tem a disposição uma variedade de tecnologias para buscar o aparelho que mais se adapta a necessidade do paciente. Desta maneira, você pode realizar todos os seus testes, tirar suas dúvidas sobre tecnologias e aparelhos em um só lugar! Também realizamos diversos exames, manutenção de aparelhos auditivos, reposição de peças, pilhas e acessórios.

A Acustika Auditiva possui 3 unidades, sendo duas na Grande Florianópolis e uma em São Paulo Capital. Não perca mais tempo. Solicite um atendimento personalizado.

#OUÇABEMVIVAMELHOR`),
    date: '2024-08-15T00:00:00',
    slug: 'deficientes-auditivos-isencao-ipi',
    featuredImage: deficientesAuditivosImage,
    author: 'Acustika',
    categories: [{ id: 'noticias', name: 'Notícias', slug: 'noticias' }],
    link: '/blog/deficientes-auditivos-isencao-ipi',
    isLocal: true
  },
  {
    id: 'local-2',
    title: 'Fatos Acústicos incríveis sobre sua audição',
    excerpt: '<p>Muitos estudos testaram o poder da música em nosso cérebro e confirmaram que ela é capaz de nos fazer relaxar, concentrar e de nos encorajar. Descubra fatos fascinantes sobre como a música afeta nossa saúde.</p>',
    content: formatContent(`Muitos estudos testaram o poder da música em nosso cérebro e confirmaram que ela é capaz de nos fazer relaxar, concentrar e de nos encorajar. Uma música que tenha um ritmo semelhante aos batimentos cardíacos por exemplo, pode ser mais eficaz do que um medicamento tranquilizante (ansiolítico). Razão pela qual, desde o início do século passado, alguns centros médicos tocam jazz e música clássica durante os procedimentos cirúrgicos. Conforme publicado no British Medical Journal.

A música pode controlar a pressão arterial e a saúde do coração de acordo com um estudo da Sociedade Europeia de Cardiologia. Existem músicas que podem ser tão relaxantes que, assim como os ansiolíticos, deveriam ser proibidas ao volante.

Este é o caso da música Weightless, do grupo Marconi Union. Nos seus oito minutos de duração, os níveis de estresse e ansiedade dos ouvintes caem para 65% do normal. E não é coincidência! Para compor essa música, o trio britânico teve a ajuda de neurologistas e terapeutas. A partitura foi projetada para que a melodia, os ritmos e os baixos ajudassem a diminuir a frequência cardíaca, reduzir a pressão arterial e os níveis de cortisol, o hormônio do estresse. Acesse o link e veja se funciona com você, mas não ao volante por favor:


Outro fato curioso vem da Universidade de Londres, os psicólogos Caspar Addyman e Lauren Stewart, e a cantora Imogen Heap criaram a primeira música científica para "trazer felicidade e riso em bebês de 6 a 24 meses". É intitulada The Happy Song!!! Foi testada com 56 crianças e segundo seus autores, funcionou. Veja como seu bebê reage ouvindo ela:


Referência em reabilitação auditiva

No mercado há mais de 13 anos, a Acustika Auditiva trabalha com soluções personalizadas para cada paciente.

Além disso, a Acustika Auditiva é multimarcas e tem a disposição uma variedade de tecnologias para buscar o aparelho que mais se adapta a necessidade do paciente. Desta maneira, você pode realizar todos os seus testes, tirar suas dúvidas sobre tecnologias e aparelhos em um só lugar! Também realizamos diversos exames, manutenção de aparelhos auditivos, reposição de peças, pilhas e acessórios.

A Acustika Auditiva possui 3 unidades, sendo duas na Grande Florianópolis e uma em São Paulo Capital. Não perca mais tempo. Solicite um atendimento personalizado.

#OUÇABEMVIVAMELHOR`),
    date: '2024-07-20T00:00:00',
    slug: 'fatos-acusticos-increveis-audicao',
    featuredImage: fatosAcustikosImage,
    author: 'Acustika',
    categories: [{ id: 'curiosidades', name: 'Curiosidades', slug: 'curiosidades' }],
    link: '/blog/fatos-acusticos-increveis-audicao',
    isLocal: true
  },
  {
    id: 'local-3',
    title: 'Cuidados que todos devem ter com a audição',
    excerpt: '<p>A audição é o sentido mais ligado ao aprendizado da vida humana. Separamos algumas dicas essenciais de cuidados com sua audição que podem fazer toda a diferença no seu futuro.</p>',
    content: formatContent(`A audição é o sentido mais ligado ao aprendizado da vida humana, afinal, nós aprendemos a falar ouvindo as outras pessoas. Ela é responsável por grande parte da interação que temos com o mundo à nossa volta e é uma grande fonte de prazer, quando escutamos aquela música favorita por exemplo, ou o canto de um passarinho. A audição também e muito importante para a orientação espacial em todas as ocasiões.

Mas, quantas vezes nós pensamos nela? Será que estamos cuidando da nossa audição? A audição é um sentido que nunca desliga, ou seja, estamos ouvindo e interagindo o tempo todo. Por isso, precisamos tomar alguns cuidados para não prejudica-la. Com as novas tecnologias existentes no mundo, como fones de ouvido, celulares e aparelhos eletrônicos potentes, a perda auditiva deve aumentar nos próximos anos e é um perigo para as próximas gerações. Além da fadiga auditiva natural decorrente do envelhecimento, adicionamos alguns fatores a nossa rotina que pode prejudicar ainda mais nossa audição.

Separamos algumas dicas de cuidados com sua audição que podem ser essenciais no seu futuro.

1. Evite ou proteja-se ao máximo do excesso de ruídos.

Utilize protetores auriculares em locais de trabalho com muito barulho, como fábrica ou construção civil. Evite permanecer em ambientes fechados e barulhentos por muito tempo. Fique longe da caixa de som em shows e festas. Evite música alta por longos períodos seguidos. O ideal é manter o volume das caixas de som abaixo de 80 decibéis e não escutar música por mais de 8 horas seguidas.

2. Evite o uso prolongado de fones de ouvido

O uso excessivo de fones de ouvido por longas horas pode prejudicar de uma forma irreversível sua audição, além de causar distúrbios auditivos como os zumbidos, dores de cabeça e dificuldade de concentração.

Isso porque eles geram vibrações sonoras de alta intensidade no interior dos ouvidos, sobrecarregando as células ciliadas e afetando a capacidade auditiva.

Você sabia? O uso indevido dos fones de ouvido já é responsável por cerca de 5% das perdas auditivas no Brasil! Dê preferência para fones de ouvido do tipo concha. Esse modelo distribui melhor o som, diminui a proximidade com o ouvido e também o volume do som que chega ao seu interior. Evite utilizá-los por mais de uma hora seguida, fazendo intervalos a cada hora de exposição. Não ultrapasse o volume de 60 decibéis.

3. Limpe corretamente os ouvidos

Muito comum e algumas vezes perigoso, o hábito de limpar os ouvidos é a causa de muitos problemas auditivos. A cera que muitas pessoas enxergam como inimiga, é a responsável por proteger o canal auditivo, evitando que sujeira, água e outros corpos estranhos entrem no ouvido. Por isso, elas devem permanecer no canal e a limpeza deve ser feita apenas no excesso aparente.

O ideal é que a limpeza seja feita apenas com a toalha de banho. Limpar os ouvidos com cotonetes de maneira descuidada por exemplo, pode causar lesões, perfurações e perdas auditivas.

A melhor forma de manter a higiene é limpar apenas a parte externa das orelhas. Nunca introduza qualquer tipo de material dentro do canal auditivo. Se for necessário procure um otorrinolaringologista para uma limpeza.

4. Consulte-se regularmente

No início a maioria das perdas auditivas não são percebidas ou são facilmente ignoradas, porém, seu desenvolvimento silencioso e gradual pode causar uma perda auditiva muito mais severa.

Assim que perceber qualquer diminuição na capacidade auditiva, procure um especialista, não tenha vergonha, esta atitude irá se refletir no decorrer da sua vida e irá lhe assegurar mais qualidade de vida e proximidade com as pessoas que ama.

A melhor forma de evitar as perdas auditivas a longo prazo ainda é a prevenção. Cuide-se!!

Referência em Reabilitação Auditiva

No mercado há mais de 13 anos, a Acustika Auditiva trabalha com soluções personalizadas para cada paciente.

É um Centro Auditivo multimarcas e tem à disposição uma variedade de tecnologias para buscar o aparelho que mais se adapta a sua necessidade. Dessa forma, você pode realizar todos os seus testes, tirar suas dúvidas sobre tecnologias e aparelhos em um só lugar! Também realiza diversos exames, manutenção de aparelhos auditivos, reposição de peças, pilhas e acessórios.

A Acustika Auditiva possui 3 unidades, sendo duas na Grande Florianópolis e uma em São Paulo Capital.

Não perca mais tempo. Solicite um atendimento personalizado.`),
    date: '2024-06-15T00:00:00',
    slug: 'cuidados-audicao',
    featuredImage: cuidadosAudicaoImage,
    author: 'Acustika',
    categories: [{ id: 'dicas', name: 'Dicas', slug: 'dicas' }],
    link: '/blog/cuidados-audicao',
    isLocal: true
  },
  {
    id: 'local-4',
    title: 'O que é memória auditiva',
    excerpt: '<p>A memória auditiva é o sentido mais essencial no desenvolvimento humano. É a partir dela que ouvimos as outras pessoas, processamos a mensagem e armazenamos as informações.</p>',
    content: formatContent(`Quem não tem uma lembrança de uma música, de um animal de estimação, dos sons que invadiam o ambiente naquele dia especial? do parabéns em volta do bolo? Praticamente todas as lembranças que temos tem um dos dedinhos da memória auditiva. A memória auditiva é o sentido mais essencial no desenvolvimento humano. É a partir dela que ouvimos as outras pessoas, processamos a mensagem e armazenamos as informações.

O que é memória auditiva?

Já deu pra imaginar como a saúde auditiva é importante? De uma forma bem simples a memória auditiva nos dá a capacidade de aprender ouvindo. Aprender não só no sentido de adquirir conhecimento, mas a memória auditiva é uma forma do seu cérebro aprender também, por isso pessoas com altos graus de perda auditiva frequentemente também apresentam quadros de problemas cognitivos, isolamento e depressão, e tendem a apresentar problemas senis. A memória ecóica é um dos registros da memória sensorial . Especificamente, é um componente da memória de curto prazo responsável por reter as informações auditivas. Esse sistema é capaz de armazenar grandes quantidades de informações auditivas por um curto período de tempo (entre três e quatro segundos, embora alguns autores aumentem esse tempo para seis .

O processo da memória:

Audição: a pessoa ouve as informações;
Processamento das informações: o cérebro entende o significado do que foi dito;
Armazenamento das informações: a mensagem é guardada na memória de curto prazo para que a pessoa responda à pergunta ou siga as instruções por exemplo. Além disso, as informações podem ser armazenadas na memória de longo prazo para serem lembradas posteriormente;
Lembrança: assim, a pessoa consegue lembrar das informações que já ouviu antes.
Por que a memória auditiva é importante?

Muitas vezes não percebemos, mas a memória auditiva é responsável pela maioria das interações sociais! Por isso a perda auditiva está diretamente ligada à quadros de depressão e solidão. Quando as interações humanas ficam prejudicadas, a tendência humana é se isolar! E quanto mais tempo passamos isolados, menos exercitamos nosso cérebro.

Problemas relacionados à memória auditiva

Lembra da expressão entrar por um ouvido e sair pelo outro? Então, é justamente isso que acontece com pessoas que tem alguma deficiência na memória auditiva, independente da idade.

Assim, os problemas no processamento da memória ecoica costumam estar relacionados aos distúrbios de desenvolvimento da linguagem, principalmente em crianças.

Os desafios da memória auditiva. A seguir alguns exemplos de falha na memória:

dificuldade em realizar tarefas com várias etapas;
precisam de mais tempo para reconhecer e processar as informações que ouviram;
baixo desempenho no aprendizado ou no trabalho;
no caso das crianças, dificuldade de alfabetização;
surgimento de problemas comportamentais em consequência dos sentimentos de frustração e incompetência;
dificuldade na interpretação das situações do cotidiano.
É importante deixar claro que não estamos falando de perda de audição. As pessoas com déficit de memória auditiva podem ouvir normalmente. Mas, geralmente, se distraem e têm problemas para se concentrar nas tarefas que estão executando.

Referência em reabilitação auditiva

No mercado há mais de 13 anos a Acustika Auditiva trabalha com soluções personalizadas para cada paciente.

Além disso a Acustika Auditiva é multimarcas e tem à disposição uma variedade de tecnologias para buscar o aparelho que mais se adapta à necessidade do paciente. Desta maneira, você pode realizar todos os seus testes, tirar suas dúvidas sobre tecnologias e aparelhos em um só lugar, também realizamos diversos exames auditivos, manutenção de aparelhos, reposição de peças e pilhas.

A Acustika Auditiva possui 3 unidades, sendo duas na Grande Florianópolis e uma em São Paulo Capital. Não perca mais tempo. Solicite um atendimento personalizado.

#OUÇABEMVIVAMELHOR`),
    date: '2024-05-10T00:00:00',
    slug: 'memoria-auditiva',
    featuredImage: memoriaAuditivaImage,
    author: 'Acustika',
    categories: [{ id: 'saude', name: 'Saúde', slug: 'saude' }],
    link: '/blog/memoria-auditiva',
    isLocal: true
  },
  {
    id: 'local-5',
    title: 'Testes auditivos para fazer em casa',
    excerpt: '<p>É possível manter uma boa memória e saúde auditiva com estratégias simples. Exercícios práticos podem exercitar o cérebro e estimular o armazenamento das informações auditivas.</p>',
    content: formatContent(`É possível manter uma boa memória e saúde auditiva para as perdas ao longo jornada, afinal nossos ouvidos não param de trabalhar um minuto da nossa vida. A partir de algumas estratégias simples, exercícios práticos podem exercitar o cérebro e estimular o armazenamento das informações auditivas

1. Teste de identificação de sons

Esse teste funciona como um jogo de adivinhação e é ideal que ele seja realizado entre duas pessoas ou mais. Reúna alguns objetos com sons diferentes em seguida com os olhos vendados você precisa ouvir o som de um dos objetos e adivinhar qual é. Este teste pode ser feito por idosos, crianças e toda a família pode participar.

2. Teste de reconhecimento de vozes

Parecido com o anterior, a intenção é verificar e exercitar o reconhecimento de vozes de pessoas conhecidas. É legal se você participar com mais pessoas e também ajuda se tiver alguém para coordenar a brincadeira!

Jogue vendado! o animador escolhe uma pessoa da roda que deverá dizer "quem é?". A pessoa que estiver vendada precisará relacionar a voz com o nome do participante que falou a frase.

3. Jogo do apito

Esse teste exige apenas um apito e alguns participantes que devem ser colocados em uma fila com pelo menos um metro de distância entre eles. O objetivo do jogo é estimular o reconhecimento dos sons com algumas variações de intensidade, duração e frequência. Assim, os participantes deverão dar um passo à frente quando o animador apitar uma vez. Já para dois apitos, eles deverão dar um passo para trás. Quem errar os comandos é eliminado e o jogo continua até restar um só participante. É possível criar variações para o jogo e incluir outros comandos, como saltos, palmas ou outros tipos de movimentos.

Referência em reabilitação auditiva

No mercado há mais de 13 anos a Acustika Auditiva trabalha com soluções personalizadas para cada paciente.

Além disso, a Acustika Auditiva é multimarcas e tem à disposição uma variedade de tecnologias para buscar o aparelho que mais se adapta a sua necessidade. Desta maneira, você pode realizar todos os seus testes, tirar suas dúvidas sobre tecnologias e aparelhos em um só lugar, também realizamos diversos exames, manutenção de aparelhos auditivos, reposição de peças e pilhas.

A Acustika Auditiva possui 3 unidades, sendo duas na Grande Florianópolis e um em São Paulo Capital. Não perca mais tempo. Solicite um atendimento personalizado.`),
    date: '2024-04-25T00:00:00',
    slug: 'testes-auditivos-casa',
    featuredImage: testesAuditivosImage,
    author: 'Acustika',
    categories: [{ id: 'dicas', name: 'Dicas', slug: 'dicas' }],
    link: '/blog/testes-auditivos-casa',
    isLocal: true
  },
  {
    id: 'local-6',
    title: 'Fatos incríveis sobre sua audição',
    excerpt: '<p>Pesquisadores de Newcastle mediram a tolerância de voluntários a mais de 70 sons e descobriram quais são os sons mais insuportáveis para o ouvido humano. Entenda o porquê.</p>',
    content: formatContent(`Os sons mais desagradáveis para o ouvido humano! Entenda o porquê.

Pesquisadores de Newcastle mediram a tolerância de 13 voluntários a mais de 70 sons. Eles compararam a avaliação com imagens de ressonância magnética e descobriram o que acontece quando ouvimos o ruído de uma faca em atrito com uma garrafa de vidro por exemplo.

A equipe de pesquisadores identificou quais são os sons mais insuportáveis para o ouvido humano. Os cinco ruídos considerados mais repulsivos foram: faca arranhando uma garrafa; garfo contra um copo; giz em atrito com uma lousa; régua raspando numa garrafa; e, por fim, unhas em atrito com uma lousa.

O objetivo do teste, conforme explica o autor do estudo publicado na semana passada no The Journal of Neuroscience, doutor Sukhbinder Kumar, é tentar entender por que esses sons causam sensações tão repulsivas. Para tanto, foram coletadas imagens de ressonância magnética dos cérebros dos voluntários enquanto eles ouviam os sons.

As ressonâncias mostraram que, quando escutamos um ruído desagradável, a amídala cerebral, responsável por processar emoções, é ativada. Ela ajusta o funcionamento do córtex auditivo, a parte do nosso cérebro que processa sons, e aumenta a sua percepção. A atividade da amídala e do córtex auditivo, nas imagens, variou numa relação direta com a classificação dos sons, entre mais e menos desagradáveis

Frequência – Kumar disse também que qualquer som entre 2.000 e 5.000 Hz foi considerado desagradável.

Os pesquisadores acreditam que um melhor entendimento das reações que os sons causam no cérebro pode ajudar a compreender distúrbios como hiperacusia (hipersensibilidade auditiva) e autismo, marcados por baixa tolerância a sons.

Fonte: https://veja.abril.com.br/ciencia/os-sons-mais-desagradaveis-para-o-ouvido-humano/

Referência em Reabilitação Auditiva

No mercado há mais de 13 anos, a Acustika Auditiva trabalha com soluções personalizadas para cada paciente.

É um Centro Auditivo multimarcas e tem à disposição uma variedade de tecnologias para buscar o aparelho que mais se adapta a sua necessidade. Dessa forma, você pode realizar todos os seus testes, tirar suas dúvidas sobre tecnologias e aparelhos em um só lugar! Também realiza diversos exames, manutenção de aparelhos auditivos, reposição de peças, pilhas e acessórios.

A Acustika Auditiva possui 3 unidades, sendo duas na Grande Florianópolis e uma em São Paulo Capital.

Não perca mais tempo. Solicite um atendimento personalizado.`),
    date: '2024-03-18T00:00:00',
    slug: 'fatos-increveis-audicao',
    featuredImage: fatosIncreveisImage,
    author: 'Acustika',
    categories: [{ id: 'curiosidades', name: 'Curiosidades', slug: 'curiosidades' }],
    link: '/blog/fatos-increveis-audicao',
    isLocal: true
  },
  {
    id: 'local-7',
    title: 'O atendimento multimarcas é muito mais prático e vantajoso para o paciente. Entenda porquê',
    excerpt: '<p>Você já foi em algum restaurante que só tinha um prato para vender? Com os aparelhos auditivos não é diferente. A Acustika oferece diversas marcas e tecnologias em um só lugar.</p>',
    content: formatContent(`Você já foi em algum restaurante que só tinha um prato para vender? Ou acabou se decepcionando com a falta de opções em alguma loja ou mercado?

Pois então! A Acustika Auditiva através de uma pesquisa constatou que com os aparelhos auditivos não é diferente. Hoje em dia temos diversos tipos de tecnologias que servem para determinados tipos de perda. E vamos além as pessoas tem seus próprios gostos e preferências. Algumas pessoas valorizam mais o design de um aparelho auditivo, pois também é um acessório que reflete sua personalidade, outros preferem a conectividade ou seja, a possibilidade de conectar seu aparelho auditivo a outros aparelhos como tv´s computadores, rádio e até mesmo a central inteligente de sua casa.

Imagina se as concessionárias tivessem apenas um tipo de oferta ou opção de veículo! Não só apenas as configurações dos aparelhos são importantes, mas também os preços! Existem diversos valores para diversas necessidades, o mais importante durante o processo de escolha do seu aparelho auditivo na Acustika é a avaliação do profissional que irá lhe indicar quais aparelhos são assertivos para sua perda! A chance do paciente se decepcionar é muito menor, além da liberdade da escolha de acordo com suas condições e necessidades sabendo que qualquer um dos aparelhos apresentados pelo profissional atende à sua necessidade, o resto é sua escolha, como recursos, cores, conexões entre outros.

Outro fator muito importante é o tempo! Quando se tem opções, e estas opções são as melhores marcas do mercado, não é necessário visitar vários lugares, é possivel experimentar diversas tecnologias num só lugar. Além das opções a Acustika Auditiva ainda tem serviços de manutenção multimarcas, peças de reposição, revisões, pilhas e acessórios. Atendimento especializado há mais de 13 anos em reabilitação auditiva, ajudando o paciente nas melhores escolhas.

#ouçabemvivamelhor

Acustika Multimarcas:

Mais opções
Menos tempo
Mais liberdade de escolha!
Maior economia
Referência em reabilitação auditiva

No mercado há mais de 13 anos a Acustika Auditiva trabalha com soluções personalizadas para cada paciente.

Além disso a Acustika Auditiva é multimarcas e tem à disposição uma variedade de tecnologias para buscar o aparelho que mais se adapta à necessidade do paciente. Desta maneira, você pode realizar todos os seus testes, tirar suas dúvidas sobre tecnologias e aparelhos em um só lugar, também realizamos diversos exames, manutenção de aparelhos auditivos, reposição de peças e pilhas.

A Acustika Auditiva possui 3 unidades, sendo duas na Grande Florianópolis (Floripa e São José), e São Paulo Capital.

Não perca mais tempo. Solicite um atendimento personalizado.`),
    date: '2024-02-12T00:00:00',
    slug: 'atendimento-multimarcas-vantajoso',
    featuredImage: atendimentoMultimarcasImage,
    author: 'Acustika',
    categories: [{ id: 'acustika', name: 'Acustika', slug: 'acustika' }],
    link: '/blog/atendimento-multimarcas-vantajoso',
    isLocal: true
  }
];

// Função para buscar um post local por slug
export const getLocalPostBySlug = (slug) => {
  return localPosts.find(post => post.slug === slug);
};

// Função para verificar se um slug é de um post local
export const isLocalPost = (slug) => {
  return localPosts.some(post => post.slug === slug);
};

