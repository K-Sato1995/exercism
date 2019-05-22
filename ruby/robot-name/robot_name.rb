class Robot
  attr_reader :name

  @@taken_names = []

  def initialize
    @name = robot_name
    if @@taken_names.include?(name)
      reset
    else
      @@taken_names << name
    end
  end

  def self.forget
  end

  def reset
    @name = robot_name
  end

  def robot_name
    random_letters + random_numbers
  end

  def random_letters
    numbers = []
    2.times do
      numbers << rand(0...26)
    end
    "#{('A'..'Z').to_a[numbers[0]]}#{('A'..'Z').to_a[numbers[1]]}"
  end

  def random_numbers
    numbers = []
    3.times do
      numbers << rand(0...9)
    end
    numbers.join('')
  end
end
r1 = Robot.new
r2 = Robot.new
r3 = Robot.new
