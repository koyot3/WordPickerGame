using DragWordGame.Core.Domain.Models;
using System;
using System.Collections.Generic;

namespace DragWordGame.Core.ApplicationService.Interfaces
{
    public interface IGameService
    {
        Rank SaveGame(string playerName, double timeRange, DateTime playedTime);
        List<Rank> GetTopTen();
    }
}
