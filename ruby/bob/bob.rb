class Bob
  def self.hey(remark)
    if remark =~ /\A[A-Z]+/
      'Whoa, chill out!'
    elsif remark =~ /\?\z/
      'Sure.'
    else
      'Whatever.'
    end
  end
end
