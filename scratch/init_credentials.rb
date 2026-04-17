require "rails/all"
require "active_support/encrypted_configuration"

key_path = "config/master.key"
content_path = "config/credentials.yml.enc"

if File.exist?(key_path)
  key = File.read(key_path).strip
  config = ActiveSupport::EncryptedConfiguration.new(
    config_path: content_path,
    key_path: key_path,
    env_key: "RAILS_MASTER_KEY",
    raise_if_missing_key: true
  )
  
  secret = "3c82ff4c878272d9bb64027ceb27d2e5d7f24dad1f4568828c6998280ae05855ae76032108e39939d7b778859a29794fbe6c476f600e7b295e0a910d75ab3fff"
  
  content = <<~YAML
    secret_key_base: #{secret}
    
    # Add other credentials below
  YAML
  
  config.write(content)
  puts "Updated #{content_path} with secret_key_base"
else
  puts "Missing config/master.key"
end
