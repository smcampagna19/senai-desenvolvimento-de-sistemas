// Exercício 03 - Cadastro de livro
Console.WriteLine("=================================");
Console.WriteLine("        CADASTRO DE LIVRO");
Console.WriteLine("=================================");

Console.Write("Título do livro: ");
string titulo = Console.ReadLine()!;
Console.Write("Nome do autor: ");
string autor = Console.ReadLine()!;
Console.Write("Ano de publicação: ");
int ano = int.Parse(Console.ReadLine()!);
Console.Write("Número de páginas: ");
int paginas = int.Parse(Console.ReadLine()!);
Console.Write("Preço: R$ ");
double preco = double.Parse(Console.ReadLine()!);
Console.Write("O livro está disponível? (true/false): ");
bool disponivel = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n--- DADOS DO LIVRO ---");
Console.WriteLine($"Título: {titulo}");
Console.WriteLine($"Autor: {autor}");
Console.WriteLine($"Ano de publicação: {ano}");
Console.WriteLine($"Número de páginas: {paginas}");
Console.WriteLine($"Preço: R$ {preco:F2}");
Console.WriteLine($"Disponível: {disponivel}");
Console.ReadKey();
