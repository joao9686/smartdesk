type StatusChamado = "aberto" | "em_atendimento" | "fechado";

interface Chamado  {
  id: number;
  titulo: string;
  setor?: string;
  status: StatusChamado;
};

const chamado: Chamado = {
  id: 1,
  titulo: "Impressora não imprime",
  setor: "Açougue",
  status: "aberto"
};

console.log(chamado);