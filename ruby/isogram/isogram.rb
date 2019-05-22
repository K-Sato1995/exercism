class Isogram
  def self.isogram?(word)
    letters = word.downcase.scan(/[a-z]/)
    letters.uniq == letters
  end
end
