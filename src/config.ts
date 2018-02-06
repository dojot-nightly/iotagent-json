// TLS options in configuration file.
interface TlsOptions {
  // File where the private key is.
  // If TLS is used, this attribute is mandatory.
  key: string;
  // File where the certificate is.
  // If TLS is used, this attribute is mandatory.
  cert: string;
  // File where CA (certification authority) certificate is.
  // If TLS is used, this attribute is mandatory.
  ca: Array<string>;
  // TLS version.
  // If TLS is used, this attribute is mandatory.
  version: "TLSv1_2_method" | "TLSv1_method" | "DTLSv1_method" | "DTLSv1_2_method";
}

// MQTT options
interface MqttOptions {
  // MQTT broker address (this attribute doesn't include port).
  host: string;
  // MQTT broker port
  port: number;
  // Protocol ID.
  // Default value is MQIsdp
  protocolId?: string;
  // Protocol version.
  // Default value is 3
  protocolVersion?: number;
  // Flag indicating whether traffic must be encrypted.
  secure: Boolean;
  // Encription configuration.
  // This attribute will be used only if 'secure' is true.
  tls?: TlsOptions;
}


// A simple Kafka topic
interface KafkaTopic {
  topic: string
}

// Kafka configuration
interface KafkaOptions {
  // Kafka location
  kafkaHost: string;
  // Session timeout - shorter timeouts lead to quicker failure detection, at a higher broker
  // overhead cost.
  sessionTimeout: number;
  // Kafka group ID
  groupId: string;
}

// Context broker options
interface BrokerOptions {
  // Broker address.
  // This attribute includes port, such as localhost:9092.
  host: string;
  // Broker type.
  // Default value is "orion".
  type?: "orion" | "kafka";

  ////
  // Options for kafka broker
  ////
  // subject to be used when publishing received data. Defaults to 'device-data'
  subject?: string;
  // address of the context broker that manages kafka. Defaults to 'data-broker'
  contextBroker?: string;
}

// Device manager options
interface DeviceManagerOptions {
  // Configurations for kafka consumer
  consumerOptions: KafkaOptions;
  // subject used to receive asynch notifications from deviceManager
  inputSubject: string;
}

interface TenancyOptions {
  // subject to use to receive tenancy lifecycle
  subject: string;
  // options to pass on to kafka client when creating connection
  consumerOptions: KafkaOptions;
  //
  manager: string;
}
// Main configuration structure
interface ConfigOptions {
  // MQTT options.
  mqtt: MqttOptions;
  // Context broker options.
  broker: BrokerOptions;
  // Device manager options
  device_manager: DeviceManagerOptions;
  // Tenancy management options
  tenancy: TenancyOptions;
}

export {ConfigOptions};
