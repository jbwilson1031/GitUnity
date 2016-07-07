 public var spawnCamera : Camera;
 public var carCamera : Camera;
 
 function Start() {
  spawnCamera.GetComponent.<Camera>().enabled = true;
 carCamera.GetComponent.<Camera>().enabled = false;
 }
 
 function Update() {
 
 if(Input.GetKey(KeyCode.N))
 {
 spawnCamera.GetComponent.<Camera>().enabled = false;
 carCamera.GetComponent.<Camera>().enabled = true;
 
 }
 }