class Grains
  def self.square(sq)
    raise ArgumentError if sq <= 0 || sq > 64
    return 1 if sq == 1
    2**(sq - 1)
  end

  def self.total
    (2**64) - 1
  end
end
