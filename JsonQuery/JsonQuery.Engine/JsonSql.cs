using Newtonsoft.Json.Linq;

namespace JsonQuery.Engine;

public static class JsonSql
{
	public static object QueryObject(string query, object data)
	{
		var operations = new List<string>();

		var list = new List<JToken>();
		switch (data)
		{
			case JArray array:
				list.AddRange(array.Select(i => i));
				break;
			default:
				list.Add(JToken.FromObject(data));
				break;
		}


		return new object();
	}
}