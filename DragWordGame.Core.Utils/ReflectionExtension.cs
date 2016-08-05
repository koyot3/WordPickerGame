using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DragWordGame.Core.Utils
{
    public static class ReflectionExtension
    {
        public static IEnumerable<string> GetAllProperties(Type objectType)
        {
            IEnumerable<string> results = new List<string>();
            PropertyInfo[] properties = objectType.GetProperties();
            results = properties.Select(prop => prop.Name);
            return results;
        }

        public static IEnumerable<string> GetNonIgnoredProperties(Type objectType)
        {
            IEnumerable<string> results = new List<string>();
            PropertyInfo[] properties = objectType.GetProperties();
            results = properties.Where(prop => prop.GetCustomAttribute<IgnoredAttribute>() == null).Select(prop => prop.Name);
            return results;
        }

        public static bool CheckIgnoredProperty<T>(string propertyName)
            where T : class
        {
            IEnumerable<string> results = new List<string>();
            results = GetNonIgnoredProperties(typeof(T));
            return results.Where(res => res == propertyName).Count() <= 0;
        }

        public static string GetExecutingAssemblyPath()
        {
            var path = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().GetName().CodeBase);
            if (path.IndexOf("file:\\") >= 0)
            {
                path = path.Replace("file:\\", "");
            }
            return path;
        }
    }

    public class IgnoredAttribute : Attribute
    {
        public bool Ignored { get; set; }

        public IgnoredAttribute()
        {
        }
    }
}
