class Matrix
  def initialize(nums)
    @nums = nums
  end

  def rows
    nums.lines.map { |num| num.split.map!(&:to_i) }
  end

  def columns
    rows.transpose
  end

  private

  def nums
    @nums
  end
end
