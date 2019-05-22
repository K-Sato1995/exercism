class Phrase
  def initialize(phrase)
    @phrase = phrase.downcase.scan(/\w+(?:'\w+)*/)
  end

  def word_count
    phrase.each_with_object(Hash.new(0)) { |word, result| result[word] += 1 }
  end

  private

  attr_reader :phrase
end
