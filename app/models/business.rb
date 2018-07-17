# == Schema Information
#
# Table name: businesses
#
#  id               :bigint(8)        not null, primary key
#  name             :string           not null
#  address          :string           not null
#  phone            :string           not null
#  website          :string           not null
#  latitude         :float            not null
#  longitude        :float            not null
#  business_type_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  hours            :string           default([]), is an Array
#  rating           :integer
#

class Business < ApplicationRecord
  validates :name, :address, :hours, :phone, :website, :latitude, :longitude, presence: true
  validates :name, uniqueness: true

  has_many_attached :photos

  belongs_to :business_type,
  foreign_key: :business_type_id,
  class_name: :BusinessType

  has_many :reviews,
  foreign_key: :business_id,
  class_name: :Review

  def rating
    ratings = []
    self.reviews.each do |review|
      ratings << review.rating
    end
    rating = (ratings.reduce(:+)) / ratings.length unless ratings.empty?
    return rating || 1
  end

  def self.find_business(input)
    matches = []
    debugger
    Business.all.each do |business|
      matches.push(business.name) if  business.name.downcase.include?(input.downcase)
    end
    matches
  end

end
