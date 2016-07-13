#pragma strict

 public var spawnCamera : Camera;
 public var carCamera : Camera;
 public var bikeCamera : Camera;
 public var theaterCamera : Camera;
 public var controlCar : UnityStandardAssets.Vehicles.Car.CarUserControl;

private var guiShow : boolean = false;
private var inCar : boolean = false;


var car : GameObject;
var rayLength = 10;


function Start()
{
  theaterCamera.gameObject.tag = "Untagged";  
  spawnCamera.gameObject.tag = "MainCamera"; 
}

function Update()
{
    var hit : RaycastHit;
    var fwd = transform.TransformDirection(Vector3.forward);
    
    if(Physics.Raycast(transform.position, fwd, hit, rayLength))
    {
        if(hit.collider.gameObject.tag == "Car")
        {
            guiShow = true;
            if(Input.GetKeyDown("e") && inCar == false)
            {
                controlCar.enabled = true;
                spawnCamera.gameObject.tag = "Untagged";
                theaterCamera.gameObject.tag = "MainCamera";
                spawnCamera.GetComponent.<Camera>().enabled = false;
                carCamera.GetComponent.<Camera>().enabled = true;
                bikeCamera.GetComponent.<Camera>().enabled = false;                
                inCar = true;
                guiShow = false;                
            }           
        }        
    } 
    
    else
    {
        guiShow = false;
    }     
}

function OnGUI()
{
    if(guiShow == true && inCar == false)
    {
        GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Get in car");
    }
}