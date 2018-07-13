@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :phone, :website, :hours, :latitude, :longitude, :rating, :address
    json.businessType business.business_type.name
    json.photoURL url_for(business.photos.first)
  end
end
