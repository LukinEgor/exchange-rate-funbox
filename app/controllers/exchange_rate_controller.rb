class ExchangeRateController < ApplicationController
  def index
    origin = 'USD'
    @rate = Rate.find_by(origin: origin)
  end
end
