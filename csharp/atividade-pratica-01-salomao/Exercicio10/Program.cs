// Exercício 10 - Cadastro de empresa
Console.WriteLine("=================================");
Console.WriteLine("       CADASTRO DE EMPRESA");
Console.WriteLine("=================================");

Console.Write("Nome da empresa: ");
string empresa = Console.ReadLine()!;
Console.Write("CNPJ: ");
string cnpj = Console.ReadLine()!;
Console.Write("Cidade: ");
string cidade = Console.ReadLine()!;
Console.Write("Nome do responsável: ");
string responsavel = Console.ReadLine()!;
Console.Write("Número de funcionários: ");
int funcionarios = int.Parse(Console.ReadLine()!);
Console.Write("Faturamento mensal: R$ ");
double faturamento = double.Parse(Console.ReadLine()!);
Console.Write("A empresa está ativa? (true/false): ");
bool ativa = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n=================================");
Console.WriteLine("        EMPRESA CADASTRADA");
Console.WriteLine("=================================");
Console.WriteLine($"Empresa: {empresa}");
Console.WriteLine($"CNPJ: {cnpj}");
Console.WriteLine($"Cidade: {cidade}");
Console.WriteLine($"Responsável: {responsavel}");
Console.WriteLine($"Número de funcionários: {funcionarios}");
Console.WriteLine($"Faturamento mensal: R$ {faturamento:F2}");
Console.WriteLine($"Empresa ativa: {ativa}");
Console.ReadKey();
