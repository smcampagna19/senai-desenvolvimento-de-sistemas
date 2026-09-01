// Exercício 06 - Cadastro de veículo
Console.WriteLine("=================================");
Console.WriteLine("       CADASTRO DE VEÍCULO");
Console.WriteLine("=================================");

Console.Write("Marca: ");
string marca = Console.ReadLine()!;
Console.Write("Modelo: ");
string modelo = Console.ReadLine()!;
Console.Write("Ano: ");
int ano = int.Parse(Console.ReadLine()!);
Console.Write("Cor: ");
string cor = Console.ReadLine()!;
Console.Write("Preço: R$ ");
double preco = double.Parse(Console.ReadLine()!);
Console.Write("Está disponível para venda? (true/false): ");
bool disponivel = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n--- DADOS DO VEÍCULO ---");
Console.WriteLine($"Marca: {marca}");
Console.WriteLine($"Modelo: {modelo}");
Console.WriteLine($"Ano: {ano}");
Console.WriteLine($"Cor: {cor}");
Console.WriteLine($"Preço: R$ {preco:F2}");
Console.WriteLine($"Disponível: {disponivel}");
Console.ReadKey();
