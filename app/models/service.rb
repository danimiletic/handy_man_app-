class Service < ApplicationRecord
  belongs_to :worker
  validates :title, :cost, :time, presence: true 
end
