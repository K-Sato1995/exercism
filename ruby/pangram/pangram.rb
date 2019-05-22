class Pangram
  def self.pangram?(sentence)
    pangram = ('a'..'z').to_a.join
    sentence.scan(/[a-z]|[A-Z]/).map(&:downcase).sort.uniq.join.include?(pangram)
  end
end
