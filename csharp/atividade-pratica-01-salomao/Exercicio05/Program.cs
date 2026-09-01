// Exercício 05 - Cadastro de funcionário
Console.WriteLine("=================================");
Console.WriteLine("    CADASTRO DE FUNCIONÁRIO");
Console.WriteLine("=================================");

Console.Write("Nome: ");
string nome = Console.ReadLine()!;
Console.Write("Cargo: ");
string cargo = Console.ReadLine()!;
Console.Write("Idade: ");
int idade = int.Parse(Console.ReadLine()!);
Console.Write("Salário: R$ ");
double salario = double.Parse(Console.ReadLine()!);
Console.Write("Cidade: ");
string cidade = Console.ReadLine()!;
Console.Write("Está ativo na empresa? (true/false): ");
bool ativo = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n=================================");
Console.WriteLine("       FICHA DO FUNCIONÁRIO");
Console.WriteLine("=================================");
Console.WriteLine($"Nome: {nome}");
Console.WriteLine($"Cargo: {cargo}");
Console.WriteLine($"Idade: {idade} anos");
Console.WriteLine($"Salário: R$ {salario:F2}");
Console.WriteLine($"Cidade: {cidade}");
Console.WriteLine($"Funcionário ativo: {ativo}");
Console.ReadKey();
