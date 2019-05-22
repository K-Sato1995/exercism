class Prime
  class << self
    def nth(number)
      prime_numbers = (2..number).select { |num| prime?(num) }
      p prime_numbers[6]
    end

    def prime? (n)
      if n <= 1
          false
      elsif n == 2
          true
      else
          (2..n/2).none? { |i| n % i == 0}
      end
    end
  end
end
