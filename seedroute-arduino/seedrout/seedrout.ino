/*
 * Created by ArduinoGetStarted.com
 *
 * This example code is in the public domain
 *
 * Tutorial page: https://arduinogetstarted.com/tutorials/arduino-controls-pump
 */

// constants won't change
const int RELAY_PIN = A5;
// the Arduino pin, which connects to the IN pin of relay
#define POWER_PIN  7
#define SIGNAL_PIN A5

int value = 0;
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin A5 as an output.
  pinMode(RELAY_PIN, OUTPUT);
   Serial.begin(9600);
  pinMode(POWER_PIN, OUTPUT);   // configure D7 pin as an OUTPUT
  digitalWrite(POWER_PIN, LOW); // turn the sensor OFF
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(RELAY_PIN, HIGH); // turn on pump 5 seconds
  delay(5000);
  digitalWrite(RELAY_PIN, LOW);  // turn off pump 5 seconds
  delay(5000);

  digitalWrite(POWER_PIN, HIGH);  // turn the sensor ON
  delay(10);                      // wait 10 milliseconds
  value = analogRead(SIGNAL_PIN); // read the analog value from sensor
  digitalWrite(POWER_PIN, LOW);   // turn the sensor OFF

  Serial.print("Sensor value: ");
  Serial.println(value);

  delay(1000);
}