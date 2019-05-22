class Nucleotide
  class << self
    def from_dna(arg)
      raise ArgumentError if arg =~ /[^ACGT]/
      arg.chars
    end
  end
end


class Array
  def histogram
    nucs = {'A' => 0, 'C' => 0, 'G' => 0, 'T' => 0}
    each_with_object(nucs) { |word, result| result[word] += 1 }
  end
end
