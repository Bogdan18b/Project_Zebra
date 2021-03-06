# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, presence: true
  validates_uniqueness_of :user_id, scope: :business_id, message: "already reviewed the business"

  belongs_to :business,
  foreign_key: :business_id,
  class_name: :Business

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  def self.get_business_ids
    business_ids = []
    Review.all.limit(12).order(created_at: :desc).each do |rev|
      business_ids << rev.business_id
    end
    business_ids.uniq
  end

end
