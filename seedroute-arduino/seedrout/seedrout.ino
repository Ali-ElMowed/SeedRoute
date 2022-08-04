
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
const int RELAY_PIN = A5;


int value = 0;
int flag = 0;
unsigned long lightStartTime;
unsigned long currentTime;
unsigned long interval = 5000;

void setup() {
  // put your setup code here, to run once:
  pinMode(RELAY_PIN, OUTPUT);
  Serial.begin(9600);
 
}
 
void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available() > 0){
    char data = Serial.read();

    switch(data){
      case 'on': switchOn(20);
            break;
    }

  }

  if(flag == 1){
    currentTime = millis();
    if(lightStartTime + interval < currentTime){
      digitalWrite(RELAY_PIN,LOW);
      flag = 0;
    }
  }
 
}
void switchOn(unsigned long timePeriod)
{
  digitalWrite(LED_BUILTIN,HIGH);
  lightStartTime = millis();
  flag = 1;
  interval = timePeriod*1000;
}
