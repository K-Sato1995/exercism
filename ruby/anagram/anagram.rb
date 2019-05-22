class Anagram

  def initialize(word)
    @word = word
  end

  def match(array_of_words)
    array_of_words.select { |w| configure_word(w) == configure_word(word) && w.downcase != word.downcase }
  end

  private

  attr_reader :word

  def configure_word(one_word)
    one_word.downcase.split('').sort.join
  end
end
