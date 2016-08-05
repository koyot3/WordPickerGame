using DragWordGame.Core.ApplicationService.Interfaces;
using DragWordGame.ViewModels;
using System;
using System.Web.Http;

namespace DragWordGame.Controllers
{
    public class GameController : ApiController
    {
        private IGameService _gameService = null;
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpPost]
        public SavedGameResponse SaveGame(string player, double timeRange, DateTime playedTime)
        {
            var result = new SavedGameResponse();
            result.MyRank = _gameService.SaveGame(player, timeRange, playedTime);
            result.TopTenRanks = _gameService.GetTopTen();
            return result;
        }
    }
}
