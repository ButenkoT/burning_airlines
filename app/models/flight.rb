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
#

class Flight < ActiveRecord::Base
end
