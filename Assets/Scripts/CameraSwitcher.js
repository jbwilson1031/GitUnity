 public var spawnCamera : Camera;
 public var carCamera : Camera;
 public var bikeCamera : Camera;
 
 function Start() {
  spawnCamera.GetComponent.<Camera>().enabled = true;
 carCamera.GetComponent.<Camera>().enabled = false;
 bikeCamera.GetComponent.<Camera>().enabled = false;
 }
 
 function Update() {
 
 if(Input.GetKey(KeyCode.C))
 {
 spawnCamera.GetComponent.<Camera>().enabled = false;
 carCamera.GetComponent.<Camera>().enabled = true;
 bikeCamera.GetComponent.<Camera>().enabled = false;
 
 }
 
 if(Input.GetKey(KeyCode.B))
 {
  spawnCamera.GetComponent.<Camera>().enabled = false;
 carCamera.GetComponent.<Camera>().enabled = false;
 bikeCamera.GetComponent.<Camera>().enabled = true;
 }
 
 }