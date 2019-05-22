class Luhn
  attr_reader :number

  def initialize(number)
    @number = number.delete(' ')
  end

  def self.valid?(string)
    Luhn.new(string).valid?
  end

  def valid?
    return false if all_numeric?

    return false if digits.length <= 1

    (checksum % 10).zero?
  end

  def all_numeric?
    number.scan(/\D/).any?
  end

  def digits
    number.delete(' ').each_char.map(&:to_i).reverse
  end

  def double(number)
    doubled_number = number * 2
    return doubled_number -= 9 if doubled_number > 9
    doubled_number
  end

  def checksum
    digits.each_slice(2).sum do |even, odd=0|
      even + double(odd)
    end
  end
end
