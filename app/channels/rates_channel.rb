class RatesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rates"
  end

  def unsubsribed
  end
end
