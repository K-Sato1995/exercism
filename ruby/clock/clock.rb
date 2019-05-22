class Clock
  # attr_accessor :hour, :minute

  def initialize(hour: 0, minute: 0)
    @hour = hour
    @minute = minute
    @time = time(hour, minute)
    p @time
  end

  def time(hours, mins)
    if mins < 0
      # minux_min = -(mins%60)
      # minus_hours = -(mins/60)
    elsif mins < 60
      min = mins
      add_hours = 0
    elsif mins == 60
      min = 0
      add_hours = 1
    else
      min = mins%60
      add_hours = mins/60
    end


    m = shape_min(min)
    h = shape_hour(hours + add_hours)

    "#{h}:#{m}"
  end

  def shape_min(mins)
    if mins < 10
      "0#{mins}"
    elsif 10 <= mins && mins <= 59
      "#{mins}"
    end
  end

  def shape_hour(hours)
    while hours >= 24
      hours -= 24
    end

    while hours < 0
      hours += 24
    end

    if hours < 10
      "0#{hours}"
    elsif 10 <= hours && hours <= 24
      "#{hours}"
    end
  end

  def to_s
    @time
  end
end
