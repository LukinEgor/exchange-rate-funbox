require 'addressable/uri'
require 'net/http'

class ExchangeRatesService
  def get(base = "USD", currencies = ["RUB"])
    uri = Addressable::URI.parse("http://api.fixer.io/latest?base=#{base}&symbols=#{currencies.join(',')}")
    res = Net::HTTP.get(uri)
    JSON.parse(res)
  end
end
