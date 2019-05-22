class ETL
  def self.transform(old)
    old.each_with_object({}) do |(score, letters), hash|
      letters.each { |letter| hash[letter.downcase] = score }
    end
  end
end
