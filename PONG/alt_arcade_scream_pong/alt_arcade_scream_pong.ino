/*
  modified on Sep 8, 2020
  Modified by MohammedDamirchi from Arduino Examples
  Home
*/



int printonce = 0;
int sensorMin = 1023;  // minimum sensor value
int sensorMax = 0;     // maximum sensor value


// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
 
  while (millis() < 5000) {
     int sensorValue = analogRead(A0);

    // record the maximum sensor value
    if (sensorValue > sensorMax) {
      sensorMax = sensorValue;
    }

    // record the minimum sensor value
    if (sensorValue < sensorMin) {
      sensorMin = sensorValue;
    }
  }
}
 





// the loop routine runs over and over again forever:
void loop() {
int sensorValue = analogRead(A0);


while(printonce < 1){
Serial.println("calibration results");
Serial.println(sensorMin);
Serial.println(sensorMax);
Serial.println("calibration results");
printonce++;
}


// read the sensor:
  sensorValue = analogRead(A0);

  // in case the sensor value is outside the range seen during calibration
  sensorValue = constrain(sensorValue, sensorMin, sensorMax);



  // apply the calibration to the sensor reading
  sensorValue = map(sensorValue, sensorMin, sensorMax, 0, 255);
  

 
  // print out the value you read:
  Serial.print(sensorValue);
  Serial.print(",");
  Serial.println(sensorValue);



  
  }
