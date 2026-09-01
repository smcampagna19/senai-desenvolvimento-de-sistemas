// Exercício 04 - Cadastro de filme
Console.WriteLine("=================================");
Console.WriteLine("        CADASTRO DE FILME");
Console.WriteLine("=================================");

Console.Write("Nome do filme: ");
string filme = Console.ReadLine()!;
Console.Write("Nome do diretor: ");
string diretor = Console.ReadLine()!;
Console.Write("Ano de lançamento: ");
int ano = int.Parse(Console.ReadLine()!);
Console.Write("Duração em minutos: ");
int duracao = int.Parse(Console.ReadLine()!);
Console.Write("Nota do filme: ");
double nota = double.Parse(Console.ReadLine()!);
Console.Write("O filme já foi assistido? (true/false): ");
bool assistido = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n--- DADOS DO FILME ---");
Console.WriteLine($"Filme: {filme}");
Console.WriteLine($"Diretor: {diretor}");
Console.WriteLine($"Ano de lançamento: {ano}");
Console.WriteLine($"Duração: {duracao} minutos");
Console.WriteLine($"Nota: {nota:F1}");
Console.WriteLine($"Assistido: {assistido}");
Console.ReadKey();
