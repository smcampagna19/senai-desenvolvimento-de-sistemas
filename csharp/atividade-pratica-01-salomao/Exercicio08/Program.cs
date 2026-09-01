// Exercício 08 - Cadastro de evento
Console.WriteLine("=================================");
Console.WriteLine("        CADASTRO DE EVENTO");
Console.WriteLine("=================================");

Console.Write("Nome do evento: ");
string evento = Console.ReadLine()!;
Console.Write("Local: ");
string local = Console.ReadLine()!;
Console.Write("Data: ");
string data = Console.ReadLine()!;
Console.Write("Quantidade de participantes: ");
int participantes = int.Parse(Console.ReadLine()!);
Console.Write("Valor do ingresso: R$ ");
double ingresso = double.Parse(Console.ReadLine()!);
Console.Write("O evento é gratuito? (true/false): ");
bool gratuito = bool.Parse(Console.ReadLine()!);

Console.WriteLine("\n--- DADOS DO EVENTO ---");
Console.WriteLine($"Evento: {evento}");
Console.WriteLine($"Local: {local}");
Console.WriteLine($"Data: {data}");
Console.WriteLine($"Participantes: {participantes}");
Console.WriteLine($"Valor do ingresso: R$ {ingresso:F2}");
Console.WriteLine($"Gratuito: {gratuito}");
Console.ReadKey();
