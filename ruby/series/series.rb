class Series
  attr_reader :digits

  def initialize(digits)
    @digits = digits.split('')
  end

  def slices(num)
    raise ArgumentError if num > digits.size
    sliced_array = []
    digits.each_cons(num) { |i| sliced_array << i.join('') }
    sliced_array
  end
end
