class CreateAddPlaneNameToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :plane_name, :string
  end
end
