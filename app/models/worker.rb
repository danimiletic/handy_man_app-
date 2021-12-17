class Worker < ApplicationRecord
validates :name, :phone, :email, presence: true 

end
