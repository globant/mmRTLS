[![ESP32-IDF-Build](https://github.com/globant/mmRTLS/actions/workflows/esp32.yml/badge.svg)](https://github.com/globant/mmRTLS/actions/workflows/esp32.yml)
[![ESP8266-IDF-Build](https://github.com/globant/mmRTLS/actions/workflows/esp8266.yml/badge.svg)](https://github.com/globant/mmRTLS/actions/workflows/esp8266.yml)


# mmRTLS
Multi mode passive and active indoor real time location system based on trilateration of hybrid wireless networks

mmRTLS is an integral approach of Real Time Indoor Location System based on Wireless trilateration.

![image](https://user-images.githubusercontent.com/5400635/130690276-c9533f61-1953-41e9-93a0-59ed7498a45b.png)

[(B) Beacon](beacon/README.md)
[(ND) Navigation Device](navDev/README.md)
[(CS) Control Server](ctrlSrv/README.md)

**What does remain the same?** 
- Trilateration is still based on measuring RSSI (Received signal strength indication)
- (ND) still sends RSSI information to a Control Server
- (CS) still has the position of the beacons and the indoor map
- (CS) still makes trilateration calculations for one scenario

**What is different?**
1. (B) Beacons that transmit the RSSI packet can have multiple coexisting modes:
- Passive: The RSSI is sent without control of the system by a non SW controlled Access Point (AP)
- Induced Passive: The RSSID is sent by an Access Point that will be triggered externally to send data O(e.g. Ping)
- Active: The RSSID is sent by a controlled Beacon synchronized by NTP

2. (ND) Navigation Devices that measures the RSSI:
- Can use different networks for trilaterate or transmit the RSSI
- Can locally calculate relative positioning as an option
- Can merge gyroscope and accelerator information for increased precision

3. (CS) Control Server:
- Can have their own fast NTPS for increased precision
- Process Trilateration with Sensor Fusion information (accelerometer/gyro)
- Provides the API for Onboarding and decomission devices 
- Provides the API for indoor location services

