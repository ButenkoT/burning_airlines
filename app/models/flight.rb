# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  number      :string(255)
#  origin      :string(255)
#  destination :string(255)
#  date        :date
#  created_at  :datetime
#  updated_at  :datetime
#  plane_name  :string(255)
#

class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :reservations
  has_many :users, :through => :reservations
  belongs_to_many :users, :through => :reservations
end
