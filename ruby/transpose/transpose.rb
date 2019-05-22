class Transpose

  def self.transpose(input)
    # make an array of arrays
    rows = input.split(/\n/).map { |row| row.split('') }
    columns = rows.transpose
    # columns.map { |column| p column.join }

    columns.each do |column|
    @@result = <<-RESULT
        #{column.join}
      RESULT
    end

    p @@result
  end
end
