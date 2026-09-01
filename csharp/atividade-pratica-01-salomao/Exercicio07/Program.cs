// Exercício 07 - Cadastro de jogo
Console.WriteLine("=================================");
Console.WriteLine("         CADASTRO DE JOGO");
Console.WriteLine("=================================");

Console.Write("Nome do jogo: ");
string jogo = Console.ReadLine()!;
Console.Write("Plataforma: ");
string plataforma = Console.ReadLine()!;
Console.Write("Ano de lançamento: ");
int ano = int.Parse(Console.ReadLine()!);
Console.Write("Preço: R$ ");
double preco = double.Parse(Console.ReadLine()!);
Console.Write("Quantidade de jogadores: ");
int jogadores = int.Parse(Console.ReadLine()!);
Console.Write("O jogo está instalado? (true/false): ");
bool instalado = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n--- DADOS DO JOGO ---");
Console.WriteLine($"Jogo: {jogo}");
Console.WriteLine($"Plataforma: {plataforma}");
Console.WriteLine($"Ano de lançamento: {ano}");
Console.WriteLine($"Preço: R$ {preco:F2}");
Console.WriteLine($"Quantidade de jogadores: {jogadores}");
Console.WriteLine($"Instalado: {instalado}");
Console.ReadKey();
