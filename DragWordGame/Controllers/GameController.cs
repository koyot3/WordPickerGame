using DragWordGame.Core.ApplicationService.Interfaces;
using DragWordGame.Core.Domain.Models;
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
        public Rank SaveGame(string player, double timeRange, DateTime playedTime)
        {
            return _gameService.SaveGame(player, timeRange, playedTime);
        }
    }
}
