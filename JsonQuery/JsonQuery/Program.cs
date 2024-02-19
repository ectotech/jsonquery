using JsonQuery.Engine;
using Newtonsoft.Json;

// Read file and load data
Console.WriteLine("Enter file path:");
// var filePath = Console.ReadLine();
// var filePath = "/Users/lukaswass/Downloads/value.json";
// var filePath = "/Users/lukaswass/Downloads/obj.json";
var filePath = "/Users/lukaswass/Downloads/64KB.json";

if (filePath == null || !File.Exists(filePath)) throw new Exception("Invalid file path.");

var json = await File.ReadAllTextAsync(filePath);
var data = JsonConvert.DeserializeObject(json);

if (data == null) throw new Exception("File is not JSON.");

// Get query
Console.WriteLine("Enter query:");
// var query = Console.ReadLine() ?? "";
var query = "SELECT * FROM c WHERE c.name = \"Afzal Ghaffar\"";

// Query data
var res = JsonSql.QueryObject(query, data);