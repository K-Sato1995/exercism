class Hamming
  def self.compute(strand_a, strand_b)
    raise ArgumentError if strand_a.length != strand_b.length
    strand_a.chars.zip(strand_b.chars).count { |molecule_a, molecule_b| molecule_a != molecule_b }
  end
end
