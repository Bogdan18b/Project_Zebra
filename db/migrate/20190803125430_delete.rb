class Delete < ActiveRecord::Migration[5.2]
  def change
    drop_table :businesses
    drop_table :business_types
  end
end