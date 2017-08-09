require 'test_helper'

class ExchangeRatesServiceTest < ActiveSupport::TestCase
  test 'get default rate' do
    exchange_service = ExchangeRatesService.new
    rates = exchange_service.get

    assert_equal 'USD', rates['base']
  end
end
