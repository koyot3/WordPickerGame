using Newtonsoft.Json.Serialization;
using System.Web.Http;

namespace DragWordGame
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AutofacConfig.ConfigureContainer();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            GlobalConfiguration.Configuration.EnsureInitialized();
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new DefaultContractResolver();
        }
    }
}
