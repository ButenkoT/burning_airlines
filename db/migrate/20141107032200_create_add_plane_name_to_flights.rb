class CreateAddPlaneNameToFlights < ActiveRecord::Migration
  def change
    create_table :add_plane_name_to_flights do |t|
      add_column :flights, :plane_name, :string
    end
  end
end
