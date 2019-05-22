class PhoneNumber
  def self.clean(number)
    pure_num = number.gsub(/\W/, '').sub(/\A1/, '')
    sized_num = PhoneNumber.size_check(pure_num)
    PhoneNumber.code_check(sized_num) unless sized_num.nil?
  end

  def self.size_check(number)
    number if number.size == 10
  end

  def self.code_check(number)
    first_n = number.to_s.split('').first.to_i
    second_n = number.to_s.split('')[3].to_i

    if (0..1).cover?(first_n) || (0..1).cover?(second_n)
      nil
    else
      number
    end
  end
end


=begin 
class PhoneNumber
  VALID_PHONE_NUMBER = /^([2-9]\d\d){2}\d{4}$/

  def self.clean(number)
    numbers = number.gsub(/\D/, "").sub(/^1/, "")
    numbers[VALID_PHONE_NUMBER]
  end
end

module BookKeeping
  VERSION = 2
end
=end
