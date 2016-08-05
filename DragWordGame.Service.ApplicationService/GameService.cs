using DragWordGame.Core.ApplicationService.Interfaces;
using DragWordGame.Core.Domain.Models;
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

        public Rank SaveGame(string playerName, double timeRange, DateTime playedTime)
        {
            string AssemblyPath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location).ToString();

            using (StreamReader r = new StreamReader(AssemblyPath + "/ranking.json"))
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

        private void WriteToFile(List<Rank> input)
        {
            JArray a = new JArray(
                input.Select(p => new JObject {
                    {"Player", p.Player },
                    {"TimeRange", p.TimeRange },
                    {"PlayedTime", p.PlayedTime }
                })
                );
            // write JSON directly to a file
            using (StreamWriter file = File.CreateText(@"App_Data/ranking.json"))
            using (JsonTextWriter writer = new JsonTextWriter(file))
            {
                a.WriteTo(writer);
            }
        }


    }
}
