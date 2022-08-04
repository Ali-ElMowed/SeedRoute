// Include libraries needed
#include < Arduino.h >
#include " Adafruit_BLE.h "
#include " Adafruit_BluefruitLE_UART.h "
#include " BluefruitConfig.h "
#define FACTORYRESET_ENABLE
#define MINIMUM_FIRMWARE_VERSION " 0.6.6 "
#define MODE_LED_BEHAVIOUR " MODE "
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);

int counterChannel;
int elevationChannel;

int counter = 0;

SoftwareSerial bluefruitSS = SoftwareSerial(BLUEFRUIT_SWUART_TXD_PIN, BLUEFRUIT_SWUART_RXD_PIN);
Adafruit_BluefruitLE_UART ble(bluefruitSS, BLUEFRUIT_UART_MODE_PIN,
                              BLUEFRUIT_UART_CTS_PIN, BLUEFRUIT_UART_RTS_PIN);

const int RELAY_PIN = A5;
#define POWER_PIN 7
#define SIGNAL_PIN A5

int value = 0;
void setup()
{
  // initialize digital pin A5 as an output.
  pinMode(RELAY_PIN, OUTPUT);
  Serial.begin(9600);
  pinMode(POWER_PIN, OUTPUT);   // configure D7 pin as an OUTPUT
  digitalWrite(POWER_PIN, LOW); // turn the sensor OFF
  while (!Serial)
  {
    delay(500);
  }
  Serial.begin(115200);

  if (!ble.begin(VERBOSE_MODE))
  {
    error(F("Couldn't find Bluefruit, make sure it's in CoMmanD mode & check wiring?"));
  }

  if (FACTORYRESET_ENABLE)
  {
    /* Perform a factory reset to make sure everything is in a known state */
    Serial.println(F("Performing a factory reset: "));
    if (!ble.factoryReset())
    {
      error(F("Couldn't factory reset"));
    }
  }

  ble.echo(false);

  Serial.println("Requesting Bluefruit info:");

  ble.info();

  ble.reset();

  counterChannel = ble.println(F("AT+GATTADDCHAR=UUID=0x2A19,PROPERTIES=0x10,MIN_LEN=1,DESCRIPTION=Counter,VALUE=100"));
  if (counterChannel == 0)
  {
    error(F("Error adding characteristic"));
  }

  elevationChannel = ble.println(F("AT+GATTADDCHAR=UUID=0x2A6C,PROPERTIES=0x08,MIN_LEN=1,DESCRIPTION=Elevation,VALUE=0"));
  if (elevationChannel == 0)
  {
    error(F("Error adding characteristic"));
  }
}

// the loop function runs over and over again forever
void loop()
{
  digitalWrite(RELAY_PIN, HIGH); // turn on pump 5 seconds
  delay(5000);
  digitalWrite(RELAY_PIN, LOW); // turn off pump 5 seconds
  delay(5000);

  digitalWrite(POWER_PIN, HIGH);  // turn the sensor ON
  delay(10);                      // wait 10 milliseconds
  value = analogRead(SIGNAL_PIN); // read the analog value from sensor
  digitalWrite(POWER_PIN, LOW);   // turn the sensor OFF

  Serial.print("Sensor value: ");
  Serial.println(value);

  delay(1000);
}
const int RELAY_PIN = A5;
#define POWER_PIN 7
#define SIGNAL_PIN A5

int value = 0;
void setup()
{
  pinMode(RELAY_PIN, OUTPUT);
  Serial.begin(9600);
  pinMode(POWER_PIN, OUTPUT);
  digitalWrite(POWER_PIN, LOW);
}

void loop()
{
  digitalWrite(RELAY_PIN, HIGH);
  delay(5000);
  digitalWrite(RELAY_PIN, LOW);
  delay(5000);

  digitalWrite(POWER_PIN, HIGH);
  delay(10);
  value = analogRead(SIGNAL_PIN);
  digitalWrite(POWER_PIN, LOW);

  Serial.print("Sensor value: ");
  Serial.println(value);

  delay(1000);
}