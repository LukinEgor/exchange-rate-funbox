require 'rufus-scheduler'

scheduler = Rufus::Scheduler.singleton

scheduler.cron '0-59 * * * *' do
  ExchangeRatesJob.perform_now
end

