class Complement
  def self.of_dna(dna_strand)
    dna_strand.gsub(/[GCTA]/, 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U')
  end
end
