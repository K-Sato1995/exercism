class Brackets
  attr_reader :test_string

  def initialize(test_string)
    @test_string = test_string
  end

  def self.paired?(string)
    Brackets.new(string).paired?
  end

  def paired?
    curly_brackets
  end

  def curly_brackets
    check_array = test_string.scan(/\{|\}/)
    check_array.all? do |first_ele|
      return false unless first_ele + check_array.last == "{}"
      check_array.pop
    end
  end

end
