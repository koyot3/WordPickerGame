using DragWordGame.Core.Domain.Models;
using System.Collections.Generic;

namespace DragWordGame.ViewModels
{
    public class SavedGameResponse
    {
        public Rank MyRank { get; set; }
        public List<Rank> TopTenRanks { get; set; }
    }
}