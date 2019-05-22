class HighScores
  attr_reader :scores

  def initialize(scores)
    @scores = scores
  end

  def latest
    scores.last
  end

  def personal_best
    scores.max
  end

  def personal_top
    scores.sort.max(3)
  end

  def report
    "Your latest score was #{latest}. #{second_sentence}"
  end

  def second_sentence
    if personal_best == latest
      "That's your personal best!"
    else
      "That's #{personal_best - latest} short of your personal best!"
    end
  end
end
