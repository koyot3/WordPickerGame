using DragWordGame.Core.ApplicationService.Interfaces;
using DragWordGame.Core.Domain.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace DragWordGame.Service.ApplicationService.Services
{
    public class GameService : IGameService
    {
        public Rank SaveGame(string playerName, double timeRange, DateTime playedTime)
        {
            using (StreamReader r = new StreamReader(@"App_Data/ranking.json"))
            {
                string json = r.ReadToEnd();
                var items = JsonConvert.DeserializeObject<List<Rank>>(json);
                var result = new Rank
                {
                    Player = playerName,
                    PlayedTime = playedTime,
                    TimeRange = timeRange
                };
                items.Add(result);
                items.Sort();
                result.RankNo = items.IndexOf(result) + 1;
                return result;
            }
        }
    }
}
