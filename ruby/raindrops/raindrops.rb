class Raindrops
  class << self
    FACTOR_to_SOUND = {
      3 => 'Pling',
      5 => 'Plang',
      7 => 'Plong'
    }.freeze

    def convert(number)
      result = ''
      result << FACTOR_to_SOUND[3] if (number % 3).zero?
      result << FACTOR_to_SOUND[5] if (number % 5).zero?
      result << FACTOR_to_SOUND[7] if (number % 7).zero?
      result << number.to_s if result.empty?
      result
    end
  end
end
