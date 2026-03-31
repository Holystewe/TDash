namespace TDash.Domain.Models
{
    public class Player
    {
        public Guid Id { get; set; }

        /// <summary>
        /// DoK / MasterVault username
        /// </summary>
        public string Username { get; set; } = string.Empty;

        public string? Country { get; set; }

        public string? Region { get; set; }

        /// <summary>
        /// DoK profile URL
        /// </summary>
        public string? DoKProfileLink { get; set; }

        // --- Deck stats ---

        public int RegisteredDecksCount { get; set; }

        /// <summary>
        /// Average SAS of all owned decks (DoK)
        /// </summary>
        public decimal? AvgSas { get; set; }

        /// <summary>
        /// Name of the player's highest-SAS deck
        /// </summary>
        public string? TopDeckName { get; set; }

        public decimal? TopDeckSas { get; set; }

        // --- Win stats ---

        public int TotalWins { get; set; }

        public int TotalLosses { get; set; }

        /// <summary>
        /// Win rate as a percentage (0–100)
        /// </summary>
        public decimal? WinRate { get; set; }

        // --- Competitive profile ---

        /// <summary>
        /// Current chains handicap (DoK global)
        /// </summary>
        public int Chains { get; set; }

        /// <summary>
        /// Power level tier (1–4)
        /// </summary>
        public int? PowerLevel { get; set; }

        /// <summary>
        /// The house this player most frequently runs
        /// </summary>
        public string? FavoriteHouse { get; set; }

        // --- Auth link ---

        /// <summary>
        /// Linked identity subject (Entra ID OID)
        /// </summary>
        public string? IdentitySubject { get; set; }

        public DateTimeOffset? RegisteredAt { get; set; }
    }
}
