class ExchangeRatesJob < ActiveJob::Base
  queue_as :default

  def perform
    exchange_service = ExchangeRatesService.new
    origin = 'USD'
    targets = ['RUB']
    data = exchange_service.get(origin, targets)

    current_rate = Rate.find_by(origin: origin)
    current_rate.update_attributes(value: data['rates']['RUB'])

    ActionCable.server.broadcast("rates", result: data )
  end
end
