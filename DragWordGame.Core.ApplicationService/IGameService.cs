﻿using DragWordGame.Core.Domain.Models;
using System;

namespace DragWordGame.Core.ApplicationService.Interfaces
{
    public interface IGameService
    {
        Rank SaveGame(string playerName, double timeRange, DateTime playedTime);
    }
}
