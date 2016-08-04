using System;

namespace DragWordGame.Core.Domain.Models
{
    public class Rank : IComparable<Rank>
    {
        public string Player { get; set; }
        public double TimeRange { get; set; }
        public DateTime PlayedTime { get; set; }
        public int RankNo { get; set; }

        public int CompareTo(Rank other)
        {
            return this.TimeRange.CompareTo(other.TimeRange);
        }
    }
}
