class TriangleError < StandardError; end

class Triangle
  attr_reader :side_one, :side_two, :side_three, :sides

  def initialize(sides)
    sides.sort!
    @side_one, @side_two, @side_three = sides
    @sides = sides
    raise TriangleError unless valid?
  end

  def equilateral?
    sides.uniq.one?
  end

  def isosceles?
    sides.uniq.size.between?(1, 2)
  end

  def scalene?
    sides.uniq.size == 3
  end

  private

  def valid?
    side_one > 0 && side_one + side_two >= side_three
  end
end
