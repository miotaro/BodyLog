class Weight < ApplicationRecord
  validates :weight, presence: true
  validates :bmi, presence: true

  belongs_to :user
end
