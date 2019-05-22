class Year
  def self.leap?(year)
    (year % 4).zero? && (year % 100).zero? == false || (year % 400).zero?
  end
end
