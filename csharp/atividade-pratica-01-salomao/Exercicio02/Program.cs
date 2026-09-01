// Exercício 02 - Cadastro de produto
Console.WriteLine("=================================");
Console.WriteLine("      CADASTRO DE PRODUTO");
Console.WriteLine("=================================");

Console.Write("Nome do produto: ");
string produto = Console.ReadLine()!;
Console.Write("Código do produto: ");
int codigo = int.Parse(Console.ReadLine()!);
Console.Write("Categoria: ");
string categoria = Console.ReadLine()!;
Console.Write("Preço: R$ ");
double preco = double.Parse(Console.ReadLine()!);
Console.Write("Quantidade em estoque: ");
int quantidade = int.Parse(Console.ReadLine()!);
Console.Write("O produto está disponível? (true/false): ");
bool disponivel = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n--- DADOS DO PRODUTO ---");
Console.WriteLine($"Produto: {produto}");
Console.WriteLine($"Código: {codigo}");
Console.WriteLine($"Categoria: {categoria}");
Console.WriteLine($"Preço: R$ {preco:F2}");
Console.WriteLine($"Quantidade: {quantidade}");
Console.WriteLine($"Disponível: {disponivel}");
Console.ReadKey();
