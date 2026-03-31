namespace TDash.Domain.Models
{
    public class Deck
    {
        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// KeyForge set/expansion (e.g. "Call of the Archons", "Age of Ascension")
        /// </summary>
        public string Set { get; set; } = string.Empty;

        /// <summary>
        /// The three houses composing the deck
        /// </summary>
        public ICollection<string> Houses { get; set; } = [];

        // --- Scoring (DoK / ArchonArcana) ---

        /// <summary>
        /// SAS (Synergy and Anti-Synergy Score) from Decks of KeyForge
        /// </summary>
        public decimal? Sas { get; set; }

        /// <summary>
        /// AERC total score
        /// </summary>
        public decimal? Aerc { get; set; }

        /// <summary>
        /// Aember Control component of AERC
        /// </summary>
        public decimal? AercAemberControl { get; set; }

        /// <summary>
        /// Expected Aember component of AERC
        /// </summary>
        public decimal? AercExpectedAember { get; set; }

        /// <summary>
        /// Artifact Control component of AERC
        /// </summary>
        public decimal? AercArtifactControl { get; set; }

        /// <summary>
        /// Creature Control component of AERC
        /// </summary>
        public decimal? AercCreatureControl { get; set; }

        /// <summary>
        /// Efficiency component of AERC
        /// </summary>
        public decimal? AercEfficiency { get; set; }

        /// <summary>
        /// Recursion component of AERC
        /// </summary>
        public decimal? AercRecursion { get; set; }

        // --- Win stats (DoK) ---

        public int Wins { get; set; }

        public int Losses { get; set; }

        /// <summary>
        /// Win rate as a percentage (0–100)
        /// </summary>
        public decimal? WinRate { get; set; }

        // --- Chains and power ---

        /// <summary>
        /// Current chains handicap assigned to the deck
        /// </summary>
        public int Chains { get; set; }

        /// <summary>
        /// Power level (1–4) estimated by DoK
        /// </summary>
        public int? PowerLevel { get; set; }

        // --- Special cards ---

        /// <summary>
        /// Number of token cards in the deck
        /// </summary>
        public int TokenCount { get; set; }

        /// <summary>
        /// Number of anomaly cards in the deck
        /// </summary>
        public int AnomalyCount { get; set; }

        /// <summary>
        /// Whether the deck is flagged as competitive on DoK
        /// </summary>
        public bool IsCompetitive { get; set; }

        // --- External links ---

        /// <summary>
        /// MasterVault canonical URL
        /// </summary>
        public string MastervaultLink { get; set; } = string.Empty;

        /// <summary>
        /// Decks of KeyForge URL, if registered
        /// </summary>
        public string DoKLink { get; set; } = string.Empty;

        // --- Ownership ---

        public string Owner { get; set; } = string.Empty;

        public string OwnerId { get; set; } = string.Empty;

        public DateTimeOffset? RegisteredAt { get; set; }

        public ICollection<string> UsedInTheseTournaments { get; set; } = [];
    }
}
