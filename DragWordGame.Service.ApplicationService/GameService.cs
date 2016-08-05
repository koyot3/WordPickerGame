using DragWordGame.Core.ApplicationService.Interfaces;
using DragWordGame.Core.Domain.Models;
using DragWordGame.Service.ApplicationService.Utils;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DragWordGame.Service.ApplicationService.Services
{
    public class GameService : IGameService
    {
        public GameService()
        {

        }

        /// <summary>
        /// Save your game and return your rank
        /// </summary>
        /// <param name="playerName"></param>
        /// <param name="timeRange"></param>
        /// <param name="playedTime"></param>
        /// <returns></returns>
        public Rank SaveGame(string playerName, double timeRange, DateTime playedTime)
        {
            string assemblyPath = Path.Combine(ReflectionExtension.GetExecutingAssemblyPath(), @"ranking.json");
            List<Rank> savedGames = null;
            Rank result = new Rank();
            using (StreamReader r = new StreamReader(assemblyPath))
            {
                string json = r.ReadToEnd();
                savedGames = JsonConvert.DeserializeObject<List<Rank>>(json);
                if(savedGames == null)
                {
                    savedGames = new List<Rank>();
                }
                result = new Rank
                {
                    Player = playerName,
                    PlayedTime = playedTime,
                    TimeRange = timeRange
                };
                savedGames.Add(result);
                savedGames.Sort();
                result.RankNo = savedGames.IndexOf(result) + 1;
            }
            WriteToFile(savedGames);
            return result;
        }

        /// <summary>
        /// Get top 10 players
        /// </summary>
        /// <returns></returns>
        public List<Rank> GetTopTen()
        {
            string assemblyPath = Path.Combine(ReflectionExtension.GetExecutingAssemblyPath(), @"ranking.json");
            List<Rank> result = null;
            using (StreamReader r = new StreamReader(assemblyPath))
            {
                string json = r.ReadToEnd();
                result = JsonConvert.DeserializeObject<List<Rank>>(json);
                result.Sort();
            }
            return result.Take(10).ToList();
        }

        /// <summary>
        /// Write list of player to ranking.json file
        /// </summary>
        /// <param name="input"></param>
        private void WriteToFile(List<Rank> input)
        {
            string assemblyPath = Path.Combine(ReflectionExtension.GetExecutingAssemblyPath(), @"ranking.json");
            JArray a = new JArray(
                input.Select(p => new JObject {
                    {"Player", p.Player },
                    {"TimeRange", p.TimeRange },
                    {"PlayedTime", p.PlayedTime }
                })
                );
            // write JSON directly to a file
            using (StreamWriter file = File.CreateText(assemblyPath))
            using (JsonTextWriter writer = new JsonTextWriter(file))
            {
                a.WriteTo(writer);
            }
        }


    }
}
