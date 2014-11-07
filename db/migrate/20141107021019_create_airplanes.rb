class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name
      t.integer :rows
      t.string :columns

      t.timestamps
    end
  end
end
