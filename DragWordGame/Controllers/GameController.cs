using System.Web.Http;

namespace DragWordGame.Controllers
{
    public class GameController : ApiController
    {
        [HttpGet]
        public bool SaveGame(string userName)
        {
            return true;
        }
    }
}
