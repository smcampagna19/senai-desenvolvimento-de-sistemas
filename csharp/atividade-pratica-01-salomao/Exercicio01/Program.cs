// Exercício 01 - Cadastro de aluno
Console.WriteLine("=================================");
Console.WriteLine("       CADASTRO DE ALUNO");
Console.WriteLine("=================================");

Console.Write("Nome do aluno: ");
string nome = Console.ReadLine()!;
Console.Write("Idade: ");
int idade = int.Parse(Console.ReadLine()!);
Console.Write("Cidade onde mora: ");
string cidade = Console.ReadLine()!;
Console.Write("Altura: ");
double altura = double.Parse(Console.ReadLine()!);
Console.Write("Está matriculado? (true/false): ");
bool matriculado = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n--- DADOS DO ALUNO ---");
Console.WriteLine($"Nome: {nome}");
Console.WriteLine($"Idade: {idade} anos");
Console.WriteLine($"Cidade: {cidade}");
Console.WriteLine($"Altura: {altura:F2} metros");
Console.WriteLine($"Matriculado: {matriculado}");
Console.ReadKey();
